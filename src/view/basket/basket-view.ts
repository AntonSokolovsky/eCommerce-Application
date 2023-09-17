import styles from './basket-view.module.css';
import { Cart, ProductProjection } from '@commercetools/platform-sdk';
import Router from '../../app/router/router';
import { ViewParams, ElementParams } from '../../type/params-element-type';
import { ElementCreator } from '../../utilities/element-creator';
import View from '../view';
import { EmptyBasketView } from './empty-basket-view/empty-basket-view';
import { Customer } from '../../app/loader/customer';
import { Mediator } from '../../app/controller/mediator';
import { ShoppingListView } from './shopping-list-view/shopping-list-view';
import { SummaryBasketView } from './summary-basket-view/summary-basket-view';
import { SummaryBasketParams } from '../../type/basket-type';
import { CustomEventNames } from '../../type/mediator-type';

const TEXT = {
  titleBasket: 'Your meat basket',
  emptyBasketTitle: 'There is no meat in your cart yet',
  emptyBasketSubtitle: 'You want to see some meat, right?',
  emptyBasketLink: 'there\'s meat here',
};

export class BasketView extends View {

  private router: Router;

  private mediator = Mediator.getInstance();

  private loader = new Customer();

  private listProducts: ProductProjection[] | null; // ToDo: this type can be changed;
  
  constructor(router: Router) {
    const params: ViewParams = {
      tag: 'section',
      classNames: [styles['section-basket']],
    };
    super(params);
    this.router = router;
    this.listProducts = null;
    this.configureView();
    this.mediator.subscribe(CustomEventNames.BASKET_UPDATE, this.updateBasketView.bind(this));
  }
  
  async configureView() {
    const titleBasketParams: ElementParams = {
      tag: 'h1',
      classNames: [styles.basket__title],
      textContent: TEXT.titleBasket,
      callback: null,
    };
    const creatorBasketTitle = new ElementCreator(titleBasketParams);
    this.viewElementCreator.addInsideElement(creatorBasketTitle);

    await this.getProductToBuy();
  }

  async getProductToBuy() {
    const response = (await this.loader.getUserCart());
    this.handleResponse(response.body.results[0]);
  }

  handleResponse(cart: Cart) {
    if (!cart) {
      const emptyBasketBlock = new EmptyBasketView(this.router);
      this.viewElementCreator.addInsideElement(emptyBasketBlock.getHtmlElement());
    } else {
      const wrapCartParams: ElementParams = {
        tag: 'div',
        classNames: [styles['basket__wrapper-cart']],
        textContent: '',
        callback: null,
      };
      const creatorWrapCart = new ElementCreator(wrapCartParams);

      const shoppingListView = new ShoppingListView(this.router, cart);
      creatorWrapCart.addInsideElement(shoppingListView.getHtmlElement());
      const listSummary: SummaryBasketParams = {
        total: cart.totalPrice.centAmount,
        count: cart.lineItems.length,
        discount: 13, //ToDo implement right income params of discount
        //   subtotalBasket: cart.totalPrice.centAmount + cart.directDiscounts[0].value,
      };
      const summary = new SummaryBasketView(listSummary);
      creatorWrapCart.addInsideElement(summary.getHtmlElement());
      this.viewElementCreator.addInsideElement(creatorWrapCart);
    }
  }

  async updateBasketView() {
    while (this.viewElementCreator.getElement().childNodes.length) {
      this.viewElementCreator.getElement().childNodes[0].remove();
    }
    await this.configureView();
  }
}
  