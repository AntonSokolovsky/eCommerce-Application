import './nav-footer.css';
import View from '../../view';
import LinkNavFooterView from './links-nav/links-nav-footer-view';
// import { ElementCreator } from '../../../utilities/element-creator';
import Router from '../../../app/router/router';
import { Pages } from '../../../app/router/pages';

const NamePages = {
  FIRSTPAGE: 'Main',
  CATALOG: 'Catalog',
  ABOUT_US: 'About us',
};

export default class NavFooterView extends View {
  linkElements: Map<string, LinkNavFooterView>;
  
  constructor(router: Router) {
    const params = {
      tag: 'nav',
      classNames: ['nav_footer'],
    };
    super(params);
    this.linkElements = new Map();
    this.configureView(router);
  }

  configureView(router: Router) {

    (Object.keys(NamePages) as Array<keyof typeof NamePages>).forEach((key) => {
      const linkParams = {
        name: NamePages[key],
        callback: () => router.navigate(Pages[key]),
      };
      const linkElement = new LinkNavFooterView(linkParams, this.linkElements);

      this.viewElementCreator.addInsideElement(linkElement.getHtmlElement());

      this.linkElements.set(Pages[key], linkElement);
    });
  }

  setSelectedItem(namePage: string) {
    const linkComponent = this.linkElements.get(namePage);
    if (linkComponent instanceof LinkNavFooterView) {
      linkComponent.setSelectedStatus();
    }
  }
}