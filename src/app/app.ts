import './app.css';
import HeaderView from '../view/header/header-view';
import MainView from '../view/main-page/main-view';
import FooterView from '../view/footer/footer-view';
import View from '../view/view';
import FirstPageView from '../view/first-page/first-page-view';
import CatalogView from '../view/catalog/catalog-view';
import NotFoundView from '../view/not-found/not-found';
import Router from './router/router';
import { ID_SELECTOR, Pages } from './../app/router/pages';
import LogInView from '../view/log-in/log-in_view';
import RegView from '../view/registration/reg-view';


export default class App {
  router: Router;

  header: HeaderView | null;

  main: MainView | null;

  footer: FooterView | null;


  constructor() {
    this.header = null;
    this.main = null;
    this.footer = null;

    const routes = this.createRoutes();
    this.router = new Router(routes);

    this.createView();
  }

  createView() {
    this.header = new HeaderView(this.router);
    this.main = new MainView();
    this.footer = new FooterView(this.router);

    document.body.append(this.header.getHtmlElement(), this.main.getHtmlElement(), this.footer.getHtmlElement());
  
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = './assets/favicon.ico';
    document.head.appendChild(link);
  }

  createRoutes() {
    return [
      {
        path: '',
        callback: () => {
          this.setContent(Pages.FIRSTPAGE, new FirstPageView());
        },
      },
      {
        path: `${Pages.FIRSTPAGE}`,
        callback: () => {
          this.setContent(Pages.FIRSTPAGE, new FirstPageView());
        },
      },
      {
        path: `${Pages.CATALOG}`,
        callback: () => {
          this.setContent(Pages.FIRSTPAGE, new CatalogView());
        },
      },
      {
        path: `${Pages.CATALOG}/${ID_SELECTOR}`,
        callback: () => {
          this.setContent(Pages.FIRSTPAGE, new CatalogView());
        },
      },
      {
        path: `${Pages.LOGIN}`,
        callback: () => {
          this.setContent(Pages.LOGIN, new LogInView(this.router));
        },
      },
      {
        path: `${Pages.REGISTER}`,
        callback: () => {
          this.setContent(Pages.REGISTER, new RegView(this.router));
        },
      },
      {
        path: `${Pages.NOT_FOUND}`,
        callback: () => {
          this.setContent(Pages.NOT_FOUND, new NotFoundView(this.router));
        },
      },
    ];
  }

  setContent(pageName: string, view: View) {
    if (this.main) {
      this.main.setContent(view);
    }
  }
}