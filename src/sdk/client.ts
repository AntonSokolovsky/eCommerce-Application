import fetch from 'node-fetch';
import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

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
};
  
// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: urlApi,
  fetch,
};
  
// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
  