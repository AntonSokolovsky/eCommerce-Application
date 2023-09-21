import styles from './entering-promo-code-view.module.css';
import View from '../../../view';
import { Cart, DiscountCodeReference, MyCartAddDiscountCodeAction, MyCartRemoveDiscountCodeAction } from '@commercetools/platform-sdk';
import { Mediator } from '../../../../app/controller/mediator';
import { ElementParams, ViewParams } from '../../../../type/params-element-type';
import { ElementCreator } from '../../../../utilities/element-creator';
import { Customer } from '../../../../app/loader/customer';
import { MyEnumCartAction, UpdateQuantityParams } from '../../../../type/basket-type';
import { ModalWindowRequest } from '../../../modal-window-response-view/modal-window-request';
import { MessagesModalWindow } from '../../../../type/messages-modal';

const TEXT = {
  title: 'Promo code',
  remove: 'x',
  apply: 'apply',
};

export class PromoCodeEnteringView extends View {

  private cart: Cart;

  private mediator = Mediator.getInstance();

  private loader = new Customer();

  private input: HTMLInputElement | null;

  constructor(cart: Cart) {
    const params: ViewParams = {
      tag: 'div',
      classNames: [styles['promo-code__container']],
    };
    super(params);
    this.input = null;
    this.cart = cart;
    this.configureView();
  }

  async configureView() {
    const titlePromoCodeParams: ElementParams = {
      tag: 'p',
      classNames: [styles['promo-code__title']],
      textContent: TEXT.title,
      callback: null,
    };
    const creatorTitlePromocode = new ElementCreator(titlePromoCodeParams);
    this.viewElementCreator.addInsideElement(creatorTitlePromocode);

    const formInputPromoCodeParams: ElementParams = {
      tag: 'div',
      classNames: [styles['promo-code__form']],
      textContent: '',
      callback: null,
    };
    const creatorFormInputPromoCode = new ElementCreator(formInputPromoCodeParams);
    if (this.cart.discountCodes.length) {
      const [info, button] = await this.addActivePromoCode(this.cart.discountCodes[0].discountCode);
      creatorFormInputPromoCode.addInsideElement(info);
      creatorFormInputPromoCode.addInsideElement(button);
    } else {
      const [input, button] = this.addFormInput();
      creatorFormInputPromoCode.addInsideElement(input);
      creatorFormInputPromoCode.addInsideElement(button);
    }

    this.viewElementCreator.addInsideElement(creatorFormInputPromoCode);
  }

  async applyPromoCode(promoCode: string) {
    const params: UpdateQuantityParams = {
      body: {
        version: this.cart.version,
        actions:[<MyCartAddDiscountCodeAction>{
          action: MyEnumCartAction.MyCartAddDiscountCodeAction,
          code: promoCode,
        }],
      },
    };
    this.loader.addDiscountCode(params, this.cart.id)
      .then((data) => this.handleSuccessResponse(data.body.discountCodes[0].discountCode.obj?.code))
      .catch(() => this.handleErrorResponse());
  }

  async removePromoCode(discountCode: DiscountCodeReference) {
    const params: UpdateQuantityParams = {
      body: {
        version: this.cart.version,
        actions:[<MyCartRemoveDiscountCodeAction>{
          action: MyEnumCartAction.MyCartRemoveDiscountCodeAction,
          discountCode: discountCode,
        }],
      },
    };
    this.loader.addDiscountCode(params, this.cart.id)
      .then(() => this.mediator.updateBasket());
  }

  handleSuccessResponse(message: string | undefined) {
    const successMessage = `${MessagesModalWindow.PROMOCODE_ADD_SUCCESS} '${message}'`;
    this.showModalWindow(successMessage);
    this.mediator.updateBasket();
  }

  handleErrorResponse() {
    const errorMessage = MessagesModalWindow.PROMOCODE_ADD_ERROR;
    this.showModalWindow(errorMessage);
  }

  showModalWindow(message: string) {
    const modalWindow = new ModalWindowRequest(message);
    return modalWindow;
  }

  addFormInput() {
    const inputPromoCodeParams: ElementParams = {
      tag: 'input',
      classNames: [styles['promo-code__input']],
      textContent: '',
      callback: null,
    };
    const creatorInputPromoCode = new ElementCreator(inputPromoCodeParams);
    this.input = creatorInputPromoCode.getElement() as HTMLInputElement;

    const buttonApplyPromoCodeParams: ElementParams = {
      tag: 'div',
      classNames: [styles['promo-code__button']],
      textContent: TEXT.apply,
      callback: () => {
        if (this.input) {
          this.applyPromoCode(this.input.value);
        }
      },
    };
    const creatorButtonApplyPromoCode = new ElementCreator(buttonApplyPromoCodeParams);
    return [creatorInputPromoCode, creatorButtonApplyPromoCode];
  }

  async addActivePromoCode(promoId: DiscountCodeReference) {
    const response = (await this.loader.getPromoCodeById());
    const promo = response.body.results.filter(discountCode => discountCode.id === promoId.id);

    const activePromoCodeParams: ElementParams = {
      tag: 'p',
      classNames: [styles['promo-code__info']],
      textContent: promo[0].code,
      callback: null,
    };
    const creatorActivePromoCode = new ElementCreator(activePromoCodeParams);

    const buttonRemovePromoCodeParams: ElementParams = {
      tag: 'div',
      classNames: [styles['promo-code__remove']],
      textContent: TEXT.remove,
      callback: () => this.removePromoCode(promoId),
    };
    const creatorButtonRemovePromoCode = new ElementCreator(buttonRemovePromoCodeParams);
    return [creatorActivePromoCode, creatorButtonRemovePromoCode];
  }
}