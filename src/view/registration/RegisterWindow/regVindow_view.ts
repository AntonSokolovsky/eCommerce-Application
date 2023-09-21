import './style.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';
import RegisterFormView from '../../registration/RegisterWindow/formView/Register_form_view';
import Router from '../../../app/router/router';

export default class RgVindowView extends View {
  constructor(mainComponent: Router) {
    const params = {
      tag: 'div',
      classNames: ['RgVindow'],
    };
    super(params);
    this.configureView(mainComponent);
  }

  configureView(mainComponent: Router) {
    const paramsRegister = {
      tag: 'span',
      classNames: ['Reg_text'],
      textContent: 'Register',
      callback: null,
    };
    const registerWindow = new ElementCreator(paramsRegister);

    this.viewElementCreator.addInsideElement(registerWindow);

    const logInForm = new RegisterFormView(mainComponent);
    
    this.viewElementCreator.addInsideElement(logInForm.getElement());
  }
}