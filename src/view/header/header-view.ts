import './header.css';
import View from '../view';
import BurgerMenuView from './burger-menu/burger-menu-view';
import LogoView from './logo/logo-view';
import NavHeaderView from './nav-header/nav-header-view';
import Router from '../../app/router/router';

export default class HeaderView extends View {
  constructor(mainComponent: Router) {
    const params = {
      tag: 'header',
      classNames: ['header'],
    };
    super(params);
    this.configureView(mainComponent);
  }

  configureView(mainComponent: Router) {
    const burgerMenuView = new BurgerMenuView();
    this.viewElementCreator.addInsideElement(burgerMenuView.getHtmlElement());
    const logoView = new LogoView();
    this.viewElementCreator.addInsideElement(logoView.getHtmlElement());
    const navHeaderView = new NavHeaderView(mainComponent);
    this.viewElementCreator.addInsideElement(navHeaderView.getHtmlElement());
  }
}