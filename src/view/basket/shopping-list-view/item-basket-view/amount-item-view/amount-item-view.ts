import { Cart, LineItem, MyCartChangeLineItemQuantityAction } from '@commercetools/platform-sdk';
import { Mediator } from '../../../../../app/controller/mediator';
import { ElementParams, ViewParams } from '../../../../../type/params-element-type';
import { ElementCreator } from '../../../../../utilities/element-creator';
import View from '../../../../view';
import styles from './amount-item.module.css';
import { MyEnumCartAction, UpdateQuantityParams } from '../../../../../type/basket-type';
import { Customer } from '../../../../../app/loader/customer';

const TEXT = {
  buttonIncrease: '+',
  buttonDecrease: '-',
};

const limitAmountProduct = {
  min: 0,
  max: 99,
};

export class AmountItemView extends View {

  private loader: Customer;

  private cart: Cart;

  private itemBasketParams: LineItem;
  
  private amountItem: number;

  private mediator = Mediator.getInstance();

  constructor(itemBasketParams: LineItem, cart: Cart) {
    const params: ViewParams = {
      tag: 'div',
      classNames: [styles['amount-item__container']],
    };
    super(params);
    this.loader = new Customer();
    this.cart = cart;
    this.itemBasketParams = itemBasketParams;
    this.amountItem = this.itemBasketParams.quantity;
    this.configureView();
  }
    
  configureView() {
    const buttonChangeCountParams: ElementParams = {
      tag: 'button',
      classNames: [styles['amount-item__button']],
      textContent: '',
      callback: (event) => this.handlerChangeAmount(event),
    };

    const creatorButtonDecrease = new ElementCreator(buttonChangeCountParams);
    creatorButtonDecrease.setTextContent(TEXT.buttonDecrease);
    creatorButtonDecrease.setAttributeElement({ 'type': 'button' });
    this.viewElementCreator.addInsideElement(creatorButtonDecrease);

    const inputAmountParams: ElementParams = {
      tag: 'input',
      classNames: [styles['amount-item__input']],
      textContent: '',
      callback: null,
    };
    const creatorInputAmount = new ElementCreator(inputAmountParams);
    creatorInputAmount.setAttributeElement({
      'type': 'number',
      'value': `${this.itemBasketParams.quantity}`,
      'min': limitAmountProduct.min.toString(),
      'max': limitAmountProduct.max.toString(),
      'pattern': '/^[0-9][0-9]$/',
    });
    creatorInputAmount.getElement().addEventListener('blur', (event) => this.handlerChangeAmount(event));
    this.viewElementCreator.addInsideElement(creatorInputAmount);

    const creatorButtonIncrease = new ElementCreator(buttonChangeCountParams);
    creatorButtonIncrease.setTextContent(TEXT.buttonIncrease);
    creatorButtonIncrease.setAttributeElement({ 'type': 'button' });
    this.viewElementCreator.addInsideElement(creatorButtonIncrease);
  }

  async handlerChangeAmount(event?: Event) {
    if (event?.target instanceof HTMLInputElement) {
      if (Number(event.target.value) !== this.amountItem) {
        this.amountItem = Number(event.target.value);
        await this.updateBasket();
      }
    } else if (event?.target instanceof HTMLButtonElement) {
      if (event.target.textContent === TEXT.buttonDecrease) {
        this.amountItem -= 1; 
      } else if (event.target.textContent === TEXT.buttonIncrease) {
        this.amountItem += 1;
      }
      await this.updateBasket();
    } 
  }

  async updateBasket() {
    const paramsAmountUpdate: UpdateQuantityParams = {
      body: {
        version: this.cart.version,
        actions: [<MyCartChangeLineItemQuantityAction>{
          action: MyEnumCartAction.MyCartChangeLineItemQuantityAction,
          lineItemId: this.itemBasketParams.id,
          quantity: this.amountItem,
        }],
      },
    };
    await this.loader.updateAmountItemBasket(paramsAmountUpdate, this.cart.id);
    this.mediator.updateBasket();
  }
}