import { TokenNames } from '../type/enum-token';

export function isUserLogin() {
  console.log(localStorage.getItem(TokenNames.TOKEN_CUSTOMER) ? true : false);
  return localStorage.getItem(TokenNames.TOKEN_CUSTOMER) ? true : false;
}