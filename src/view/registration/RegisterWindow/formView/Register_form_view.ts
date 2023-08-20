import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';
import { InputElementCreator } from '../../../../utilities/InputFieldsCreator/InputFieldsCreator';
import { registerFormViewParams } from '../RegisterWindowParams';

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
    const TelOrEmail = new ElementCreator(registerFormViewParams.paramsTelOrEmail);
    this.viewElementCreator.addInsideElement(TelOrEmail);

    const MailInputContainer = new View(registerFormViewParams.paramsMailInContainer);
    const MailContainerHtmlElement = MailInputContainer.getHtmlElement();

    const TelOrEmailInput = new InputElementCreator(registerFormViewParams.paramsTelOrEmailInput);
    MailContainerHtmlElement.append(TelOrEmailInput.getInputElement());

    const RequirementsToEmailAttributes = {
      style: 'display: none',
    };
    const RequirementsToEmailText = new ElementCreator(registerFormViewParams.RequirementsToEmail);

    RequirementsToEmailText.setAttributeElement(RequirementsToEmailAttributes);

    const firstRequirement = new ElementCreator(registerFormViewParams.firstRequirementParams);
    const secondRequirement = new ElementCreator(registerFormViewParams.secondRequirementParams);
    const thirdRequirement = new ElementCreator(registerFormViewParams.thirdRequirementParams);
    const forthRequirement = new ElementCreator(registerFormViewParams.forthRequirementParams);

    RequirementsToEmailText.addInsideElement(firstRequirement);
    RequirementsToEmailText.addInsideElement(secondRequirement);
    RequirementsToEmailText.addInsideElement(thirdRequirement);
    RequirementsToEmailText.addInsideElement(forthRequirement);
    
    MailContainerHtmlElement.append(RequirementsToEmailText.getElement());

    this.viewElementCreator.addInsideElement(MailContainerHtmlElement);

    const password = new ElementCreator(registerFormViewParams.paramsPassword);
    this.viewElementCreator.addInsideElement(password);

    const PassworsInputContainer = new View(registerFormViewParams.paramsPasswordInContainer);
    const PasswordContainerHtmlElement = PassworsInputContainer.getHtmlElement();

    const PasswordInput = new InputElementCreator(registerFormViewParams.paramsPasswordInput);
    PasswordContainerHtmlElement.append(PasswordInput.getInputElement());

    const RequirementsToPasswordAttributes = {
      style: 'display: none',
    };

    const RequirementsToPasswordText = new ElementCreator(registerFormViewParams.RequirementsToPassword);
    RequirementsToPasswordText.setAttributeElement(RequirementsToPasswordAttributes);

    const firstRequirementPassword = new ElementCreator(registerFormViewParams.firstRequirementPasswordParams);
    const secondRequirementPassword = new ElementCreator(registerFormViewParams.secondRequirementPasswordParams);
    const thirdRequirementPassword = new ElementCreator(registerFormViewParams.thirdRequirementPasswordParams);
    const forthRequirementPassword = new ElementCreator(registerFormViewParams.forthRequirementPasswordParams);
    const FivesRequirementPassword = new ElementCreator(registerFormViewParams.FivesRequirementPasswordParams);
    const SixRequirementPassword = new ElementCreator(registerFormViewParams.SixRequirementPasswordParams);
    
    const showHidePassword = new ElementCreator(registerFormViewParams.showHidePasswordParams);

    RequirementsToPasswordText.addInsideElement(firstRequirementPassword);
    RequirementsToPasswordText.addInsideElement(secondRequirementPassword);
    RequirementsToPasswordText.addInsideElement(thirdRequirementPassword);
    RequirementsToPasswordText.addInsideElement(forthRequirementPassword);
    RequirementsToPasswordText.addInsideElement(FivesRequirementPassword);
    RequirementsToPasswordText.addInsideElement(SixRequirementPassword);

    PasswordContainerHtmlElement.append(showHidePassword.getElement());
    PasswordContainerHtmlElement.append(RequirementsToPasswordText.getElement());
    
    this.viewElementCreator.addInsideElement(PasswordContainerHtmlElement);

    const Confrimpassword = new ElementCreator(registerFormViewParams.paramsConfrimPassword);
    this.viewElementCreator.addInsideElement(Confrimpassword);

    const ConfrimPassworsInputContainer = new View(registerFormViewParams.paramsConfrimPasswordInContainer);
    const ConfrimPasswordContainerHtmlElement = ConfrimPassworsInputContainer.getHtmlElement();

    const ConfrimPasswordInput = new InputElementCreator(registerFormViewParams.paramsConfrinPasswordInput);
    ConfrimPasswordContainerHtmlElement.append(ConfrimPasswordInput.getInputElement());

    const RequirementsToConfrimPasswordAttributes = {
      style: 'display: none',
    };

    const RequirementsToConfrimPasswordText = new ElementCreator(registerFormViewParams.RequirementsToConfrimPassword);
    RequirementsToConfrimPasswordText.setAttributeElement(RequirementsToConfrimPasswordAttributes);

    const firstRequirementConfrimPassword = new ElementCreator(registerFormViewParams.firstRequirementConfrimPasswordParams);
    const secondRequirementConfrimPassword = new ElementCreator(registerFormViewParams.secondRequirementConfrimPasswordParams);
    const thirdRequirementConfrimPassword = new ElementCreator(registerFormViewParams.thirdRequirementConfrimPasswordParams);
    const forthRequirementConfrimPassword = new ElementCreator(registerFormViewParams.forthRequirementConfrimPasswordParams);
    const FivesRequirementConfrimPassword = new ElementCreator(registerFormViewParams.FivesRequirementConfrimPasswordParams);
    const SixRequirementConfrimPassword = new ElementCreator(registerFormViewParams.SixRequirementConfrimPasswordParams);
    const SeventhRequirementConfrimPassword = new ElementCreator(registerFormViewParams.SeventhRequirementConfrimPasswordParams);

    const showHideConfrimPassword = new ElementCreator(registerFormViewParams.showHideConfrimPasswordParams);

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

    const RegButton = new InputElementCreator(registerFormViewParams.paramsRegisterButton);

    this.viewElementCreator.addInsideElement(RegButton);

    const logInLink = new ElementCreator(registerFormViewParams.ParamslogInLink);

    this.viewElementCreator.addInsideElement(logInLink);
  }

  getElement() {
    return this.viewElementCreator.getElement();
  }
}