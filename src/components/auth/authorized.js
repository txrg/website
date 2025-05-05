import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useGoogleLogin } from '@react-oauth/google';

const Authorized = ({ action, children }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['txrg_state']);

    useEffect(() => {
        if (cookies['txrg_state']) {
            axios.get(`https://oauth2.googleapis.com/tokeninfo?access_token=${cookies.txrg_state}`)
            // TODO: options https-only and secure
                .then(({data}) => {
                    const isVerified = data.email_verified === "true";
                    if (isVerified) {
                        setIsAuthorized(true);
                    } else {
                        setIsAuthorized(false);
                        removeCookie('txrg_state');
                    }
                }).catch((err) => {
                    setIsAuthorized(false);
                    removeCookie('txrg_state');
                })
        }
    }, [cookies.txrg_state]);

    const onLoginSuccess = (setCookie, removeCookie, setIsAuthorized) => res => {
        if (res.hd === "texasrollergirls.org" && res.expires_in > 0) {
            setCookie('txrg_state', res.access_token, {maxAge: res.expires_in, path: '/'});
        } else {
            removeCookie('txrg_state');
            setIsAuthorized(false);
        }
    }

    const onLoginError = (removeCookie, setIsAuthorized) => () => {
        removeCookie('txrg_state');
        setIsAuthorized(false);
    }

    const login = useGoogleLogin({
        onSuccess: onLoginSuccess(setCookie, removeCookie, setIsAuthorized),
        onError: onLoginError(removeCookie, setIsAuthorized), 
    });

    return <>
        {isAuthorized ?
        <div>{children}</div>:
        <button
            onClick={login}
            style={{
                backgroundColor: '#4285F4',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                whiteSpace: 'normal',
                height: '8.4rem',
                lineHeight: '2rem',
            }}
        >Texas Rollergirls Sign-in<br/>to<br/>{action ? action : "Access"}</button>
        }
    </>;
};

export default Authorized