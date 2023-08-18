import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';
import { InputElementCreator } from '../../../../utilities/InputFieldsCreator/InputFieldsCreator';
import showHidePass from '../../../../utilities/showHidePass';
import validationEmail from '../../../../utilities/validation/validationEmail';
import validationPassword from '../../../../utilities/validation/validationPass';

export default class LogInFormView extends View {
  constructor() {
    const params = {
      tag: 'form',
      classNames: ['logInFormView'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const paramsTelOrEmail = {
      tag: 'span',
      classNames: ['Tel_text'],
      textContent: 'telephone or Email',
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
      style: 'display: none;',
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

    const PasswordInputContainerParams = {
      tag: 'div',
      classNames: ['input_container'],
      textContent: '',
      callback: null,
    };

    const PasswordInputContainer = new View(PasswordInputContainerParams);

    const PasswordInputContainerHtmlElement = PasswordInputContainer.getHtmlElement();

    const paramsPasswordInput = {
      tag: 'input',
      classNames: ['input', 'password_input'],
      textContent: '',
      type: 'password',
      value: '',
      action: '',
      disabled: false,
      callback: validationPassword,
    };
    const PasswordInput = new InputElementCreator(paramsPasswordInput);

    PasswordInputContainerHtmlElement.append(PasswordInput.getInputElement());

    const RequirementsToPassword = {
      tag: 'div',
      classNames: ['Requirements'],
      textContent: '',
      callback: null,
    };

    const RequirementsToPasswordAttributes = {
      style: 'display: none;',
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
    
    PasswordInputContainerHtmlElement.append(showHidePassword.getElement());
    PasswordInputContainerHtmlElement.append(RequirementsToPasswordText.getElement());
    
    this.viewElementCreator.addInsideElement(PasswordInputContainerHtmlElement);

    const paramsSignInButton = {
      tag: 'input',
      classNames: ['buttonRegSign'],
      textContent: 'Sign In',
      value: 'Sign In',
      action: '',
      type: 'submit',
      disabled: true,
      callback: null,
    };
    const SignIn = new InputElementCreator(paramsSignInButton);

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

  getElement() {
    return this.viewElementCreator.getElement();
  }
}