export function isUserLogin() {
  return localStorage.userToken ? true : false;
}