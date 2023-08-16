import fetch from 'node-fetch';
import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

const clientId = process.env.CLIENT_ID || '';
const clientSecret = process.env.CLIENT_SECRET || '';
const projectKey = process.env.PROJECT_KEY || '';
const hostApi = process.env.HOST_API || '';
const hostAuth = process.env.HOST_AUTH || '';

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: hostAuth,
  projectKey: projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: clientSecret,
  },
  scopes: [`manage_my_quotes:${projectKey}
  manage_my_payments:${projectKey} 
  manage_my_orders:${projectKey} manage_my_shopping_lists:${projectKey}
   manage_my_business_units:${projectKey} view_published_products:${projectKey} 
   manage_my_quote_requests:${projectKey}
   manage_my_profile:${projectKey} view_categories:${projectKey} create_anonymous_token:${projectKey}`],
  fetch,
};
  
// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: hostApi,
  fetch,
};
  
// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();