export interface AwsAuth {
    username: string;
    pool: Pool;
    Session: null;
    client: Client;
    signInUserSession: SignInUserSession;
    authenticationFlowType: string;
    storage: Storage;
    keyPrefix: string;
    userDataKey: string;
    attributes: Attributes;
    preferredMFA: string;
}

export interface Attributes {
    sub: string;
    email_verified: boolean;
    phone_number_verified: boolean;
    phone_number: string;
    email: string;
}

export interface Client {
    endpoint: string;
    fetchOptions: FetchOptions;
}

export interface FetchOptions {
}

export interface Pool {
    userPoolId: string;
    clientId: string;
    client: Client;
    advancedSecurityDataCollectionFlag: boolean;
    storage: Storage;
}

export interface Storage {
    'theme-ui-color-mode': string;
    'amplify-signin-with-hostedUI': string;
    'CognitoIdentityServiceProvider.7675n14liusmcqhjbnqhkeg977.LastAuthUser': string;
    'CognitoIdentityServiceProvider.7675n14liusmcqhjbnqhkeg977.louiskamp.refreshToken': string;
    'CognitoIdentityServiceProvider.7675n14liusmcqhjbnqhkeg977.louiskamp.idToken': string;
    'CognitoIdentityServiceProvider.7675n14liusmcqhjbnqhkeg977.louiskamp.clockDrift': string;
    'CognitoIdentityServiceProvider.7675n14liusmcqhjbnqhkeg977.louiskamp.accessToken': string;
    'CognitoIdentityServiceProvider.7675n14liusmcqhjbnqhkeg977.louiskamp.userData': string;
    reactQueryDevtoolsOpen: string;
}

export interface SignInUserSession {
    idToken: IDToken;
    refreshToken: RefreshToken;
    accessToken: AccessToken;
    clockDrift: number;
}

export interface AccessToken {
    jwtToken: string;
    payload: AccessTokenPayload;
}

export interface AccessTokenPayload {
    sub: string;
    event_id: string;
    token_use: string;
    scope: string;
    auth_time: number;
    iss: string;
    exp: number;
    iat: number;
    jti: string;
    client_id: string;
    username: string;
}

export interface IDToken {
    jwtToken: string;
    payload: IDTokenPayload;
}

export interface IDTokenPayload {
    sub: string;
    email_verified: boolean;
    iss: string;
    phone_number_verified: boolean;
    'cognito:username': string;
    aud: string;
    event_id: string;
    token_use: string;
    auth_time: number;
    phone_number: string;
    exp: number;
    iat: number;
    email: string;
}

export interface RefreshToken {
    token: string;
}
