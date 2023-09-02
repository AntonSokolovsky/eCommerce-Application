import { TokenStore, TokenCache } from '@commercetools/sdk-client-v2';

export const anonTokenCache: TokenCache = {
  get: () => {
    const cache = localStorage.getItem('anonToken');
    return cache ? JSON.parse(cache) : null;
  },
  set: (cache: TokenStore) => {
    localStorage.setItem('anonToken', JSON.stringify(cache));
  },
};

export const userTokenCache: TokenCache = {
  get: () => {
    const cache = localStorage.getItem('userToken');
    return cache ? JSON.parse(cache) : null;
  },
  set: (cache: TokenStore) => {
    localStorage.setItem('userToken', JSON.stringify(cache));
  },
};

export function getCurrentToken() {
  const cache = 
    localStorage.getItem('userToken') || localStorage.getItem('anonToken');
  const token = cache ? `Bearer ${JSON.parse(cache)?.token}` : '';
  return token;
}
