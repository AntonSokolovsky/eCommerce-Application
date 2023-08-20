import './style.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';
import LogInFormView from '../../log-in/logInView/formView/Log_in_form_view';

export default class LogInVindowView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['LogInVindow'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const paramsRegister = {
      tag: 'span',
      classNames: ['Log_In_text'],
      textContent: 'Log In',
      callback: null,
    };
    const registerWindow = new ElementCreator(paramsRegister);

    this.viewElementCreator.addInsideElement(registerWindow);

    const logInForm = new LogInFormView();
    
    this.viewElementCreator.addInsideElement(logInForm.getElement());
  }
}
