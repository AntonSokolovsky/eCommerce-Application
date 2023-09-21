import './style.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';
import LogInFormView from '../../log-in/logInView/formView/Log_in_form_view';
import Router from '../../../app/router/router';

export default class LogInVindowView extends View {
  constructor(router: Router) {
    const params = {
      tag: 'div',
      classNames: ['LogInVindow'],
    };
    super(params);
    this.configureView(router);
  }

  configureView(router: Router) {
    const paramsRegister = {
      tag: 'span',
      classNames: ['Log_In_text'],
      textContent: 'Log In',
      callback: null,
    };
    const registerWindow = new ElementCreator(paramsRegister);

    this.viewElementCreator.addInsideElement(registerWindow);

    const logInForm = new LogInFormView(router);
    
    this.viewElementCreator.addInsideElement(logInForm.getElement());
  }
}
