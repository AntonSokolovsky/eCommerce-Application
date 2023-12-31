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
import { ElementParams } from '../../../type/params-element-type';
import { Customer } from '../../../app/loader/customer';

const NamePages = {
  FIRSTPAGE: 'Main',
  CATALOG: 'Catalog',
  LOGIN: 'Log in',
  REGISTER: 'Register',
  BASKET: 'Basket',
  ACCOUNT: 'Account',
  ABOUT_US: 'About us',
};

export default class NavHeaderView extends View {
  linkElements: Map<string, LinkNavHeaderView>;
  
  logoutButton: HTMLElement[] = [];

  private loader = new Customer();

  private basketButton: LinkNavHeaderView | null;

  private mediator = Mediator.getInstance();

  constructor(router: Router) {
    const params = {
      tag: 'nav',
      classNames: ['nav_header'],
    };
    super(params);
    this.linkElements = new Map();
    this.basketButton = null;
    this.configureView(router);
    this.mediator.subscribe(CustomEventNames.CUSTOMER_LOGIN, this.authHandler.bind(this, router));
    this.mediator.subscribe(CustomEventNames.BASKET_UPDATE, this.addCountBasket.bind(this));
  }

  configureView(router: Router) {
    //ToDo: implement search service
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
      if (page[0].toLowerCase() === Pages.BASKET.toLowerCase()) {
        this.basketButton = linkElement;
      }
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
    this.addCountBasket();
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
    while (this.viewElementCreator.getElement().firstChild) {
      this.viewElementCreator.getElement().firstChild?.remove();
    }
    this.configureView(router);
  }

  setSelectedItem(namePage: string) {
    const linkComponent = this.linkElements.get(namePage);
    if (linkComponent instanceof LinkNavHeaderView) {
      linkComponent.setSelectedStatus();
    }
  }

  async addCountBasket() {
    const loader = new Customer();
    this.basketButton?.getHtmlElement().firstChild?.remove();
    const response = (await loader.getUserCart());
    let amount = 0;
    if (response.body.results.length) {
      amount = response.body.results[0].lineItems.length;
    }
    const countBasketParams: ElementParams = {
      tag: 'span',
      classNames: ['basket__count'],
      textContent: '',
      callback: null,
    };
    const creatorCountBasket = new ElementCreator(countBasketParams);
    if (amount) {
      creatorCountBasket.setTextContent(amount.toString());
      if (this.basketButton) {
        this.basketButton.getHtmlElement().append(creatorCountBasket.getElement());
      }
    }
  }
}