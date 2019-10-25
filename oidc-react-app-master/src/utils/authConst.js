export const IDENTITY_CONFIG = {
  authority: 'https://accounts.google.com/o/oauth2/auth',// process.env.REACT_APP_AUTH_URL,
  client_id: '1039915445808-l3kq8vp0v3mvkeinkn7op54ha454cce2.apps.googleusercontent.com', //process.env.REACT_APP_IDENTITY_CLIENT_ID,
  redirect_uri: 'http://127.0.0.1:3001/callback', // process.env.REACT_APP_REDIRECT_URL,
  silent_redirect_uri: 'http://127.0.0.1:3001/callback', // process.env.REACT_APP_SILENT_REDIRECT_URL,
  post_logout_redirect_uri: 'http://127.0.0.1:3001/callback', // process.env.REACT_APP_LOGOFF_REDIRECT_URL,
  audience: "your audience",
  response_type: "id_token token",
  automaticSilentRenew: false,
  loadUserInfo: false,
  scope: "openid email profile"
};

export const METADATA_OIDC = {
  issuer: "http://identityserver",
  jwks_uri:
    process.env.REACT_APP_AUTH_URL + "/.well-known/openid-configuration/jwks",
  authorization_endpoint: 'https://accounts.google.com/o/oauth2/auth', // process.env.REACT_APP_AUTH_URL + "/connect/authorize",
  token_endpoint: 'https://oauth2.googleapis.com/token', // process.env.REACT_APP_AUTH_URL + "/connect/token",
  userinfo_endpoint: 'https://www.googleapis.com/oauth2/v1/userinfo', // process.env.REACT_APP_AUTH_URL + "/connect/userinfo",
  end_session_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/endsession",
  check_session_iframe:
    process.env.REACT_APP_AUTH_URL + "/connect/checksession",
  revocation_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/revocation",
  introspection_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/introspect"
};
