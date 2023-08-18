import './style.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';
import RegisterFormView from '../../registration/RegisterWindow/formView/Register_form_view';

export default class RgVindowView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['RgVindow'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const paramsRegister = {
      tag: 'span',
      classNames: ['Reg_text'],
      textContent: 'Register',
      callback: null,
    };
    const registerWindow = new ElementCreator(paramsRegister);

    this.viewElementCreator.addInsideElement(registerWindow);

    const logInForm = new RegisterFormView();
    
    this.viewElementCreator.addInsideElement(logInForm.getElement());
  }
}