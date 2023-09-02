import './nav-header.css';
import View from '../../view';
import LinkNavHeaderView from './links-nav/links-nav-header-view';
import { ElementCreator } from '../../../utilities/element-creator';
import Router from '../../../app/router/router';
import { Pages } from '../../../app/router/pages';
import { isUserLogin } from '../../../utilities/is-user-login';

const NamePages = {
  LOGIN: 'Log in',
  REGISTER: 'Register',
  BASKET: 'Basket',
  ACCOUNT: 'Account',
};

export default class NavHeaderView extends View {
  linkElements: Map<string, LinkNavHeaderView>;

  constructor(router: Router) {
    const params = {
      tag: 'nav',
      classNames: ['nav_header'],
    };
    super(params);
    this.linkElements = new Map();
    this.configureView(router);
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
      ? (Object.keys(NamePages) as Array<keyof typeof NamePages>).filter((namePage) => {
        if (!['LOGIN', 'REGISTER'].includes(namePage)) {
          return namePage;
        }
      })
      : Object.keys(NamePages) as Array<keyof typeof NamePages>;


    arrayNamePages.forEach((key) => {
      const linkParams = {
        name: NamePages[key],
        callback: () => router.navigate(Pages[key]),
      };
      const linkElement = new LinkNavHeaderView(linkParams, this.linkElements);
      linkElement.getHtmlElement().classList.add(`nav__${key.toLowerCase()}`);
      this.viewElementCreator.addInsideElement(linkElement.getHtmlElement());

      this.linkElements.set(Pages[key], linkElement);
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

  setSelectedItem(namePage: string) {
    const linkComponent = this.linkElements.get(namePage);
    if (linkComponent instanceof LinkNavHeaderView) {
      linkComponent.setSelectedStatus();
    }
  }

}