import { TokenStorage } from '../app/loader/token';

export function isUserLogin() {
  console.log(TokenStorage.getInstance().getCurrentToken());
  return TokenStorage.getInstance().getCurrentToken() ? true : false;
}