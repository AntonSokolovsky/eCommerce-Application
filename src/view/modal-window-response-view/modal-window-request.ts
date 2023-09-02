import styles from './modal-window-request.module.css';
import View from '../view';
import { ElementParams, ViewParams } from '../../type/params-element-type';
import { ElementCreator } from '../../utilities/element-creator';

export class ModalWindowRequest extends View {
  private message: string;

  constructor(message: string) {
    const params: ViewParams = {
      tag: 'div',
      classNames: [styles['modal-window']],
    };
    super(params);
    this.message = message;
    this.configureView();
    this.showModalWindow();
  }

  configureView() {
    this.viewElementCreator.addInsideElement(this.addMessage());
  }

  addMessage() {
    const messageParams: ElementParams = {
      tag: 'p',
      classNames: [styles['modal-window__text']],
      textContent: '',
      callback: null,
    };
    const messageCreator = new ElementCreator(messageParams);
    messageCreator.setTextContent(this.message);
    return messageCreator;
  }

  showModalWindow() {
    const body = document.querySelector('body');
    body?.append(this.viewElementCreator.getElement());
    setTimeout(() => {
      this.viewElementCreator.getElement().remove();
    }, 5000);
  }
}
