import { CustomerDraft } from '@commercetools/platform-sdk';
import { TokenStore } from '@commercetools/sdk-client-v2';

export const enum CustomEventNames {
  CUSTOMER_LOGIN = 'login',
  CUSTOMER_LOGOUT = 'logout',
  PRODUCT_ADD = 'product-add',
  PRODUCT_REMOVE = 'product-remove',
}

export type ListenerMethod = (param?: ParamsCustomEvent) => void; 

export type ParamsCustomEvent = {
  customer?: CustomerDraft,
  token?: TokenStore
};