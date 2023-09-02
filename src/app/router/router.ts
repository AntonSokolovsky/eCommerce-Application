import { Pages, ID_SELECTOR } from './pages';
import HistoryRouterHandler from '../handler/history-router';

export default class Router {
  routes: Array<{ path: string, callback: (e?: string) => void }>;

  handler: HistoryRouterHandler;

  constructor(routes: Array<{ path: string, callback: () => void }>) {
    this.routes = routes;

    this.handler = new HistoryRouterHandler(this.urlChangedHandler.bind(this));

    document.addEventListener('DOMContentLoaded', () => {
      this.handler.navigate('');
    });
  }

  navigate(url: string) {
    this.handler.navigate(url);
  }

  urlChangedHandler(requestParams: { path?: string, resource?: string }) {
    const pathForFind = requestParams.resource === '' ? requestParams.path : `${requestParams.path}/${ID_SELECTOR}`;
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
    if (requestParams.resource) {
      route.callback(requestParams.resource);
    } else {
      route.callback();
    }
    return result;
  }

  redirectToNotFound() {
    const routeNotFound = this.routes.find((item) => item.path === Pages.NOT_FOUND);
    if (routeNotFound) {
      this.navigate(routeNotFound.path);
    }
  }
}