import React from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';

const Authorized = ({ children }) => {
    const [cookies] = useCookies(['txrg_state']);

    let isAuthorized = false;
    if (cookies['txrg_state']) {
        const expiration = new Date(cookies['txrg_state'] * 1000);
        const now = new Date();
        isAuthorized = expiration > now;
    }
    return <>
        {isAuthorized ?
        <div>{children}</div>:
        <div>Signin to View</div>
        }
    </>;
    
};

const WrappedAuthorized = ({ children }) => <CookiesProvider><Authorized>{children}</Authorized></CookiesProvider>;

export default WrappedAuthorized