import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';
import { InputElementCreator } from '../../../../utilities/InputFieldsCreator/InputFieldsCreator';
import { LogInFormViewParams } from '../LogInWindowParams';
import Router from '../../../../app/router/router';
import { Pages } from '../../../../app/router/pages';
import { getInputValue } from '../../../../utilities/function-utils';
import { Customer } from '../../../../app/loader/customer';
import { MyCustomerSignin } from '@commercetools/platform-sdk';
import { ModalWindowRequest } from '../../../modal-window-response-view/modal-window-request';

export default class LogInFormView extends View {
  constructor(mainComponent: Router) {
    const params = {
      tag: 'form',
      classNames: ['logInFormView'],
    };
    super(params);
    this.configureView(mainComponent);
  }

  configureView(mainComponent: Router) {
    const TelOrEmail = new ElementCreator(LogInFormViewParams.paramsTelOrEmail);
    this.viewElementCreator.addInsideElement(TelOrEmail);

    const MailInputContainer = new View(LogInFormViewParams.paramsMailInContainer);
    const MailContainerHtmlElement = MailInputContainer.getHtmlElement();

    const TelOrEmailInput = new InputElementCreator(LogInFormViewParams.paramsTelOrEmailInput);
    MailContainerHtmlElement.append(TelOrEmailInput.getInputElement());

    const RequirementsToEmailAttributes = {
      style: 'display: none;',
    };
    const RequirementsToEmailText = new ElementCreator(LogInFormViewParams.RequirementsToEmail);
    RequirementsToEmailText.setAttributeElement(RequirementsToEmailAttributes);

    const firstRequirement = new ElementCreator(LogInFormViewParams.firstRequirementParams);
    const secondRequirement = new ElementCreator(LogInFormViewParams.secondRequirementParams);
    const thirdRequirement = new ElementCreator(LogInFormViewParams.thirdRequirementParams);
    const forthRequirement = new ElementCreator(LogInFormViewParams.forthRequirementParams);

    RequirementsToEmailText.addInsideElement(firstRequirement);
    RequirementsToEmailText.addInsideElement(secondRequirement);
    RequirementsToEmailText.addInsideElement(thirdRequirement);
    RequirementsToEmailText.addInsideElement(forthRequirement);

    MailContainerHtmlElement.append(RequirementsToEmailText.getElement());

    this.viewElementCreator.addInsideElement(MailContainerHtmlElement);

    const password = new ElementCreator(LogInFormViewParams.paramsPassword);
    this.viewElementCreator.addInsideElement(password);

    const PasswordInputContainer = new View(LogInFormViewParams.PasswordInputContainerParams);
    const PasswordInputContainerHtmlElement = PasswordInputContainer.getHtmlElement();

    const PasswordInput = new InputElementCreator(LogInFormViewParams.paramsPasswordInput);
    PasswordInputContainerHtmlElement.append(PasswordInput.getInputElement());

    const RequirementsToPasswordAttributes = {
      style: 'display: none;',
    };

    const RequirementsToPasswordText = new ElementCreator(LogInFormViewParams.RequirementsToPassword);
    RequirementsToPasswordText.setAttributeElement(RequirementsToPasswordAttributes);

    const firstRequirementPassword = new ElementCreator(LogInFormViewParams.firstRequirementPasswordParams);
    const secondRequirementPassword = new ElementCreator(LogInFormViewParams.secondRequirementPasswordParams);
    const thirdRequirementPassword = new ElementCreator(LogInFormViewParams.thirdRequirementPasswordParams);
    const forthRequirementPassword = new ElementCreator(LogInFormViewParams.forthRequirementPasswordParams);
    const FivesRequirementPassword = new ElementCreator(LogInFormViewParams.FivesRequirementPasswordParams);
    const SixRequirementPassword = new ElementCreator(LogInFormViewParams.SixRequirementPasswordParams);

    const showHidePassword = new ElementCreator(LogInFormViewParams.showHidePasswordParams);

    RequirementsToPasswordText.addInsideElement(firstRequirementPassword);
    RequirementsToPasswordText.addInsideElement(secondRequirementPassword);
    RequirementsToPasswordText.addInsideElement(thirdRequirementPassword);
    RequirementsToPasswordText.addInsideElement(forthRequirementPassword);
    RequirementsToPasswordText.addInsideElement(FivesRequirementPassword);
    RequirementsToPasswordText.addInsideElement(SixRequirementPassword);
    
    PasswordInputContainerHtmlElement.append(showHidePassword.getElement());
    PasswordInputContainerHtmlElement.append(RequirementsToPasswordText.getElement());
    
    this.viewElementCreator.addInsideElement(PasswordInputContainerHtmlElement);

    const SignIn = new InputElementCreator(LogInFormViewParams.paramsSignInButton);
    SignIn.setCallback(() => this.sendForm(mainComponent));
    this.viewElementCreator.addInsideElement(SignIn);

    const ForgotPassLink = new ElementCreator(LogInFormViewParams.ParamsForgotLink);
    this.viewElementCreator.addInsideElement(ForgotPassLink);

    const CreateAccLink = new ElementCreator(LogInFormViewParams.ParamsCreateLink);
    CreateAccLink.setCallback(() => mainComponent.navigate(Pages.REGISTER));
    this.viewElementCreator.addInsideElement(CreateAccLink);
  }

  getElement() {
    return this.viewElementCreator.getElement();
  }

  sendForm(mainComponent: Router) {
    const customer = new Customer(this.getDataForm());
    const response = customer.loginCustomer(this.getDataForm());
    response.then((data) => this.handleSuccessResponse(data.body.customer.firstName, mainComponent))
      .catch(() => this.handleErrorResponse());
    mainComponent.navigate(Pages.LOGIN);
  }
  
  //ToDo find another way to get the input value. Without use querySelector
  getDataForm(): MyCustomerSignin {
    const dataForm = {
      email: getInputValue(LogInFormViewParams.paramsTelOrEmailInput.classNames[1]),
      password: getInputValue(LogInFormViewParams.paramsPasswordInput.classNames[1]),
    };

    return dataForm;
  }

  handleSuccessResponse(message: string | undefined, mainComponent: Router) {
    const greetingMessage = `Hello, ${message}! You have successfully logged in`;
    this.showModalWindow(greetingMessage);
    this.hideAuthButton();
    mainComponent.navigate(Pages.FIRSTPAGE);
  }

  handleErrorResponse() {
    const errorMessage = 'Invalid email or password. You may not be registered yet';
    this.showModalWindow(errorMessage);
  }

  hideAuthButton() {
    const buttonLogin = document.querySelector('.nav__login');
    buttonLogin?.remove();
    const buttonRegister = document.querySelector('.nav__register');
    buttonRegister?.remove();

  }

  showModalWindow(message: string) {
    const modalWindow = new ModalWindowRequest(message);
    return modalWindow;
  }
}