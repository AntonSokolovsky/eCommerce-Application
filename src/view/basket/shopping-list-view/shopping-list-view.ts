import { Cart } from '@commercetools/platform-sdk';
import Router from '../../../app/router/router';
import { ViewParams } from '../../../type/params-element-type';
import View from '../../view';
import styles from './shopping-list-view.module.css';
import { ItemBasketView } from './item-basket-view/item-basket-view';

export class ShoppingListView extends View {

  private router: Router;
  
  constructor(router: Router, cart: Cart) {
    const params: ViewParams = {
      tag: 'ul',
      classNames: [styles['shopping-list']],
    };
    super(params);
    this.configureView(cart);
    this.router = router;
  }
  
  configureView(cart: Cart) {
    cart.lineItems.forEach((lineItem) => {
      const productBasket = new ItemBasketView(lineItem, cart);
      this.viewElementCreator.addInsideElement(productBasket.getHtmlElement());
    });
  }
}