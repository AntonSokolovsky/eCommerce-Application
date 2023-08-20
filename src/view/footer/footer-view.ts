import './footer.css';
import View from '../view';
import NavFooterView from './nav-footer/nav-footer-view';
import LogoView from '../header/logo/logo-view';
import LinksView from './links-sns/links-sns-view';
import Router from '../../app/router/router';

export default class FooterView extends View {
  constructor(mainComponent: Router) {
    const params = {
      tag: 'footer',
      classNames: ['footer'],
    };
    super(params);
    this.configureView(mainComponent);
  }

  configureView(mainComponent: Router) {
    const navFooterView = new NavFooterView(mainComponent);
    this.viewElementCreator.addInsideElement(navFooterView.getHtmlElement());
    const logoView = new LogoView();
    this.viewElementCreator.addInsideElement(logoView.getHtmlElement());
    const linksView = new LinksView();
    this.viewElementCreator.addInsideElement(linksView.getHtmlElement());
  }
}