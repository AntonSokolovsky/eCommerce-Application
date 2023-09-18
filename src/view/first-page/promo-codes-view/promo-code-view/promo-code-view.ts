import { DiscountCode } from '@commercetools/platform-sdk';
import View from '../../../view';
import styles from './promo-code-view.module.css';
import { ElementParams, ViewParams } from '../../../../type/params-element-type';
import { ElementCreator } from '../../../../utilities/element-creator';
import { ModalWindowRequest } from '../../../modal-window-response-view/modal-window-request';
import { MessagesModalWindow } from '../../../../type/messages-modal';

const TEXT = {
  copy: 'copy',
  code: 'Use',
};

export class PromoCodeView extends View {

  private code: string;
  
  constructor(promocode: DiscountCode) {
    const params: ViewParams = {
      tag: 'li',
      classNames: [styles.promocode__container],
    };
    super(params);
    this.code = promocode.code;
    this.configureView(promocode);
  }
  
  configureView(promocode: DiscountCode) {
    const titlePromoCodeParams: ElementParams = {
      tag: 'h3',
      classNames: [styles.promocode__title],
      textContent: promocode.name ? promocode.name['en-US'] : '',
      callback: null,
    };
    const creatorTitlePromoCode = new ElementCreator(titlePromoCodeParams);
    this.viewElementCreator.addInsideElement(creatorTitlePromoCode);

    const descriptionPromoCodeParams: ElementParams = {
      tag: 'p',
      classNames: [styles.promocode__description],
      textContent: promocode.description ? promocode.description['en-US'] : '',
      callback: null,
    };
    const creatorDescriptionPromoCode = new ElementCreator(descriptionPromoCodeParams);
    this.viewElementCreator.addInsideElement(creatorDescriptionPromoCode);

    const textPromoCodeParams: ElementParams = {
      tag: 'p',
      classNames: [styles.promocode__code],
      textContent: `${TEXT.code}: ${promocode.code}`,
      callback: null,
    };
    const creatorTextPromoCode = new ElementCreator(textPromoCodeParams);
    this.viewElementCreator.addInsideElement(creatorTextPromoCode);

    const buttonCopyPromoCodeParams: ElementParams = {
      tag: 'button',
      classNames: [styles.promocode__copy],
      textContent: TEXT.copy,
      callback: (event) => this.handleCopyPromoCode(event),
    };
    const creatorButtonCopyPromoCode = new ElementCreator(buttonCopyPromoCodeParams);
    this.viewElementCreator.addInsideElement(creatorButtonCopyPromoCode);
  }

  async handleCopyPromoCode(event: Event) {
    try {
      await navigator.clipboard.writeText(this.code);
      const successMessage = `${this.code} ${MessagesModalWindow.PROMOCODE_COPY_SUCCESS}`;
      this.showModalWindow(successMessage);
      if (event.target instanceof HTMLButtonElement) {
        event.target.setAttribute('disabled', '');
      }
    } catch (err) {
      this.showModalWindow(MessagesModalWindow.PROMOCODE_COPY_ERROR);
    }
  }

  showModalWindow(message: string) {
    const modalWindow = new ModalWindowRequest(message);
    return modalWindow;
  }
}
