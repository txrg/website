import React from 'react';
import GoogleOneTapLogin from 'react-google-one-tap-login';
import { CookiesProvider, useCookies } from 'react-cookie'

const onError = (removeCookie) => (_) => removeCookie('txrg_state');
const onSuccess = (setCookie, removeCookie) => (res) => {
    if (res.hd === "texasrollergirls.org" && res.email_verified === "true") {
        const expires = new Date(res.exp * 1000);
        setCookie('txrg_state', res.exp, {expires});
    } else {
        removeCookie('txrg_state');
    }
};

const GoogleOneTap = () => {
    const [_, setCookie, removeCookie] = useCookies(['txrg_state']);
    return <GoogleOneTapLogin
        googleAccountConfigs={{ client_id: process.env.GATSBY_GOOGLE_AUTH_CLIENT_ID }}
        onError={onError(removeCookie)}
        onSuccess={onSuccess(setCookie, removeCookie)}
    />;
};

const WrappedGoogleOneTap = () => <CookiesProvider defaultSetOptions={{path: '/'}}><GoogleOneTap /></CookiesProvider>;
export default WrappedGoogleOneTap;