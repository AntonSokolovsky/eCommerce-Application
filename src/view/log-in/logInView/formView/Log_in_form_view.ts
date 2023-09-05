import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';
import { InputElementCreator } from '../../../../utilities/InputFieldsCreator/InputFieldsCreator';
import { LogInFormViewParams } from '../LogInWindowParams';
import Router from '../../../../app/router/router';
import { Pages } from '../../../../app/router/pages';
import { getValue } from '../../../../utilities/function-utils';
import { Customer } from '../../../../app/loader/customer';
import { MyCustomerSignin } from '@commercetools/platform-sdk';
import { ModalWindowRequest } from '../../../modal-window-response-view/modal-window-request';
import { Mediator } from '../../../../app/controller/mediator';
import { CustomEventNames, ParamsCustomEvent } from '../../../../type/mediator-type';
import { MessagesModalWindow } from '../../../../type/messages-modal';

export default class LogInFormView extends View {

  private mediator = Mediator.getInstance();

  inputElements: HTMLInputElement[] = [];

  router: Router;

  constructor(router: Router) {

    const params = {
      tag: 'form',
      classNames: ['logInFormView'],
    };
    super(params);
    this.router = router;
    this.configureView();
    this.mediator.subscribe(CustomEventNames.CUSTOMER_REGISTER, this.authHandler.bind(this));
  }

  configureView() {
    const TelOrEmail = new ElementCreator(LogInFormViewParams.paramsTelOrEmail);
    this.viewElementCreator.addInsideElement(TelOrEmail);

    const MailInputContainer = new View(LogInFormViewParams.paramsMailInContainer);
    const MailContainerHtmlElement = MailInputContainer.getHtmlElement();

    const TelOrEmailInput = new InputElementCreator(LogInFormViewParams.paramsTelOrEmailInput);
    MailContainerHtmlElement.append(TelOrEmailInput.getInputElement());
    this.inputElements.push(TelOrEmailInput.getInputElement());


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
    this.inputElements.push(PasswordInput.getInputElement());

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
    SignIn.setCallback(() => this.authHandler());

    this.viewElementCreator.addInsideElement(SignIn);

    const ForgotPassLink = new ElementCreator(LogInFormViewParams.ParamsForgotLink);
    this.viewElementCreator.addInsideElement(ForgotPassLink);

    const CreateAccLink = new ElementCreator(LogInFormViewParams.ParamsCreateLink);
    CreateAccLink.setCallback(() => this.router.navigate(Pages.REGISTER));
    this.viewElementCreator.addInsideElement(CreateAccLink);
  }

  getElement() {
    return this.viewElementCreator.getElement();
  }

  authHandler(params?: ParamsCustomEvent ) {
    const customerAuthParams = params?.customerAuth || this.getDataForm();
    this.sendForm(customerAuthParams);
  }

  sendForm(customerAuthParams: MyCustomerSignin) {
    const dataForm = this.getDataForm();
    const customer = new Customer(customerAuthParams);
    const response = customer.loginCustomer(customerAuthParams);
    response.then((data) => {
      this.handleSuccessResponse(data.body.customer.firstName);
      localStorage.setItem('userMail', dataForm.email);
    })
      .catch(() => this.handleErrorResponse());
  }
  
  getDataForm(): MyCustomerSignin {
    const dataForm = {
      email: getValue(this.inputElements[0]),
      password: getValue(this.inputElements[1]),
    };
    return dataForm;
  }

  handleSuccessResponse(message: string | undefined) {
    const greetingMessage = `${MessagesModalWindow.AUTH_SUCCESS_MESSAGE} ${message}`;
    this.showModalWindow(greetingMessage);
    this.mediator.loginLogoutCustomer(CustomEventNames.CUSTOMER_LOGIN);
    this.router.navigate(Pages.FIRSTPAGE);
  }

  handleErrorResponse() {
    const errorMessage = MessagesModalWindow.AUTH_ERROR_MESSAGE_;
    this.showModalWindow(errorMessage);
  }

  showModalWindow(message: string) {
    const modalWindow = new ModalWindowRequest(message);
    return modalWindow;
  }
}