import { Cart, LineItem } from '@commercetools/platform-sdk';
import View from '../../../view';
import styles from './item-basket-view.module.css';
import { ElementParams, ViewParams } from '../../../../type/params-element-type';
import { ElementCreator } from '../../../../utilities/element-creator';
import { AmountItemView } from './amount-item-view/amount-item-view';

export class ItemBasketView extends View {

  private cart: Cart;
  
  constructor(itemBasketParams: LineItem, cart: Cart) {
    const params: ViewParams = {
      tag: 'li',
      classNames: [styles['item-basket__container']],
    };
    super(params);

    this.cart = cart;
    this.configureView(itemBasketParams);
  }
  
  configureView(itemBasketParams: LineItem) {
    const imageItemBasketParams: ElementParams = {
      tag: 'img',
      classNames: [styles['item-basket__image']],
      textContent: '',
      callback: null,
    };
    const creatorImageItemBasket = new ElementCreator(imageItemBasketParams);
    this.viewElementCreator.addInsideElement(creatorImageItemBasket);

    const nameItemBasketParams: ElementParams = {
      tag: 'p',
      classNames: [styles['item-basket__title']],
      textContent: itemBasketParams.name['en-US'],
      callback: null,
    };
    const creatorNameItemBasket = new ElementCreator(nameItemBasketParams);
    this.viewElementCreator.addInsideElement(creatorNameItemBasket);

    // const amountItemBasketParams: ElementParams = {
    //   tag: 'div',
    //   classNames: [styles['item-basket__amount']],
    //   textContent: '',
    //   callback: null,
    // };
    // const creatorAmoutnBasket = new ElementCreator(amountItemBasketParams);
    // this.viewElementCreator.addInsideElement(creatorAmoutnBasket);  
    const amountItem = new AmountItemView(itemBasketParams, this.cart);
    this.viewElementCreator.addInsideElement(amountItem.getHtmlElement());

  }
}