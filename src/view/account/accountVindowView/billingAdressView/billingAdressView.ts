import './style.css';
import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';
// import Router from '../../../app/router/router';
import { InputElementCreator } from '../../../../utilities/InputFieldsCreator/InputFieldsCreator';
import editFields from '../../../../utilities/editField';
import { Customer } from '../../../../app/loader/customer';
import { isUserLogin } from '../../../../utilities/is-user-login';

export default class BillingAdressVindowView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['billingAddressContainer'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    if (isUserLogin()) {
      if (isUserLogin()) {
        let customerBillingCountry = '';
        let customerBillingStreet = '';
        let customerBillingCity = '';
        let customerBillingPostalCode = '';
        const customer = new Customer();
        const mail = localStorage.getItem('userMail');
        if (mail) {
          customer.getCustomerByEmail(mail)
            .then((res) => {
              if (res && res.body && res.body.results[0].addresses[0]) {
                if (res.body.results[0].addresses[0].country) {
                  customerBillingCountry = res.body.results[0].addresses[0].country;
                }
                if (res.body.results[0].addresses[0].streetName) {
                  customerBillingStreet = res.body.results[0].addresses[0].streetName;
                }
                if (res.body.results[0].addresses[0].city) {
                  customerBillingCity = res.body.results[0].addresses[0].city;
                }
                if (res.body.results[0].addresses[0].postalCode) {
                  customerBillingPostalCode = res.body.results[0].addresses[0].postalCode;
                }
                const billingAdressContainerNameParams = {
                  tag: 'p',
                  classNames: ['billingAdressContainerName'],
                  textContent: 'Billing Adress',
                  callback: null,
                };
              
                const billingAdress = new ElementCreator(billingAdressContainerNameParams);
              
                const countryFieldContainerParams = {
                  tag: 'div',
                  classNames: ['nameField', 'billingCountry'],
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
                  textContent: customerBillingCountry,
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
              
                // fieldInputCountry.setAttributeElement({ style: 'display: none;' });
                
                countryFieldContainer.addInsideElement(fieldInputCountry);
                
                const editModeBtnCountry = new ElementCreator(editModeBtnParams);
                
                countryFieldContainer.addInsideElement(editModeBtnCountry);
                
                const streetFieldContainerParams = {
                  tag: 'div',
                  classNames: ['nameField', 'billingStreet'],
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
                  textContent: customerBillingStreet,
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
                  classNames: ['nameField', 'billingCity'],
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
                  textContent: customerBillingCity,
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
              
                // fieldInputCity.setAttributeElement({ style: 'display: none;' });
                
                cityFieldContainer.addInsideElement(fieldInputCity);
                
                const editModeBtnCity = new ElementCreator(editModeBtnParams);
                
                cityFieldContainer.addInsideElement(editModeBtnCity);
              
                const postalCodeFieldContainerParams = {
                  tag: 'div',
                  classNames: ['nameField', 'billingPostalCode'],
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
                  textContent: customerBillingPostalCode,
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
              
                // fieldInputPostalCode.setAttributeElement({ style: 'display: none;' });
                
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
                  textContent: 'Save billing address as default',
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
            });
        }
      }
    }
  }
}