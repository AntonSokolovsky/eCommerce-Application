import './nav-footer.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';


export default class NavFooterView extends View {
  constructor() {
    const params = {
      tag: 'nav',
      classNames: ['nav_footer'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const paramsItemTop = {
      tag: 'div',
      classNames: ['itemTop'],
      textContent: 'Catalog',
      callback: null,
    };
    const creatorItemTop = new ElementCreator(paramsItemTop);
    this.viewElementCreator.addInsideElement(creatorItemTop);

    const paramsItemMid = {
      tag: 'div',
      classNames: ['itemMid'],
      textContent: 'Contacts',
      callback: null,
    };
    const creatorItemMid = new ElementCreator(paramsItemMid);
    this.viewElementCreator.addInsideElement(creatorItemMid);

    const paramsItemBottom = {
      tag: 'div',
      classNames: ['itemBottom'],
      textContent: 'About Us',
      callback: null,
    };
    const creatorItemBottom = new ElementCreator(paramsItemBottom);
    this.viewElementCreator.addInsideElement(creatorItemBottom);
  }
}