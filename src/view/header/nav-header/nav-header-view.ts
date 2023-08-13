import './nav-header.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';


export default class NavHeaderView extends View {
  constructor() {
    const params = {
      tag: 'nav',
      classNames: ['nav_header'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const paramsSearch = {
      tag: 'div',
      classNames: ['search'],
      textContent: 'search',
      callback: null,
    };
    const creatorSearch = new ElementCreator(paramsSearch);

    this.viewElementCreator.addInsideElement(creatorSearch);

    const paramsAccount = {
      tag: 'div',
      classNames: ['account'],
      textContent: 'account',
      callback: null,
    };
    const creatorAccount = new ElementCreator(paramsAccount);

    this.viewElementCreator.addInsideElement(creatorAccount);

    const paramsBasket = {
      tag: 'div',
      classNames: ['basket'],
      textContent: 'basket',
      callback: null,
    };
    const creatorBasket = new ElementCreator(paramsBasket);

    this.viewElementCreator.addInsideElement(creatorBasket);
  }
}