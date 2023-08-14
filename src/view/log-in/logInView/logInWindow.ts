import './style.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';

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

    const paramsTelOrEmail = {
      tag: 'span',
      classNames: ['Tel_text'],
      textContent: 'telephone or Email',
      callback: null,
    };
    const TelOrEmail = new ElementCreator(paramsTelOrEmail);

    this.viewElementCreator.addInsideElement(TelOrEmail);

    const paramsTelOrEmailInput = {
      tag: 'input',
      classNames: ['input'],
      textContent: '',
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
      classNames: ['input'],
      textContent: '',
      callback: null,
    };
    const PasswordInput = new ElementCreator(paramsPasswordInput);

    this.viewElementCreator.addInsideElement(PasswordInput);

    const paramsSignInButton = {
      tag: 'button',
      classNames: ['buttonRegSign'],
      textContent: 'Sign In',
      callback: null,
    };
    const SignIn = new ElementCreator(paramsSignInButton);

    this.viewElementCreator.addInsideElement(SignIn);

    const ParamsForgotLink = {
      tag: 'span',
      classNames: ['forgotPassLink'],
      textContent: 'forgot a password',
      callback: null,
    };
    const ForgotPassLink = new ElementCreator(ParamsForgotLink);
  
    this.viewElementCreator.addInsideElement(ForgotPassLink);

    const ParamsCreateLink = {
      tag: 'span',
      classNames: ['logInLink'],
      textContent: 'Create an account',
      callback: null,
    };
    const CreateAccLink = new ElementCreator(ParamsCreateLink);

    this.viewElementCreator.addInsideElement(CreateAccLink);
  }
}
