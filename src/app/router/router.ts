import { Pages } from './pages';

export default class Router {
  routes: Array<{ path: string, callback: (e: string) => void }>;

  constructor(routes: Array<{ path: string, callback: (e: string) => void }>) {
    this.routes = routes;

    document.addEventListener('DOMContentLoaded', () => {
      const path = this.getCurrentPath();
      this.navigate(path);
    });

    window.addEventListener('popstate', this.browserChangeHandler.bind(this));
    window.addEventListener('hashchange', this.browserChangeHandler.bind(this));
  }

  navigate(url: string) {
    const request = this.parseUrl(url);

    const pathForFind = request.resource === '' ? request.path : `${request.path}/${request.resource}`;
    const route = this.routes.find((item) => item.path === pathForFind);
    if (!route) {
      this.redirectToNotFound();
      return;
    }

    route.callback('');
  }

  parseUrl(url: string) {
    const result: { path?: string, resource?: string } = {};

    const path = url.split('/');
    [result.path = '', result.resource = ''] = path;
    return result;
  }

  redirectToNotFound() {
    const routeNotFound = this.routes.find((item) => item.path === Pages.NOT_FOUND);
    if (routeNotFound) {
      this.navigate(routeNotFound.path);
    }
  }

  browserChangeHandler() {
    const path = this.getCurrentPath();
    this.navigate(path);
  }

  getCurrentPath() {
    if (window.location.hash) {
      return window.location.hash.slice(1);
    }
    return window.location.pathname.slice(1);
  }
}