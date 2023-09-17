import styles from './summary-basket-view.module.css';
import { Mediator } from '../../../app/controller/mediator';
import { ElementParams, ViewParams } from '../../../type/params-element-type';
import { ElementCreator } from '../../../utilities/element-creator';
import View from '../../view';
import { SummaryBasketParams } from '../../../type/basket-type';

const TEXT = {
  title: 'Order summary',
  subtotal: 'Subtotal',
  discounts: 'Discounts',
  total: 'Order total',
  button: 'Checkout',
};

export class SummaryBasketView extends View {

  private mediator = Mediator.getInstance();

  private listTotal;
  
  constructor(listTotal: SummaryBasketParams) {//ToDo
    const params: ViewParams = {
      tag: 'div',
      classNames: [styles.summary__container],
    };
    super(params);
    this.listTotal = listTotal;
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

    const subtotalSummaryParams: ElementParams = {
      tag: 'p',
      classNames: [styles.summary__subtotal],
      textContent: TEXT.subtotal,
      callback: null,
    };
    const creatorSubtotalSummary = new ElementCreator(subtotalSummaryParams);
    this.viewElementCreator.addInsideElement(creatorSubtotalSummary);

    const discountsSummaryParams: ElementParams = {
      tag: 'p',
      classNames: [styles.summary__discounts],
      textContent: `${TEXT.discounts} ${this.listTotal.discount}`,
      callback: null,
    };
    const creatorDiscountsSummary = new ElementCreator(discountsSummaryParams);
    this.viewElementCreator.addInsideElement(creatorDiscountsSummary);

    const totalSummaryParams: ElementParams = {
      tag: 'p',
      classNames: [styles.summary__total],
      textContent: `${TEXT.total} ${this.listTotal.total / 100}`,
      callback: null,
    };
    const creatorTotalSummary = new ElementCreator(totalSummaryParams);
    this.viewElementCreator.addInsideElement(creatorTotalSummary);

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