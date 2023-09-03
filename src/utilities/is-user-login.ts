import { TokenNames } from '../type/enum-token';

export function isUserLogin() {
  return localStorage.getItem(TokenNames.TOKEN_CUSTOMER) ? true : false;
}