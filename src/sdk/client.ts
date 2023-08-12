import fetch from 'node-fetch';
import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
  
// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'ava-ecommerce',
  credentials: {
    clientId: '8zxq7q_A1uABYIzLc7EwMOxt',
    clientSecret: '4GN_1c_xZ7goak1ybNhq17CEh_39k8fM',
  },
  scopes: [`manage_my_quotes:ava-ecommerce 
  manage_my_payments:ava-ecommerce 
  manage_my_orders:ava-ecommerce manage_my_shopping_lists:ava-ecommerce
   manage_my_business_units:ava-ecommerce view_published_products:ava-ecommerce 
   manage_my_quote_requests:ava-ecommerce
   manage_my_profile:ava-ecommerce view_categories:ava-ecommerce create_anonymous_token:ava-ecommerce`],
  fetch,
};
  
// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
};
  
// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();