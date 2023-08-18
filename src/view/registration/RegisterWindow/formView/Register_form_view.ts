import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';
import { InputElementCreator } from '../../../../utilities/InputFieldsCreator/InputFieldsCreator';
import showHidePass from '../../../../utilities/showHidePass';
import validationEmail from '../../../../utilities/validation/validationEmail';
import validationPassword from '../../../../utilities/validation/validationPass';
import validationComfrimPassword from '../../../../utilities/validation/validationComfrimPass';

export default class RegisterFormView extends View {
  constructor() {
    const params = {
      tag: 'form',
      classNames: ['RegForm'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const paramsTelOrEmail = {
      tag: 'span',
      classNames: ['Tel_text'],
      textContent: 'Telephone or Email',
      callback: null,
    };
    const TelOrEmail = new ElementCreator(paramsTelOrEmail);

    this.viewElementCreator.addInsideElement(TelOrEmail);

    const paramsMailInContainer = {
      tag: 'div',
      classNames: ['input_container'],
      textContent: '',
      callback: null,
    };

    const MailInputContainer = new View(paramsMailInContainer);

    const MailContainerHtmlElement = MailInputContainer.getHtmlElement();

    const paramsTelOrEmailInput = {
      tag: 'input',
      classNames: ['input', 'Email_input'],
      textContent: '',
      value: '',
      action: '',
      type: 'email',
      disabled: false,
      callback: validationEmail,
    };
    const TelOrEmailInput = new InputElementCreator(paramsTelOrEmailInput);

    MailContainerHtmlElement.append(TelOrEmailInput.getInputElement());

    const RequirementsToEmail = {
      tag: 'div',
      classNames: ['Requirements'],
      textContent: '',
      callback: null,
    };

    const RequirementsToEmailAttributes = {
      style: 'display: none',
    };

    const RequirementsToEmailText = new ElementCreator(RequirementsToEmail);

    RequirementsToEmailText.setAttributeElement(RequirementsToEmailAttributes);

    const firstRequirementParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Email address must be properly formatted (e.g., user@example.com).',
      callback: null,
    };

    const firstRequirement = new ElementCreator(firstRequirementParams);

    const secondRequirementParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Email address must not contain leading or trailing whitespace.',
      callback: null,
    };

    const secondRequirement = new ElementCreator(secondRequirementParams);

    const thirdRequirementParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Email address must contain a domain name (e.g., example.com).',
      callback: null,
    };

    const thirdRequirement = new ElementCreator(thirdRequirementParams);

    const forthRequirementParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Email address must contain an \'@\' symbol separating local part and domain name.',
      callback: null,
    };

    const forthRequirement = new ElementCreator(forthRequirementParams);

    RequirementsToEmailText.addInsideElement(firstRequirement);
    RequirementsToEmailText.addInsideElement(secondRequirement);
    RequirementsToEmailText.addInsideElement(thirdRequirement);
    RequirementsToEmailText.addInsideElement(forthRequirement);
    
    MailContainerHtmlElement.append(RequirementsToEmailText.getElement());

    this.viewElementCreator.addInsideElement(MailContainerHtmlElement);

    const paramsPassword = {
      tag: 'span',
      classNames: ['Password_text'],
      textContent: 'Password',
      callback: null,
    };
    const password = new ElementCreator(paramsPassword);

    this.viewElementCreator.addInsideElement(password);

    const paramsPasswordInContainer = {
      tag: 'div',
      classNames: ['input_container'],
      textContent: '',
      callback: null,
    };

    const PassworsInputContainer = new View(paramsPasswordInContainer);

    const PasswordContainerHtmlElement = PassworsInputContainer.getHtmlElement();

    const paramsPasswordInput = {
      tag: 'input',
      classNames: ['input', 'password_input'],
      textContent: '',
      value: '',
      action: '',
      type: 'password',
      disabled: false,
      callback: validationPassword,
    };
    const PasswordInput = new InputElementCreator(paramsPasswordInput);

    PasswordContainerHtmlElement.append(PasswordInput.getInputElement());

    const RequirementsToPassword = {
      tag: 'div',
      classNames: ['Requirements'],
      textContent: '',
      callback: null,
    };

    const RequirementsToPasswordAttributes = {
      style: 'display: none',
    };

    const RequirementsToPasswordText = new ElementCreator(RequirementsToPassword);

    RequirementsToPasswordText.setAttributeElement(RequirementsToPasswordAttributes);

    const firstRequirementPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Password must be at least 8 characters long.',
      callback: null,
    };

    const firstRequirementPassword = new ElementCreator(firstRequirementPasswordParams);

    const secondRequirementPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Password must contain at least one uppercase letter (A-Z).',
      callback: null,
    };

    const secondRequirementPassword = new ElementCreator(secondRequirementPasswordParams);

    const thirdRequirementPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Password must contain at least one lowercase letter (a-z).',
      callback: null,
    };

    const thirdRequirementPassword = new ElementCreator(thirdRequirementPasswordParams);

    const forthRequirementPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Password must contain at least one digit (0-9).',
      callback: null,
    };

    const forthRequirementPassword = new ElementCreator(forthRequirementPasswordParams);

    const FivesRequirementPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: '(Optional) Password must contain at least one special character (e.g., !@#$%^&*).',
      callback: null,
    };

    const FivesRequirementPassword = new ElementCreator(FivesRequirementPasswordParams);

    const SixRequirementPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Password must not contain leading or trailing whitespace.',
      callback: null,
    };

    const SixRequirementPassword = new ElementCreator(SixRequirementPasswordParams);

    const showHidePasswordParams = {
      tag: 'div',
      classNames: ['showPass'],
      textContent: '',
      callback: showHidePass,
    };

    const showHidePassword = new ElementCreator(showHidePasswordParams);

    RequirementsToPasswordText.addInsideElement(firstRequirementPassword);
    RequirementsToPasswordText.addInsideElement(secondRequirementPassword);
    RequirementsToPasswordText.addInsideElement(thirdRequirementPassword);
    RequirementsToPasswordText.addInsideElement(forthRequirementPassword);
    RequirementsToPasswordText.addInsideElement(FivesRequirementPassword);
    RequirementsToPasswordText.addInsideElement(SixRequirementPassword);

    PasswordContainerHtmlElement.append(showHidePassword.getElement());
    PasswordContainerHtmlElement.append(RequirementsToPasswordText.getElement());
    
    this.viewElementCreator.addInsideElement(PasswordContainerHtmlElement);

    const paramsConfrimPassword = {
      tag: 'span',
      classNames: ['Password_text', 'Confrim_password_input'],
      textContent: 'Confrim Password',
      value: '',
      action: '',
      type: 'password',
      callback: null,
    };
    const Confrimpassword = new ElementCreator(paramsConfrimPassword);

    this.viewElementCreator.addInsideElement(Confrimpassword);

    const paramsConfrimPasswordInContainer = {
      tag: 'div',
      classNames: ['input_container'],
      textContent: '',
      callback: null,
    };

    const ConfrimPassworsInputContainer = new View(paramsConfrimPasswordInContainer);

    const ConfrimPasswordContainerHtmlElement = ConfrimPassworsInputContainer.getHtmlElement();

    const paramsConfrinPasswordInput = {
      tag: 'input',
      classNames: ['input'],
      textContent: '',
      value: '',
      action: '',
      type: 'password',
      disabled: false,
      callback: validationComfrimPassword,
    };
    const ConfrimPasswordInput = new InputElementCreator(paramsConfrinPasswordInput);

    ConfrimPasswordContainerHtmlElement.append(ConfrimPasswordInput.getInputElement());

    const RequirementsToConfrimPassword = {
      tag: 'div',
      classNames: ['Requirements'],
      textContent: '',
      callback: null,
    };

    const RequirementsToConfrimPasswordAttributes = {
      style: 'display: none',
    };

    const RequirementsToConfrimPasswordText = new ElementCreator(RequirementsToConfrimPassword);

    RequirementsToConfrimPasswordText.setAttributeElement(RequirementsToConfrimPasswordAttributes);

    const firstRequirementConfrimPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Password must be at least 8 characters long.',
      callback: null,
    };

    const firstRequirementConfrimPassword = new ElementCreator(firstRequirementConfrimPasswordParams);

    const secondRequirementConfrimPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Password must contain at least one uppercase letter (A-Z).',
      callback: null,
    };

    const secondRequirementConfrimPassword = new ElementCreator(secondRequirementConfrimPasswordParams);

    const thirdRequirementConfrimPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Password must contain at least one lowercase letter (a-z).',
      callback: null,
    };

    const thirdRequirementConfrimPassword = new ElementCreator(thirdRequirementConfrimPasswordParams);

    const forthRequirementConfrimPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Password must contain at least one digit (0-9).',
      callback: null,
    };

    const forthRequirementConfrimPassword = new ElementCreator(forthRequirementConfrimPasswordParams);

    const FivesRequirementConfrimPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: '(Optional) Password must contain at least one special character (e.g., !@#$%^&*).',
      callback: null,
    };

    const FivesRequirementConfrimPassword = new ElementCreator(FivesRequirementConfrimPasswordParams);

    const SixRequirementConfrimPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Password must not contain leading or trailing whitespace.',
      callback: null,
    };

    const SixRequirementConfrimPassword = new ElementCreator(SixRequirementConfrimPasswordParams);

    const SeventhRequirementConfrimPasswordParams = {
      tag: 'p',
      classNames: ['Requirement'],
      textContent: 'Passwords must match',
      callback: null,
    };

    const SeventhRequirementConfrimPassword = new ElementCreator(SeventhRequirementConfrimPasswordParams);

    const showHideConfrimPasswordParams = {
      tag: 'div',
      classNames: ['showPass'],
      textContent: '',
      callback: showHidePass,
    };

    const showHideConfrimPassword = new ElementCreator(showHideConfrimPasswordParams);

    RequirementsToConfrimPasswordText.addInsideElement(firstRequirementConfrimPassword);
    RequirementsToConfrimPasswordText.addInsideElement(secondRequirementConfrimPassword);
    RequirementsToConfrimPasswordText.addInsideElement(thirdRequirementConfrimPassword);
    RequirementsToConfrimPasswordText.addInsideElement(forthRequirementConfrimPassword);
    RequirementsToConfrimPasswordText.addInsideElement(FivesRequirementConfrimPassword);
    RequirementsToConfrimPasswordText.addInsideElement(SixRequirementConfrimPassword);
    RequirementsToConfrimPasswordText.addInsideElement(SeventhRequirementConfrimPassword);

    ConfrimPasswordContainerHtmlElement.append(showHideConfrimPassword.getElement());
    ConfrimPasswordContainerHtmlElement.append(RequirementsToConfrimPasswordText.getElement());

    this.viewElementCreator.addInsideElement(ConfrimPasswordContainerHtmlElement);

    const paramsRegisterButton = {
      tag: 'input',
      classNames: ['buttonRegSign'],
      textContent: 'Register',
      value: 'Register',
      action: '',
      type: 'submit',
      disabled: true,
      callback: null,
    };
    const RegButton = new InputElementCreator(paramsRegisterButton);

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

  getElement() {
    return this.viewElementCreator.getElement();
  }
}