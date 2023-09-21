import fetch from 'node-fetch';
import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
  UserAuthOptions,
  ExistingTokenMiddlewareOptions,
  RefreshAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import { TokenStorage } from '../app/loader/token';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { TokenNames } from '../type/enum-token';

const clientId = process.env.CTP_CLIENT_ID || '';
const clientSecret = process.env.CTP_CLIENT_SECRET || '';
const projectKey = process.env.CTP_PROJECT_KEY || '';
const urlApi = process.env.CTP_API_URL || '';
const urlAuth = process.env.CTP_AUTH_URL || '';
const scopes = process.env.CTP_SCOPES || '';
const tokenStorage = TokenStorage.getInstance(); 

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: urlAuth,
  projectKey: projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: clientSecret,
  },
  scopes: [scopes],
  fetch,
  tokenCache: tokenStorage.anonTokenCache,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: urlApi,
  fetch,
};
  
//Configure PasswordAuthMiddlewareOptions
const options: PasswordAuthMiddlewareOptions = {
  host: urlAuth,
  projectKey: projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: clientSecret,
    user: {
      username: '',
      password: '',
    },
  },
  scopes: [`manage_project:${projectKey}`],
  fetch,
  tokenCache: tokenStorage.customerTokenCache,
};

const refreshAuthMiddlewareOptions: RefreshAuthMiddlewareOptions = {
  host: urlAuth,
  projectKey: projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: clientSecret,
  },
  refreshToken: tokenStorage.getRefreshToken(),
  tokenCache: tokenStorage.customerTokenCache,
  fetch,
};
// Export the ClientBuilder

const existingAuthMiddlewareOptions: ExistingTokenMiddlewareOptions = {
  force: true,
};

export function getCtpClientAnonFlow() {
  const currentToken = tokenStorage.getCurrentToken();
  const ctpClient = currentToken
    ? new ClientBuilder()
      .withExistingTokenFlow(currentToken, existingAuthMiddlewareOptions)
      .withRefreshTokenFlow(refreshAuthMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .build()
    : new ClientBuilder()
      .withAnonymousSessionFlow(authMiddlewareOptions)
      .withRefreshTokenFlow(refreshAuthMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .build();
  return createApiBuilderFromCtpClient(ctpClient)
    .withProjectKey({ projectKey: projectKey });
}

export function getCtpClientPasswordFlow(userAuth: UserAuthOptions) {
  localStorage.removeItem(TokenNames.TOKEN_CUSTOMER);
  localStorage.removeItem(TokenNames.TOKEN_ANONIM);
  const optionsPasswordFlow = { ...options };
  optionsPasswordFlow.credentials.user = { ...userAuth };
  const ctpClientPasswordFlow = new ClientBuilder()
    .withPasswordFlow(optionsPasswordFlow)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
  return createApiBuilderFromCtpClient(ctpClientPasswordFlow)
    .withProjectKey({ projectKey: projectKey });
}

export function createFlow(userAuth?: UserAuthOptions) {
  if (userAuth) {
    return getCtpClientPasswordFlow(userAuth);
  }
  return getCtpClientAnonFlow();
}
