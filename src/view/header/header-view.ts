import './header.css';
import View from '../view';
import BurgerMenuView from './burger-menu/burger-menu-view';
import LogoView from './logo/logo-view';
import NavHeaderView from './nav-header/nav-header-view';


export default class HeaderView extends View {
  constructor() {
    const params = {
      tag: 'header',
      classNames: ['header'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const burgerMenuView = new BurgerMenuView();
    this.viewElementCreator.addInsideElement(burgerMenuView.getHtmlElement());
    const logoView = new LogoView();
    this.viewElementCreator.addInsideElement(logoView.getHtmlElement());
    const navHeaderView = new NavHeaderView();
    this.viewElementCreator.addInsideElement(navHeaderView.getHtmlElement());
  }
}