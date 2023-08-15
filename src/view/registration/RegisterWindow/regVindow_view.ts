import './style.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';
import { InputElementCreator } from '../../../utilities/InputFieldsCreator/InputFieldsCreator';

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

    const paramsTelOrEmail = {
      tag: 'span',
      classNames: ['Tel_text'],
      textContent: 'Telephone or Email',
      callback: null,
    };
    const TelOrEmail = new ElementCreator(paramsTelOrEmail);

    this.viewElementCreator.addInsideElement(TelOrEmail);

    const paramsTelOrEmailInput = {
      tag: 'input',
      classNames: ['input', 'Email_input'],
      textContent: '',
      value: 'email',
      callback: null,
    };
    const TelOrEmailInput = new ElementCreator(paramsTelOrEmailInput);

    this.viewElementCreator.addInsideElement(TelOrEmailInput);

    const paramsPassword = {
      tag: 'span',
      classNames: ['Password_text'],
      textContent: 'Password',
      callback: null,
    };
    const password = new ElementCreator(paramsPassword);

    this.viewElementCreator.addInsideElement(password);

    const paramsPasswordInput = {
      tag: 'input',
      classNames: ['input', 'password_input'],
      textContent: '',
      type: 'password',
      callback: null,
    };
    const PasswordInput = new InputElementCreator(paramsPasswordInput);

    this.viewElementCreator.addInsideElement(PasswordInput);

    const paramsConfrimPassword = {
      tag: 'span',
      classNames: ['Password_text', 'Confrim_password_input'],
      textContent: 'Confrim Password',
      type: 'password',
      callback: null,
    };
    const Confrimpassword = new InputElementCreator(paramsConfrimPassword);

    this.viewElementCreator.addInsideElement(Confrimpassword);

    const paramsConfrinPasswordInput = {
      tag: 'input',
      classNames: ['input'],
      textContent: '',
      type: 'text',
      callback: null,
    };
    const ConfrimPasswordInput = new InputElementCreator(paramsConfrinPasswordInput);

    this.viewElementCreator.addInsideElement(ConfrimPasswordInput);

    const paramsRegisterButton = {
      tag: 'button',
      classNames: ['buttonRegSign'],
      textContent: 'Register',
      callback: null,
    };
    const RegButton = new ElementCreator(paramsRegisterButton);

    this.viewElementCreator.addInsideElement(RegButton);

    const ParamslogInLink = {
      tag: 'span',
      classNames: ['logInLink'],
      textContent: 'Log In',
      callback: null,
    };
    const logInLink = new ElementCreator(ParamslogInLink);

    this.viewElementCreator.addInsideElement(logInLink);
  }
}