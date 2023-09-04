import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';
import { InputElementCreator } from '../../../../utilities/InputFieldsCreator/InputFieldsCreator';
import { registerFormViewParams } from '../RegisterWindowParams';
import Router from '../../../../app/router/router';
import { Pages } from '../../../../app/router/pages';
import { countryList } from '../../../../utilities/validation/countryList/CountryList';
import { Customer } from '../../../../app/loader/customer';
import { getInputValue } from '../../../../utilities/function-utils';
import { CustomerDraft } from '@commercetools/platform-sdk';

export default class RegisterFormView extends View {
  constructor(router: Router) {
    const params = {
      tag: 'form',
      classNames: ['RegForm'],
    };
    super(params);
    this.configureView(router);
  }

  configureView(router: Router) {
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




    const firstName = new ElementCreator(registerFormViewParams.firstName);
    this.viewElementCreator.addInsideElement(firstName);

    const firstNameInputContainer = new View(registerFormViewParams.paramsfirstNameInContainer);
    const firstNameContainerHtmlElement = firstNameInputContainer.getHtmlElement();

    const firstNameInput = new InputElementCreator(registerFormViewParams.paramsFirstNameInput);
    firstNameContainerHtmlElement.append(firstNameInput.getInputElement());

    const RequirementsTofirstNameAttributes = {
      style: 'display: none',
    };
    const RequirementsTofirstNameText = new ElementCreator(registerFormViewParams.RequirementsTofirstName);

    RequirementsTofirstNameText.setAttributeElement(RequirementsTofirstNameAttributes);

    const firstRequirementFirstName = new ElementCreator(registerFormViewParams.firstNameRequirementParams);

    RequirementsTofirstNameText.addInsideElement(firstRequirementFirstName);
    
    firstNameContainerHtmlElement.append(RequirementsTofirstNameText.getElement());

    this.viewElementCreator.addInsideElement(firstNameContainerHtmlElement);




    const LastName = new ElementCreator(registerFormViewParams.LastName);
    this.viewElementCreator.addInsideElement(LastName);

    const LastNameInputContainer = new View(registerFormViewParams.paramsLastNameInContainer);
    const LastNameContainerHtmlElement = LastNameInputContainer.getHtmlElement();

    const LastNameInput = new InputElementCreator(registerFormViewParams.paramsLastNameInput);
    LastNameContainerHtmlElement.append(LastNameInput.getInputElement());

    const RequirementsToLastNameAttributes = {
      style: 'display: none',
    };
    const RequirementsToLastNameText = new ElementCreator(registerFormViewParams.RequirementsToLastName);

    RequirementsToLastNameText.setAttributeElement(RequirementsToLastNameAttributes);

    const firstRequirementLastName = new ElementCreator(registerFormViewParams.LastNamefirstRequirementParams);

    RequirementsToLastNameText.addInsideElement(firstRequirementLastName);
    
    LastNameContainerHtmlElement.append(RequirementsToLastNameText.getElement());

    this.viewElementCreator.addInsideElement(LastNameContainerHtmlElement);



    const DateOfBirth = new ElementCreator(registerFormViewParams.DateOfBirth);
    this.viewElementCreator.addInsideElement(DateOfBirth);

    const DateOfBirthInputContainer = new View(registerFormViewParams.paramsDateOfBirthInContainer);
    const DateOfBirthContainerHtmlElement = DateOfBirthInputContainer.getHtmlElement();

    const DateOfBirthInput = new InputElementCreator(registerFormViewParams.paramsDateOfBirthInput);
    DateOfBirthContainerHtmlElement.append(DateOfBirthInput.getInputElement());

    const RequirementsToDateOfBirthAttributes = {
      style: 'display: none',
    };
    const RequirementsToDateOfBirthText = new ElementCreator(registerFormViewParams.RequirementsToDateOfBirth);

    RequirementsToDateOfBirthText.setAttributeElement(RequirementsToDateOfBirthAttributes);

    const firstRequirementDateOfBirth = new ElementCreator(registerFormViewParams.DateOfBirthfirstRequirementParams);

    RequirementsToDateOfBirthText.addInsideElement(firstRequirementDateOfBirth);
    
    DateOfBirthContainerHtmlElement.append(RequirementsToDateOfBirthText.getElement());

    this.viewElementCreator.addInsideElement(DateOfBirthContainerHtmlElement);

    const billingAdressContainer = new ElementCreator(registerFormViewParams.billingAdressContainer);

    const saveBillingAdressAsDefaultContainer = new ElementCreator(registerFormViewParams.saveBillingAdressAsDefaultContainer);

    const saveBillingAdressAsDefaultCheckboks = new InputElementCreator(registerFormViewParams.saveBillingAdressAsDefault);
    saveBillingAdressAsDefaultContainer.addInsideElement(saveBillingAdressAsDefaultCheckboks);
    const saveBillingAdressAsDefaultText = new ElementCreator(registerFormViewParams.saveBillingAdressAsDefaultText);
    saveBillingAdressAsDefaultContainer.addInsideElement(saveBillingAdressAsDefaultText);

    billingAdressContainer.addInsideElement(saveBillingAdressAsDefaultContainer);

    const Street = new ElementCreator(registerFormViewParams.Street);
    billingAdressContainer.addInsideElement(Street);

    const StreetInputContainer = new View(registerFormViewParams.paramsStreetInContainer);
    const StreetContainerHtmlElement = StreetInputContainer.getHtmlElement();

    const StreetInput = new InputElementCreator(registerFormViewParams.paramsStreetInput);
    StreetContainerHtmlElement.append(StreetInput.getInputElement());

    const RequirementsToStreetAttributes = {
      style: 'display: none',
    };
    const RequirementsToStreetText = new ElementCreator(registerFormViewParams.RequirementsToStreet);

    RequirementsToStreetText.setAttributeElement(RequirementsToStreetAttributes);

    const firstRequirementStreet = new ElementCreator(registerFormViewParams.StreetfirstRequirementParams);

    RequirementsToStreetText.addInsideElement(firstRequirementStreet);
    
    StreetContainerHtmlElement.append(RequirementsToStreetText.getElement());

    billingAdressContainer.addInsideElement(StreetContainerHtmlElement);



    const City = new ElementCreator(registerFormViewParams.City);
    billingAdressContainer.addInsideElement(City);

    const CityInputContainer = new View(registerFormViewParams.paramsCityInContainer);
    const CityContainerHtmlElement = CityInputContainer.getHtmlElement();

    const CityInput = new InputElementCreator(registerFormViewParams.paramsCityInput);
    CityContainerHtmlElement.append(CityInput.getInputElement());

    const RequirementsToCityAttributes = {
      style: 'display: none',
    };
    const RequirementsToCityText = new ElementCreator(registerFormViewParams.RequirementsToCity);

    RequirementsToCityText.setAttributeElement(RequirementsToCityAttributes);

    const firstRequirementCity = new ElementCreator(registerFormViewParams.CityfirstRequirementParams);

    RequirementsToCityText.addInsideElement(firstRequirementCity);
    
    CityContainerHtmlElement.append(RequirementsToCityText.getElement());

    billingAdressContainer.addInsideElement(CityContainerHtmlElement);

    const Country = new ElementCreator(registerFormViewParams.Country);
    billingAdressContainer.addInsideElement(Country);

    const CountryInputContainer = new View(registerFormViewParams.paramsCountryInContainer);
    const CountryContainerHtmlElement = CountryInputContainer.getHtmlElement();

    const CountryInput = new InputElementCreator(registerFormViewParams.paramsCountryInput);
    CountryContainerHtmlElement.append(CountryInput.getInputElement());

    const RequirementsToCountryAttributes = {
      style: 'display: none',
    };
    const RequirementsToCountryText = new ElementCreator(registerFormViewParams.RequirementsToCountry);

    RequirementsToCountryText.setAttributeElement(RequirementsToCountryAttributes);

    Object.values(countryList).map(countryParams => {
      const country = new ElementCreator(countryParams);
      RequirementsToCountryText.addInsideElement(country);
      CountryContainerHtmlElement.append(RequirementsToCountryText.getElement());
    });

    billingAdressContainer.addInsideElement(CountryContainerHtmlElement);

    const PostalCode = new ElementCreator(registerFormViewParams.PostalCode);
    billingAdressContainer.addInsideElement(PostalCode);

    const PostalCodeInputContainer = new View(registerFormViewParams.paramsPostalCodeInContainer);
    const PostalCodeContainerHtmlElement = PostalCodeInputContainer.getHtmlElement();

    const PostalCodeInput = new InputElementCreator(registerFormViewParams.paramsPostalCodeInput);
    PostalCodeContainerHtmlElement.append(PostalCodeInput.getInputElement());

    const RequirementsToPostalCodeAttributes = {
      style: 'display: none',
    };
    const RequirementsToPostalCodeText = new ElementCreator(registerFormViewParams.RequirementsToPostalCode);

    RequirementsToPostalCodeText.setAttributeElement(RequirementsToPostalCodeAttributes);

    const firstRequirementPostalCode = new ElementCreator(registerFormViewParams.PostalCodefirstRequirementParams);

    RequirementsToPostalCodeText.addInsideElement(firstRequirementPostalCode);

    PostalCodeContainerHtmlElement.append(RequirementsToPostalCodeText.getElement());

    billingAdressContainer.addInsideElement(PostalCodeContainerHtmlElement);

    const BillingAdressMatchShippingContainer = new ElementCreator(registerFormViewParams.saveBillingAdressAsDefaultContainer);

    const BillingAdressMatchShippingCheckboks = new InputElementCreator(registerFormViewParams.BillingAdressMatchShipping);
    BillingAdressMatchShippingContainer.addInsideElement(BillingAdressMatchShippingCheckboks);
    const BillingAdressMatchShippingText = new ElementCreator(registerFormViewParams.BillingAdressMatchShippingText);
    BillingAdressMatchShippingContainer.addInsideElement(BillingAdressMatchShippingText);

    billingAdressContainer.addInsideElement(BillingAdressMatchShippingContainer);

    const RegButton = new InputElementCreator(registerFormViewParams.paramsRegisterButton);
    RegButton.setCallback(() => this.sendForm(router));
    this.viewElementCreator.addInsideElement(RegButton);
    billingAdressContainer.addInsideElement(RegButton);

    const logInLink = new ElementCreator(registerFormViewParams.ParamslogInLink);
    logInLink.setCallback(() => router.navigate(Pages.LOGIN));
    billingAdressContainer.addInsideElement(logInLink);

    this.viewElementCreator.addInsideElement(billingAdressContainer);
  }

  getElement() {
    return this.viewElementCreator.getElement();
  }

  sendForm(mainComponent: Router) {
    const customer = new Customer();
    customer.createCustomer(this.getDataForm());
    mainComponent.navigate(Pages.FIRSTPAGE);
  }

  //ToDo find another way to get the input value. Without use querySelector
  getDataForm(): CustomerDraft {
    const dataForm = {
      email: getInputValue(registerFormViewParams.paramsTelOrEmailInput.classNames[0]),
      firstName: getInputValue(registerFormViewParams.paramsFirstNameInput.classNames[0]),
      lastName: getInputValue(registerFormViewParams.paramsLastNameInput.classNames[0]),
      dateOfBirth: getInputValue(registerFormViewParams.paramsDateOfBirthInput.classNames[0]),
      password: getInputValue(registerFormViewParams.paramsPasswordInput.classNames[0]),
      addresses: [
        {
          country: getInputValue(registerFormViewParams.paramsCountryInput.classNames[0]),
          streetName: getInputValue(registerFormViewParams.paramsStreetInput.classNames[0]),
          postalCode: getInputValue(registerFormViewParams.paramsPostalCodeInput.classNames[0]),
          city: getInputValue(registerFormViewParams.paramsCityInput.classNames[0]),
        },
      ],
    };

    return dataForm;
  }
}