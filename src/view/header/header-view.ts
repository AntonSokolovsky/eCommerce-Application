import './header.css';
import View from '../view';
// import BurgerMenuView from './burger-menu/burger-menu-view';
import LogoView from './logo/logo-view';
import NavHeaderView from './nav-header/nav-header-view';
import Router from '../../app/router/router';
import { Pages } from '../../app/router/pages';

export default class HeaderView extends View {
  navHeaderView: NavHeaderView | null;

  constructor(router: Router) {
    const params = {
      tag: 'header',
      classNames: ['header'],
    };
    super(params);
    this.navHeaderView = null;
    this.configureView(router);
  }

  configureView(router: Router) {
    // const burgerMenuView = new BurgerMenuView();
    // this.viewElementCreator.addInsideElement(burgerMenuView.getHtmlElement());

    const linkParams = {
      name: 'AVA',
      callback: () => router.navigate(Pages.FIRSTPAGE),
    };
    const logoView = new LogoView(linkParams);
    this.viewElementCreator.addInsideElement(logoView.getHtmlElement());

    this.navHeaderView = new NavHeaderView(router);
    this.viewElementCreator.addInsideElement(this.navHeaderView.getHtmlElement());
  }

  setSelectedItem(pageName: string) {
    if (this.navHeaderView) {
      this.navHeaderView.setSelectedItem(pageName);
    }
  }
}