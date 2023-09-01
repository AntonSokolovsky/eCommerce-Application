import fetch from 'node-fetch';
import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
  UserAuthOptions,
  ExistingTokenMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import { anonTokenCache, getCurrentToken, userTokenCache } from '../app/loader/token';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

const clientId = process.env.CTP_CLIENT_ID || '';
const clientSecret = process.env.CTP_CLIENT_SECRET || '';
const projectKey = process.env.CTP_PROJECT_KEY || '';
const urlApi = process.env.CTP_API_URL || '';
const urlAuth = process.env.CTP_AUTH_URL || '';
const scopes = process.env.CTP_SCOPES || '';

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
  tokenCache: anonTokenCache,
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
  tokenCache: userTokenCache,
};
// Export the ClientBuilder

const existingAuthMiddlewareOptions: ExistingTokenMiddlewareOptions = {
  force: true,
};

export function getCtpClientAnonFlow() {
  const currentToken = getCurrentToken();
  const ctpClient = currentToken
    ? new ClientBuilder()
      .withExistingTokenFlow(currentToken, existingAuthMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .withLoggerMiddleware()
      .build()
    : new ClientBuilder()
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .withLoggerMiddleware()
      .build();
  return createApiBuilderFromCtpClient(ctpClient)
    .withProjectKey({ projectKey: projectKey });
}

export function getCtpClientPasswordFlow(userAuth: UserAuthOptions) {
  const optionsPasswordFlow = { ...options };
  optionsPasswordFlow.credentials.user = { ...userAuth };
  const ctpClientPasswordFlow = new ClientBuilder()
    .withPasswordFlow(optionsPasswordFlow)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();
  return createApiBuilderFromCtpClient(ctpClientPasswordFlow)
    .withProjectKey({ projectKey: projectKey });
}
