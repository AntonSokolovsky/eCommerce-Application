import './style.css';
import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';
// import Router from '../../../app/router/router';
import { InputElementCreator } from '../../../../utilities/InputFieldsCreator/InputFieldsCreator';
import editFields from '../../../../utilities/editField';

export default class ShippingAdressVindowView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['shippingAddressContainer'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const shippingAdressContainerNameParams = {
      tag: 'p',
      classNames: ['shippingAdressContainerName'],
      textContent: 'Shipping Adress',
      callback: null,
    };

    const billingAdress = new ElementCreator(shippingAdressContainerNameParams);

    const countryFieldContainerParams = {
      tag: 'div',
      classNames: ['nameField'],
      textContent: '',
      callback: null,
    };

    const countryFieldContainer = new ElementCreator(countryFieldContainerParams);
  
    const fieldCountryParams = {
      tag: 'span',
      classNames: ['accountText'],
      textContent: 'Country:',
      callback: null,
    };

    const fieldCountry = new ElementCreator(fieldCountryParams);
  
    countryFieldContainer.addInsideElement(fieldCountry);
  
    const fieldCountryCountryParams = {
      tag: 'span',
      classNames: ['accountText', 'text'],
      textContent: '',
      callback: null,
    };

    const fieldCountryCountry = new ElementCreator(fieldCountryCountryParams);
  
    countryFieldContainer.addInsideElement(fieldCountryCountry);

    const fieldInputCountryParams = {
      tag: 'input',
      classNames: ['editFieldInput', 'hide'],
      textContent: '',
      value: '',
      action: '',
      type: 'text',
      disabled: false,
      callback: () => {},
    };

    const editModeBtnParams = {
      tag: 'div',
      classNames: ['editModeBtn'],
      textContent: 'Edit Mode',
      callback: editFields,
    };

    const fieldInputCountry = new InputElementCreator(fieldInputCountryParams);

  
    countryFieldContainer.addInsideElement(fieldInputCountry);
  
    const editModeBtnCountry = new ElementCreator(editModeBtnParams);
  
    countryFieldContainer.addInsideElement(editModeBtnCountry);
  
    const streetFieldContainerParams = {
      tag: 'div',
      classNames: ['nameField'],
      textContent: '',
      callback: null,
    };

    const streetFieldContainer = new ElementCreator(streetFieldContainerParams);
  
    const fieldStreetParams = {
      tag: 'span',
      classNames: ['accountText'],
      textContent: 'Street:',
      callback: null,
    };

    const fieldStreet = new ElementCreator(fieldStreetParams);
  
    streetFieldContainer.addInsideElement(fieldStreet);
  
    const fieldStreetStreetParams = {
      tag: 'span',
      classNames: ['accountText', 'text'],
      textContent: '',
      callback: null,
    };

    const fieldStreetStreet = new ElementCreator(fieldStreetStreetParams);
  
    streetFieldContainer.addInsideElement(fieldStreetStreet);

    const fieldInputStreetParams = {
      tag: 'input',
      classNames: ['editFieldInput', 'hide'],
      textContent: '',
      value: '',
      action: '',
      type: 'text',
      disabled: false,
      callback: () => {},
    };

    const fieldInputStreet = new InputElementCreator(fieldInputStreetParams);

    // fieldInputStreet.setAttributeElement({ style: 'display: none;' });
  
    streetFieldContainer.addInsideElement(fieldInputStreet);
  
    const editModeBtnStreet = new ElementCreator(editModeBtnParams);
  
    streetFieldContainer.addInsideElement(editModeBtnStreet);



    const cityFieldContainerParams = {
      tag: 'div',
      classNames: ['nameField'],
      textContent: '',
      callback: null,
    };

    const cityFieldContainer = new ElementCreator(cityFieldContainerParams);
  
    const fieldCityParams = {
      tag: 'span',
      classNames: ['accountText'],
      textContent: 'City:',
      callback: null,
    };

    const fieldCity = new ElementCreator(fieldCityParams);
  
    cityFieldContainer.addInsideElement(fieldCity);
  
    const fieldCityCityParams = {
      tag: 'span',
      classNames: ['accountText', 'text'],
      textContent: '',
      callback: null,
    };

    const fieldCityCity = new ElementCreator(fieldCityCityParams);
  
    cityFieldContainer.addInsideElement(fieldCityCity);

    const fieldInputCityParams = {
      tag: 'input',
      classNames: ['editFieldInput', 'hide'],
      textContent: '',
      value: '',
      action: '',
      type: 'text',
      disabled: false,
      callback: () => {},
    };

    const fieldInputCity = new InputElementCreator(fieldInputCityParams);
  
    cityFieldContainer.addInsideElement(fieldInputCity);
  
    const editModeBtnCity = new ElementCreator(editModeBtnParams);
  
    cityFieldContainer.addInsideElement(editModeBtnCity);

    const postalCodeFieldContainerParams = {
      tag: 'div',
      classNames: ['nameField'],
      textContent: '',
      callback: null,
    };

    const postalCodeFieldContainer = new ElementCreator(postalCodeFieldContainerParams);
  
    const fieldpostalCodeParams = {
      tag: 'span',
      classNames: ['accountText'],
      textContent: 'Postal Code:',
      callback: null,
    };

    const fieldPostalCode = new ElementCreator(fieldpostalCodeParams);
  
    postalCodeFieldContainer.addInsideElement(fieldPostalCode);
  
    const fieldPostalCodePostalCodeParams = {
      tag: 'span',
      classNames: ['accountText', 'text'],
      textContent: '',
      callback: null,
    };

    const fieldPostalCodePostalCode = new ElementCreator(fieldPostalCodePostalCodeParams);
  
    postalCodeFieldContainer.addInsideElement(fieldPostalCodePostalCode);

    const fieldInputPostalCodeParams = {
      tag: 'input',
      classNames: ['editFieldInput', 'hide'],
      textContent: '',
      value: '',
      action: '',
      type: 'text',
      disabled: false,
      callback: () => {},
    };

    const fieldInputPostalCode = new InputElementCreator(fieldInputPostalCodeParams);
  
    postalCodeFieldContainer.addInsideElement(fieldInputPostalCode);
  
    const editModeBtnPostalCode = new ElementCreator(editModeBtnParams);
  
    postalCodeFieldContainer.addInsideElement(editModeBtnPostalCode);



    const fieldCheckboxBillingContainerParams = {
      tag: 'div',
      classNames: ['billingAdressCheckboxParams'],
      textContent: '',
      callback: null,
    };

    const fieldCheckboxBillingContainer = new ElementCreator(fieldCheckboxBillingContainerParams);
  
    const inputCheckboxBillingParams = {
      tag: 'input',
      classNames: ['BillingCheckbox'],
      textContent: '',
      value: '',
      action: '',
      type: 'checkbox',
      disabled: false,
      callback: () => {},
    };

    const inputCheckboxBilling = new InputElementCreator(inputCheckboxBillingParams);

    
    const fieldCheckboxNameParams = {
      tag: 'p',
      classNames: ['fieldCheckboxName'],
      textContent: 'Save shipping address as default',
      callback: null,
    };

    const fieldCheckboxName = new ElementCreator(fieldCheckboxNameParams);

    fieldCheckboxBillingContainer.addInsideElement(inputCheckboxBilling);
    fieldCheckboxBillingContainer.addInsideElement(fieldCheckboxName);
    
    this.viewElementCreator.addInsideElement(billingAdress);
    this.viewElementCreator.addInsideElement(countryFieldContainer);
    this.viewElementCreator.addInsideElement(streetFieldContainer);
    this.viewElementCreator.addInsideElement(cityFieldContainer);
    this.viewElementCreator.addInsideElement(postalCodeFieldContainer);
    this.viewElementCreator.addInsideElement(fieldCheckboxBillingContainer);
  }
}