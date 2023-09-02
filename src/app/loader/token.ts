import { TokenStore, TokenCache } from '@commercetools/sdk-client-v2';
import { TokenNames } from '../../type/enum-token';

export class TokenStorage {
  private static instanceToken = new TokenStorage;

  private tokens = new Map<string, TokenStore>();
  // eslint-disable-next-line
  constructor() {}
    
  static getInstance() {
    return this.instanceToken;
  }

  anonTokenCache: TokenCache = {
    get: () => {
      const cache = this.tokens.get(TokenNames.TOKEN_ANONIM);

      return cache ? cache : this.anonTokenCache.get();
    },

    set: (cache: TokenStore) => {
      this.tokens.set(TokenNames.TOKEN_ANONIM, cache);
    },
  };

  customerTokenCache: TokenCache = {
    get: () => {
      const cache = this.tokens.get(TokenNames.TOKEN_CUSTOMER);

      return cache ? cache : this.customerTokenCache.get();
    },

    set: (cache: TokenStore) => {
      this.tokens.set('token', cache);
    },
  };

  getCurrentToken() {
    const cache = this.tokens.get(TokenNames.TOKEN_CUSTOMER) || this.tokens.get(TokenNames.TOKEN_ANONIM);
    const token = cache ? `Bearer ${cache.token}` : '';
    return token;
  }
}

// const tokens1 = new Map<string, TokenStore>();
// export const anonTokenCache: TokenCache = {
//   get: () => {
//     const cache: TokenStore = tokens1.get(TokenNames.TOKEN_ANONIM)
//     // const cache = localStorage.getItem('anonToken');
//     // return cache ? JSON.parse(cache) : null;
//     if (cache !== null ) {
//         return cache
//     }
//     // return cache ? cache.toString()
//   },
//   set: (cache: TokenStore) => {
//     localStorage.setItem('anonToken', JSON.stringify(cache));
//   },
// };

// export const userTokenCache: TokenCache = {
//   get: () => {
//     const cache = localStorage.getItem('userToken');
//     return cache ? JSON.parse(cache) : null;
//   },
//   set: (cache: TokenStore) => {
//     localStorage.setItem('userToken', JSON.stringify(cache));
//   },
// };

// export function getCurrentToken() {
//   const cache = 
//     localStorage.getItem('userToken') || localStorage.getItem('anonToken');
//   const token = cache ? `Bearer ${JSON.parse(cache)?.token}` : '';
//   return token;
// }
