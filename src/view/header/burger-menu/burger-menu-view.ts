import './burger-menu.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';


export default class BurgerMenuView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['menu-burger'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const paramsLine = {
      tag: 'span',
      classNames: ['menu-burger__line'],
      textContent: '',
      callback: null,
    };
    const creatorLine = new ElementCreator(paramsLine);

    this.viewElementCreator.addInsideElement(creatorLine);
  }
}