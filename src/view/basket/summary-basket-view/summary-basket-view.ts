import styles from './summary-basket-view.module.css';
import { Mediator } from '../../../app/controller/mediator';
import { ElementParams, ViewParams } from '../../../type/params-element-type';
import { ElementCreator } from '../../../utilities/element-creator';
import View from '../../view';
import { PromoCodeEnteringView } from './entering-promo-code-view/entering-promo-code-view';
import { Cart } from '@commercetools/platform-sdk';
import { CurrencySymbols } from '../../../type/enum-currencies';

const TEXT = {
  title: 'Order summary',
  subtotal: 'Subtotal',
  discounts: 'Discounts',
  total: 'Order total',
  button: 'Checkout',
};

export class SummaryBasketView extends View {

  private mediator = Mediator.getInstance();

  private cart;
  
  constructor(cart: Cart) {
    const params: ViewParams = {
      tag: 'div',
      classNames: [styles.summary__container],
    };
    super(params);
    this.cart = cart;
    this.configureView();
  }
  
  configureView() {
    const titleSummaryParams: ElementParams = {
      tag: 'h2',
      classNames: [styles.summary__title],
      textContent: TEXT.title,
      callback: null,
    };
    const creatorTitleSummary = new ElementCreator(titleSummaryParams);
    this.viewElementCreator.addInsideElement(creatorTitleSummary);

    let subTotalValue = 0;
    let discountValue = 0;
    this.cart.lineItems.forEach((lineItem) => {
      subTotalValue = subTotalValue + (lineItem.price.value.centAmount * lineItem.quantity);
      if (lineItem.price.discounted && lineItem.discountedPricePerQuantity.length) {
        discountValue = discountValue
        + ((lineItem.discountedPricePerQuantity[0].discountedPrice.value.centAmount
        + (lineItem.price.value.centAmount - lineItem.price.discounted?.value.centAmount))
        * lineItem.quantity);
      } else if (lineItem.discountedPricePerQuantity.length && !lineItem.price.discounted) {
        discountValue = discountValue
        + (lineItem.discountedPricePerQuantity[0].discountedPrice.value.centAmount
        * lineItem.quantity);
      } else if (!lineItem.discountedPricePerQuantity.length && lineItem.price.discounted) {
        discountValue = discountValue
        + ((lineItem.price.value.centAmount - lineItem.price.discounted?.value.centAmount)
        * lineItem.quantity);
      }
    });
    
    const subtotalSummaryParams: ElementParams = {
      tag: 'p',
      classNames: [styles.summary__subtotal],
      textContent: `${TEXT.subtotal} ${subTotalValue / 100} ${CurrencySymbols.EUR}`,
      callback: null,
    };
    const creatorSubtotalSummary = new ElementCreator(subtotalSummaryParams);
    this.viewElementCreator.addInsideElement(creatorSubtotalSummary);

    const discountsSummaryParams: ElementParams = {
      tag: 'p',
      classNames: [styles.summary__discounts],
      textContent: `${TEXT.discounts} -${discountValue / 100} ${CurrencySymbols.EUR}`,
      callback: null,
    };
    const creatorDiscountsSummary = new ElementCreator(discountsSummaryParams);
    this.viewElementCreator.addInsideElement(creatorDiscountsSummary);

    const totalSummaryParams: ElementParams = {
      tag: 'p',
      classNames: [styles.summary__total],
      textContent: `${TEXT.total} ${this.cart.totalPrice.centAmount / 100} ${CurrencySymbols.EUR}`,
      callback: null,
    };
    const creatorTotalSummary = new ElementCreator(totalSummaryParams);
    this.viewElementCreator.addInsideElement(creatorTotalSummary);

    const promoCodeBlock = new PromoCodeEnteringView(this.cart);
    this.viewElementCreator.addInsideElement(promoCodeBlock.getHtmlElement());

    const buttonCheckoutSummaryParams: ElementParams = {
      tag: 'button',
      classNames: [styles['summary__button-checkout']],
      textContent: TEXT.button,
      callback: () => this.checkout,
    };
    const creatorButtonCheckout = new ElementCreator(buttonCheckoutSummaryParams);
    creatorButtonCheckout.setAttributeElement({ 'type': 'button' });
    this.viewElementCreator.addInsideElement(creatorButtonCheckout);
  }

  checkout() {
    this.mediator.checkout();
  }
}