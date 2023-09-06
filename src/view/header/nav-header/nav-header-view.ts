import './nav-header.css';
import View from '../../view';
import { Mediator } from '../../../app/controller/mediator';
import LinkNavHeaderView from './links-nav/links-nav-header-view';
import { ElementCreator } from '../../../utilities/element-creator';
import Router from '../../../app/router/router';
import { Pages } from '../../../app/router/pages';
import { isUserLogin } from '../../../utilities/is-user-login';
import { CustomEventNames } from '../../../type/mediator-type';
import { TokenNames } from '../../../type/enum-token';

const NamePages = {
  CATALOG: 'Catalog',
  LOGIN: 'Log in',
  REGISTER: 'Register',
  BASKET: 'Basket',
  ACCOUNT: 'Account',
};

export default class NavHeaderView extends View {
  linkElements: Map<string, LinkNavHeaderView>;
  
  logoutButton: HTMLElement[] = [];

  private mediator = Mediator.getInstance();

  constructor(router: Router) {
    const params = {
      tag: 'nav',
      classNames: ['nav_header'],
    };
    super(params);
    this.linkElements = new Map();
    this.configureView(router);
    this.mediator.subscribe(CustomEventNames.CUSTOMER_LOGIN, this.authHandler.bind(this, router));
  }

  configureView(router: Router) {
    // const paramsSearch = {
    //   tag: 'div',
    //   classNames: ['search'],
    //   textContent: 'search',
    //   callback: null,
    // };
    // const creatorSearch = new ElementCreator(paramsSearch);
    // this.viewElementCreator.addInsideElement(creatorSearch);

    const arrayNamePages = isUserLogin() 
      ? (Object.entries(NamePages) as Array<Array<keyof typeof NamePages>>).filter((namePage) => {
        if (![NamePages.LOGIN, NamePages.REGISTER].includes(namePage[1])) {
          return namePage;
        }
      })
      : Object.entries(NamePages) as Array<Array<keyof typeof NamePages>>;

    arrayNamePages.forEach((page) => {
      const linkParams = {
        name: NamePages[page[0]],
        callback: () => router.navigate(Pages[page[0]]),
      };
      const linkElement = new LinkNavHeaderView(linkParams, this.linkElements);
      linkElement.getHtmlElement().classList.add(`nav__${page[0].toLowerCase()}`);
      this.viewElementCreator.addInsideElement(linkElement.getHtmlElement());
      this.linkElements.set(Pages[page[0]], linkElement);
    });
    if (isUserLogin()) {
      const paramsLogoutButton = {
        tag: 'div',
        classNames: ['button-logout'],
        textContent: 'Log out',
        callback: null,
      };
      const creatorLogoutButton = new ElementCreator(paramsLogoutButton);
      creatorLogoutButton.setCallback(()=> this.logoutCustomer(router));
      this.logoutButton.push(creatorLogoutButton.getElement());
      this.viewElementCreator.addInsideElement(creatorLogoutButton);
    }
  }

  logoutCustomer(router: Router) {
    this.mediator.loginLogoutCustomer(CustomEventNames.CUSTOMER_LOGOUT);
    this.logoutButton[0].remove();
    localStorage.removeItem(TokenNames.TOKEN_CUSTOMER);
    this.linkElements.forEach(item => item.getHtmlElement().remove());
    this.viewElementCreator.getElement().childNodes.forEach(item => item.remove());
    this.configureView(router);
    router.navigate(Pages.FIRSTPAGE);
  }

  addButtonLogout(router: Router) {
    const paramsLogoutButton = {
      tag: 'div',
      classNames: ['button-logout'],
      textContent: 'Log out',
      callback: null,
    };
    const creatorLogoutButton = new ElementCreator(paramsLogoutButton);
    creatorLogoutButton.setCallback(()=> this.logoutCustomer(router));
    this.logoutButton.push(creatorLogoutButton.getElement());
    return creatorLogoutButton.getElement();
  }

  authHandler(router: Router) {
    this.linkElements.forEach((linkElement) => {
      if (linkElement.getHtmlElement().textContent !== NamePages.BASKET && linkElement.getHtmlElement().textContent !== NamePages.ACCOUNT)
        linkElement.getHtmlElement().remove();
    });
    this.viewElementCreator.addInsideElement(this.addButtonLogout(router));
  }

  setSelectedItem(namePage: string) {
    const linkComponent = this.linkElements.get(namePage);
    if (linkComponent instanceof LinkNavHeaderView) {
      linkComponent.setSelectedStatus();
    }
  }

}