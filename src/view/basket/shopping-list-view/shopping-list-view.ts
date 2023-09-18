import { Cart } from '@commercetools/platform-sdk';
import Router from '../../../app/router/router';
import { ElementParams, ViewParams } from '../../../type/params-element-type';
import View from '../../view';
import styles from './shopping-list-view.module.css';
import { ItemBasketView } from './item-basket-view/item-basket-view';
import { Customer } from '../../../app/loader/customer';
import { ElementCreator } from '../../../utilities/element-creator';
import { Mediator } from '../../../app/controller/mediator';

const TEXT = {
  empty: 'Empty shopping cart',
};

export class ShoppingListView extends View {

  private mediator = Mediator.getInstance();

  private router: Router;

  private loader = new Customer();

  private cart: Cart;
  
  constructor(router: Router, cart: Cart) {
    const params: ViewParams = {
      tag: 'ul',
      classNames: [styles['shopping-list']],
    };
    super(params);
    this.router = router;
    this.cart = cart;
    this.configureView(cart);
  }
  
  configureView(cart: Cart) {
    cart.lineItems.forEach((lineItem) => {
      const productBasket = new ItemBasketView(lineItem, cart);
      this.viewElementCreator.addInsideElement(productBasket.getHtmlElement());
    });

    const buttonEmptyCartParams: ElementParams = {
      tag: 'button',
      classNames: [styles['shopping-list__button-erase']],
      textContent: TEXT.empty,
      callback: () => this.removeShoppingCart(),
    };
    const creatorButtonEmptyCart = new ElementCreator(buttonEmptyCartParams);
    this.viewElementCreator.addInsideElement(creatorButtonEmptyCart);
  }

  async removeShoppingCart() {
    await this.loader.deleteCartById(this.cart.id, this.cart.version)
      .then(() => this.mediator.updateBasket());
  }
}