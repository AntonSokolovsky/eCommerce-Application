export default class HistoryRouterHandler {
  params: { nameEvent: string, locationField: string };

  callback: (e: { path ?: string, resource ?: string }) => void;

  handler: (url: PopStateEvent | string) => void;

  constructor(callback: (e: { path?: string, resource?: string }) => void) {
    this.params = {
      nameEvent: 'popstate',
      locationField: 'pathname',
    };
    this.callback = callback;
    this.handler = this.navigate.bind(this);

    window.addEventListener('popstate', this.handler);
  }

  navigate(url: PopStateEvent | string) {
    if (typeof url === 'string') {
      this.setHistory(url);
    }
    const urlString = window.location.pathname.slice(1);

    const result: { path?: string, resource?: string } = {};
    const path = urlString.split('/');
    [result.path = '', result.resource = ''] = path;

    this.callback(result);
  }

  disable() {
    window.removeEventListener('popstate', this.handler);
  }

  setHistory(url: string) {
    window.history.pushState(null, '', `/${url}`);
  }
}