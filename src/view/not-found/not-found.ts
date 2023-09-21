import './not-found.css';
import View from '../view';
import { ElementCreator } from '../../utilities/element-creator';
import Router from '../../app/router/router';
import { Pages } from '../../app/router/pages';

export default class NotFoundView extends View {
  constructor(router: Router) {
    const params = {
      tag: 'section',
      classNames: ['not-found'],
    };
    super(params);
    this.configureView(router);
  }

  configureView(router: Router) {
    const paramsErrorNumber = {
      tag: 'h2',
      classNames: ['error-number'],
      textContent: '404',
      callback: null,
    };
    const paramsErrorText = {
      tag: 'p',
      classNames: ['error-text'],
      textContent: 'Page not found',
      callback: null,
    };
    const paramsErrorBtn = {
      tag: 'button',
      classNames: ['error-button'],
      textContent: 'Back Home',
      callback: () => router.navigate(Pages.FIRSTPAGE),
    };

    const errorNumber = new ElementCreator(paramsErrorNumber);
    this.viewElementCreator.addInsideElement(errorNumber);

    const errorText = new ElementCreator(paramsErrorText);
    this.viewElementCreator.addInsideElement(errorText);

    const errorBtn = new ElementCreator(paramsErrorBtn);
    this.viewElementCreator.addInsideElement(errorBtn);
  }
}