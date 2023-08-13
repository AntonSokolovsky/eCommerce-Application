import './item.css';
import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';


export default class ItemView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['item'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const paramsContImg = {
      tag: 'div',
      classNames: ['item__cont-img'],
      textContent: '',
      callback: null,
    };
    const creatorContImg = new ElementCreator(paramsContImg);
    this.viewElementCreator.addInsideElement(creatorContImg);

    const paramsToolbar = {
      tag: 'div',
      classNames: ['item__toolbar'],
      textContent: '',
      callback: null,
    };
    const paramsPrice = {
      tag: 'div',
      classNames: ['item__price'],
      textContent: '0.00$',
      callback: null,
    };
    const paramsBasket = {
      tag: 'div',
      classNames: ['item__basket'],
      textContent: '',
      callback: null,
    };
    const creatorToolbar = new ElementCreator(paramsToolbar);

    const creatorPrice = new ElementCreator(paramsPrice);
    creatorToolbar.addInsideElement(creatorPrice);
    const creatorBasket = new ElementCreator(paramsBasket);
    creatorToolbar.addInsideElement(creatorBasket);

    this.viewElementCreator.addInsideElement(creatorToolbar);
  }
}