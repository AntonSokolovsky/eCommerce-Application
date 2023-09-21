import './footer.css';
import View from '../view';
import NavFooterView from './nav-footer/nav-footer-view';
import LogoView from '../header/logo/logo-view';
import LinksView from './links-sns/links-sns-view';
import Router from '../../app/router/router';
import { Pages } from '../../app/router/pages';

export default class FooterView extends View {
  constructor(router: Router) {
    const params = {
      tag: 'footer',
      classNames: ['footer'],
    };
    super(params);
    this.configureView(router);
  }

  configureView(router: Router) {
    const navFooterView = new NavFooterView(router);
    this.viewElementCreator.addInsideElement(navFooterView.getHtmlElement());

    const linkParams = {
      name: 'AVA',
      callback: () => router.navigate(Pages.FIRSTPAGE),
    };
    const logoView = new LogoView(linkParams);
    this.viewElementCreator.addInsideElement(logoView.getHtmlElement());

    const linksView = new LinksView();
    this.viewElementCreator.addInsideElement(linksView.getHtmlElement());
  }
}