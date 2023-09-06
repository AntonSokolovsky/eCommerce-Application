import validationEmail from '../../../../src/utilities/validation/validationEmail';
import validationPassword from '../../../../src/utilities/validation/validationPass';
import validationComfrimPassword from '../../../../src/utilities/validation/validationComfrimPass';
import validationFirstLastName from '../../../../src/utilities/validation/validationFirstLastName';
import validationDateOfBirth from '../../../../src/utilities/validation/validationDateOfBirth';
import validationStreet from '../../../../src/utilities/validation/validationStreet';
import validationCity from '../../../../src/utilities/validation/validationCity';
import checkCountry from '../../../../src/utilities/validation/checkCountry';
import validationPostalCode from '../../../../src/utilities/validation/validationPostalCode';
import showHidePass from '../../../../src/utilities/showHidePass';
import registerCheckBoxStatus from '../../../../src/utilities/checkBoxStatus';

export const registerFormViewParams = {
  paramsTelOrEmail: {
    tag: 'span',
    classNames: ['Tel_text', 'text'],
    textContent: 'Telephone or Email',
    callback: null,
  },
  paramsMailInContainer:{
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsTelOrEmailInput:{
    tag: 'input',
    classNames: ['Email_input', 'input'],
    textContent: '',
    value: '',
    action: '',
    type: 'email',
    disabled: false,
    callback: validationEmail,
  },
  RequirementsToEmail: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  firstRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Email address must be properly formatted (e.g., user@example.com).',
    callback: null,
  },
  secondRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Email address must not contain leading or trailing whitespace.',
    callback: null,
  },
  thirdRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Email address must contain a domain name (e.g., example.com).',
    callback: null,
  },
  forthRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Email address must contain an \'@\' symbol separating local part and domain name.',
    callback: null,
  },
  paramsPassword: {
    tag: 'span',
    classNames: ['Password_text', 'text'],
    textContent: 'Password',
    callback: null,
  },
  paramsPasswordInContainer: {
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsPasswordInput: {
    tag: 'input',
    classNames: ['input', 'password_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'password',
    disabled: false,
    callback: validationPassword,
  },
  RequirementsToPassword: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  firstRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must be at least 8 characters long.',
    callback: null,
  },
  secondRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must contain at least one uppercase letter (A-Z).',
    callback: null,
  },
  thirdRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must contain at least one lowercase letter (a-z).',
    callback: null,
  },
  forthRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must contain at least one digit (0-9).',
    callback: null,
  },
  
  FivesRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: '(Optional) Password must contain at least one special character (e.g., !@#$%^&*).',
    callback: null,
  },
  SixRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must not contain leading or trailing whitespace.',
    callback: null,
  },
  showHidePasswordParams: {
    tag: 'div',
    classNames: ['showPass'],
    textContent: '',
    callback: showHidePass,
  },
  paramsConfrimPassword: {
    tag: 'span',
    classNames: ['Password_text', 'Confrim_password_input', 'text'],
    textContent: 'Confrim Password',
    value: '',
    action: '',
    type: 'password',
    callback: null,
  },
  paramsConfrimPasswordInContainer: {
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsConfrinPasswordInput: {
    tag: 'input',
    classNames: ['input'],
    textContent: '',
    value: '',
    action: '',
    type: 'password',
    disabled: false,
    callback: validationComfrimPassword,
  },
  RequirementsToConfrimPassword: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  firstRequirementConfrimPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must be at least 8 characters long.',
    callback: null,
  },
  secondRequirementConfrimPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must contain at least one uppercase letter (A-Z).',
    callback: null,
  },
  thirdRequirementConfrimPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must contain at least one lowercase letter (a-z).',
    callback: null,
  },
  
  forthRequirementConfrimPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must contain at least one digit (0-9).',
    callback: null,
  },
  FivesRequirementConfrimPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: '(Optional) Password must contain at least one special character (e.g., !@#$%^&*).',
    callback: null,
  },
  SixRequirementConfrimPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must not contain leading or trailing whitespace.',
    callback: null,
  },
  SeventhRequirementConfrimPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Passwords must match',
    callback: null,
  },
  showHideConfrimPasswordParams: {
    tag: 'div',
    classNames: ['showPass'],
    textContent: '',
    callback: showHidePass,
  },
  paramsRegisterButton: {
    tag: 'input',
    classNames: ['buttonRegSign'],
    textContent: 'Register',
    value: 'Register',
    action: '',
    type: 'button',
    disabled: true,
    callback: null,
  },
  ParamslogInLink: {
    tag: 'span',
    classNames: ['logInLink'],
    textContent: 'Log In',
    callback: null,
  },

  firstName: {
    tag: 'span',
    classNames: ['firstName_text', 'text'],
    textContent: 'First Name',
    callback: null,
  },
  paramsfirstNameInContainer:{
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsFirstNameInput:{
    tag: 'input',
    classNames: ['input', 'firstName_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'text',
    disabled: false,
    callback: validationFirstLastName,
  },
  RequirementsTofirstName: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  firstNameRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Must contain at least one character and no special characters or numbers.',
    callback: null,
  },

  LastName: {
    tag: 'span',
    classNames: ['LastName_text', 'text'],
    textContent: 'Last Name',
    callback: null,
  },
  paramsLastNameInContainer:{
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsLastNameInput:{
    tag: 'input',
    classNames: ['input', 'LastName_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'text',
    disabled: false,
    callback: validationFirstLastName,
  },
  RequirementsToLastName: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  LastNamefirstRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Must contain at least one character and no special characters or numbers',
    callback: null,
  },

  DateOfBirth: {
    tag: 'span',
    classNames: ['DateOfBirth', 'text'],
    textContent: 'Date of birth',
    callback: null,
  },
  paramsDateOfBirthInContainer:{
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsDateOfBirthInput:{
    tag: 'input',
    classNames: ['input', 'DateOfBirth_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'date',
    disabled: false,
    callback: validationDateOfBirth,
  },
  RequirementsToDateOfBirth: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  DateOfBirthfirstRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Enter your birthday in the format YYYY.MM.DD',
    callback: null,
  },

  Street: {
    tag: 'span',
    classNames: ['Street_text', 'text'],
    textContent: 'Street',
    callback: null,
  },
  paramsStreetInContainer:{
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsStreetInput:{
    tag: 'input',
    classNames: ['input', 'Street_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'text',
    disabled: false,
    callback: validationStreet,
  },
  RequirementsToStreet: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  StreetfirstRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Must contain at least one character.',
    callback: null,
  },

  City: {
    tag: 'span',
    classNames: ['City_text', 'text'],
    textContent: 'City',
    callback: null,
  },
  paramsCityInContainer:{
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsCityInput:{
    tag: 'input',
    classNames: ['input', 'City_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'text',
    disabled: false,
    callback: validationCity,
  },
  RequirementsToCity: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  CityfirstRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Must contain at least one character and no special characters or numbers/',
    callback: null,
  },

  PostalCode: {
    tag: 'span',
    classNames: ['PostalCode_text', 'text'],
    textContent: 'Postal Code',
    callback: null,
  },
  paramsPostalCodeInContainer:{
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsPostalCodeInput:{
    tag: 'input',
    classNames: ['input', 'PostalCode_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'text',
    disabled: false,
    callback: validationPostalCode,
  },
  RequirementsToPostalCode: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  PostalCodefirstRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Must follow the format for the country (e.g., 12345 or A1B 2C3 for the U.S. and Canada, respectively).',
    callback: null,
  },

  Country: {
    tag: 'span',
    classNames: ['Country_text', 'text'],
    textContent: 'Country',
    callback: null,
  },
  paramsCountryInContainer:{
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsCountryInput:{
    tag: 'input',
    classNames: ['input', 'Country_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'text',
    disabled: false,
    callback: checkCountry,
  },
  RequirementsToCountry: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  CountryfirstRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Must be a valid country from a predefined list or autocomplete field.',
    callback: null,
  },
  billingAdressContainer: {
    tag: 'div',
    classNames: ['billingAdressContainer', 'adressContainer'],
    textContent: '',
    callback: null,
  },
  saveBillingAdressAsDefault:{
    tag: 'input',
    classNames: ['saveBillingAdressAsDefault'],
    textContent: '',
    value: '',
    action: '',
    type: 'checkbox',
    disabled: false,
    callback: null,
  },
  saveBillingAdressAsDefaultText:{
    tag: 'p',
    classNames: ['saveBillingAdressAsDefaultText'],
    textContent: 'Save billing adress as default',
    callback: null,
  },
  saveBillingAdressAsDefaultContainer:{
    tag: 'div',
    classNames: ['saveBillingAdressAsDefaultContainer'],
    textContent: '',
    callback: null,
  },
  BillingAdressMatchShippingContainer:{
    tag: 'div',
    classNames: ['BillingAdressMatchShippingContainer'],
    textContent: '',
    callback: null,
  },
  BillingAdressMatchShipping:{
    tag: 'input',
    classNames: ['BillingAdressMatchShipping'],
    textContent: '',
    value: '',
    action: '',
    type: 'checkbox',
    disabled: false,
    callback: registerCheckBoxStatus,
  },
  BillingAdressMatchShippingText:{
    tag: 'p',
    classNames: ['BillingAdressMatchShippingText'],
    textContent: 'My billing address matches shipping address',
    callback: null,
  },


  shippingAdressContainer: {
    tag: 'div',
    classNames: ['shippingAdressContainer', 'adressContainer'],
    textContent: '',
    callback: null,
  },
  saveShippingAdressAsDefault:{
    tag: 'input',
    classNames: ['saveShippingAdressAsDefault'],
    textContent: '',
    value: '',
    action: '',
    type: 'checkbox',
    disabled: false,
    callback: null,
  },
  saveShippingAdressAsDefaultText:{
    tag: 'p',
    classNames: ['saveShippingAdressAsDefaultText'],
    textContent: 'Save shipping adress as default',
    callback: null,
  },
  saveShippingAdressAsDefaultContainer:{
    tag: 'div',
    classNames: ['saveShippingAdressAsDefaultContainer'],
    textContent: '',
    callback: null,
  },
  ShippingAdressMatchShippingContainer:{
    tag: 'div',
    classNames: ['ShippingAdressMatchShippingContainer'],
    textContent: '',
    callback: null,
  },

  paramsShippingCountryInput:{
    tag: 'input',
    classNames: ['input', 'Shipping_Country_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'text',
    disabled: false,
    callback: checkCountry,
  },

  paramsShippingStreetInput:{
    tag: 'input',
    classNames: ['input', 'Shipping_Street_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'text',
    disabled: false,
    callback: validationStreet,
  },

  paramsShippingPostalCodeInput:{
    tag: 'input',
    classNames: ['input', 'Shipping_PostalCode_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'text',
    disabled: false,
    callback: validationPostalCode,
  },

  paramsShippingCityInput:{
    tag: 'input',
    classNames: ['input', 'Shipping_City_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'text',
    disabled: false,
    callback: validationCity,
  },

  MyBillingAdressMatchesShippingContainer:{
    tag: 'div',
    classNames: ['MyBillingAdressMatchesShipping'],
    textContent: '',
    callback: null,
  },
};