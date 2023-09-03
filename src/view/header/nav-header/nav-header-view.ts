import './nav-header.css';
import View from '../../view';
import { Mediator } from '../../../app/controller/mediator';
import LinkNavHeaderView from './links-nav/links-nav-header-view';
import { ElementCreator } from '../../../utilities/element-creator';
import Router from '../../../app/router/router';
import { Pages } from '../../../app/router/pages';
import { isUserLogin } from '../../../utilities/is-user-login';
import { CustomEventNames } from '../../../type/mediator-type';

const NamePages = {
  LOGIN: 'Log in',
  REGISTER: 'Register',
  BASKET: 'Basket',
};

export default class NavHeaderView extends View {
  linkElements: Map<string, LinkNavHeaderView>;

  private mediator = Mediator.getInstance();

  constructor(router: Router) {
    const params = {
      tag: 'nav',
      classNames: ['nav_header'],
    };
    super(params);
    this.linkElements = new Map();
    this.configureView(router);
    this.mediator.subscribe(CustomEventNames.CUSTOMER_LOGIN, this.authHandler.bind(this));
  }

  configureView(router: Router) {
    const paramsSearch = {
      tag: 'div',
      classNames: ['search'],
      textContent: 'search',
      callback: null,
    };
    const creatorSearch = new ElementCreator(paramsSearch);
    this.viewElementCreator.addInsideElement(creatorSearch);

    const arrayNamePages = isUserLogin() 
      ? (Object.entries(NamePages) as Array<Array<keyof typeof NamePages>>).filter((namePage) => {
        if (![NamePages.LOGIN, NamePages.REGISTER].includes(namePage[1])) {
          console.log(namePage[1]);
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
      this.viewElementCreator.addInsideElement(creatorLogoutButton);
    }
  }

  authHandler() {
    this.linkElements.forEach((linkElement) => {
      linkElement.getHtmlElement().remove();
    });
  }

  setSelectedItem(namePage: string) {
    const linkComponent = this.linkElements.get(namePage);
    if (linkComponent instanceof LinkNavHeaderView) {
      linkComponent.setSelectedStatus();
    }
  }

}