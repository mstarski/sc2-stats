const { BaseTokenRequestHandler, TokenRequest, AuthorizationServiceConfiguration } = require('@openid/appauth');
const { oauth } = require('../local/config');
const { GRANT_TYPE_AUTHORIZATION_CODE } = require('@openid/appauth/built/token_request');

module.export = class AuthService {
    constructor() {
        this.configuration = null;
        this.token = null;
        this.request = null;
        this.asc = this.asc.bind(this);
        this.tokenFunc = this.tokenFunc.bind(this);
    }

    asc() {
        AuthorizationServiceConfiguration.fetchFromIssuer('https://eu.battle.net/oauth')
            .then(response => {
                log('Fetched service configuration', response);
                this.configuration = response;
                window.console.log('Completed fetching configuration');
            })
            .catch(error => {
                window.console.log('Something bad happened', error);
                window.console.log(`Something bad happened ${error}`)
            });
    }


    tokenFunc() {
        this.tokenHandler = new BaseTokenRequestHandler();
        this.request = new TokenRequest({
            client_id: oauth.clientId,
            redirect_uri: 'https://localhost',
            grant_type: GRANT_TYPE_AUTHORIZATION_CODE,
            refresh_token: undefined,
            extras: {},
        });
        this.tokenHandler.performTokenRequest(this.configuration, request)
            .then(response => {
                localStorage.setItem('a', response);
            });
    }
}




