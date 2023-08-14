import './footer.css';
import View from '../view';
import NavFooterView from './nav-footer/nav-footer-view';
import LogoView from '../header/logo/logo-view';
import LinksView from './links/links-view';


export default class FooterView extends View {
  constructor() {
    const params = {
      tag: 'footer',
      classNames: ['footer'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const navFooterView = new NavFooterView();
    this.viewElementCreator.addInsideElement(navFooterView.getHtmlElement());
    const logoView = new LogoView();
    this.viewElementCreator.addInsideElement(logoView.getHtmlElement());
    const linksView = new LinksView();
    this.viewElementCreator.addInsideElement(linksView.getHtmlElement());
  }
}