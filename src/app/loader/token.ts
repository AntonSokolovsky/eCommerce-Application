import { TokenStore, TokenCache } from '@commercetools/sdk-client-v2';
import { TokenNames } from '../../type/enum-token';

export class TokenStorage {
  private static instanceToken = new TokenStorage;

  // eslint-disable-next-line
    private constructor() {}
      
  static getInstance() {
    return this.instanceToken;
  }
  
  anonTokenCache: TokenCache = {
    get: () => {
      const cache = localStorage.getItem(TokenNames.TOKEN_ANONIM);
      return cache ? JSON.parse(cache) : null;
    },
    set: (cache: TokenStore) => {
      localStorage.setItem(TokenNames.TOKEN_ANONIM, JSON.stringify(cache));
    },
  };
  
  customerTokenCache: TokenCache = {
    get: () => {
      const cache = localStorage.getItem(TokenNames.TOKEN_CUSTOMER);
      return cache ? JSON.parse(cache) : null;
    },
    set: (cache: TokenStore) => {
      localStorage.setItem(TokenNames.TOKEN_CUSTOMER, JSON.stringify(cache));
    },
  };
    
  getCurrentToken() {
    const cache = 
           localStorage.getItem(TokenNames.TOKEN_CUSTOMER) || localStorage.getItem(TokenNames.TOKEN_ANONIM);
    const token = cache ? `Bearer ${JSON.parse(cache)?.token}` : '';

    return token;
  }

  getRefreshToken() {
    const cache = 
           localStorage.getItem(TokenNames.TOKEN_CUSTOMER) || localStorage.getItem(TokenNames.TOKEN_ANONIM);
    const refreshToken = cache ?  JSON.parse(cache).refreshToken : '';

    return refreshToken;
  }
}
