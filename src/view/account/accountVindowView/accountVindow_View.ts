import './style.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';
// import Router from '../../../app/router/router';
import { InputElementCreator } from '../../../utilities/InputFieldsCreator/InputFieldsCreator';
import editFields from '../../../utilities/editField';
import BillingAdressVindowView from './billingAdressView/billingAdressView';
import ShippingAdressVindowView from './ShippingAdressView/shippingAdressView';
import { Customer } from '../../../app/loader/customer';

export default class AccountVindowView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['AccountVindow'],
    };
    super(params);
    this.configureView();
    const customer = new Customer();
  }

  configureView() {
    const paramsAccountPhotoContainer = {
      tag: 'div',
      classNames: ['accountPhotoContainer'],
      textContent: '',
      callback: null,
    };
    const AccountPhotoContainer = new ElementCreator(paramsAccountPhotoContainer);

    const paramsAccountPhoto = {
      tag: 'div',
      classNames: ['accountPhoto'],
      textContent: '',
      callback: null,
    };
    const AccountPhoto = new ElementCreator(paramsAccountPhoto);

    const accountPhotoInput = {
      tag: 'input',
      classNames: ['account_photo_Input'],
      textContent: '',
      value: '',
      action: '',
      type: 'file',
      disabled: false,
      callback: () => {},
    };

    const AccountPhotoInputElem = new InputElementCreator(accountPhotoInput);

    AccountPhotoInputElem.setAttributeElement({ style: 'opacity: 0;' });

    AccountPhotoContainer.addInsideElement(AccountPhoto);

    AccountPhotoContainer.addInsideElement(AccountPhotoInputElem);

    this.viewElementCreator.addInsideElement(AccountPhotoContainer);
  
    const nameFieldContainerParams = {
      tag: 'div',
      classNames: ['nameField'],
      textContent: '',
      callback: null,
    };

    const nameFieldContainer = new ElementCreator(nameFieldContainerParams);
  
    const fieldNameParams = {
      tag: 'span',
      classNames: ['accountText'],
      textContent: 'Name:',
      callback: null,
    };

    const fieldName = new ElementCreator(fieldNameParams);
  
    nameFieldContainer.addInsideElement(fieldName);
  
    const fieldNameNameParams = {
      tag: 'span',
      classNames: ['accountText', 'text'],
      textContent: '',
      callback: null,
    };

    const fieldNameName = new ElementCreator(fieldNameNameParams);
  
    nameFieldContainer.addInsideElement(fieldNameName);

    const fieldInputNameParams = {
      tag: 'input',
      classNames: ['editFieldInput', 'hide'],
      textContent: '',
      value: '',
      action: '',
      type: 'text',
      disabled: false,
      callback: () => {},
    };

    const fieldInputName = new InputElementCreator(fieldInputNameParams);
  
    nameFieldContainer.addInsideElement(fieldInputName);
  
    const editModeBtnParams = {
      tag: 'div',
      classNames: ['editModeBtn'],
      textContent: 'Edit Mode',
      callback: editFields,
    };

    const editModeBtnName = new ElementCreator(editModeBtnParams);
  
    nameFieldContainer.addInsideElement(editModeBtnName);
  
    this.viewElementCreator.addInsideElement(nameFieldContainer);
  
    const surnameFieldContainerParams = {
      tag: 'div',
      classNames: ['nameField'],
      textContent: '',
      callback: null,
    };

    const surnameFieldContainer = new ElementCreator(surnameFieldContainerParams);
  
    const fieldSurnameParams = {
      tag: 'span',
      classNames: ['accountText'],
      textContent: 'Surname:',
      callback: null,
    };

    const fieldSurname = new ElementCreator(fieldSurnameParams);
  
    surnameFieldContainer.addInsideElement(fieldSurname);
  
    const fieldSurnameSurnameParams = {
      tag: 'span',
      classNames: ['accountText', 'text'],
      textContent: '',
      callback: null,
    };

    const fieldSurnameSurname = new ElementCreator(fieldSurnameSurnameParams);
  
    surnameFieldContainer.addInsideElement(fieldSurnameSurname);

    const fieldInputSurnameParams = {
      tag: 'input',
      classNames: ['editFieldInput', 'hide'],
      textContent: '',
      value: '',
      action: '',
      type: 'text',
      disabled: false,
      callback: () => {},
    };

    const fieldInputSurname = new InputElementCreator(fieldInputSurnameParams);
  
    surnameFieldContainer.addInsideElement(fieldInputSurname);
  
    const editModeBtnSurname = new ElementCreator(editModeBtnParams);
  
    surnameFieldContainer.addInsideElement(editModeBtnSurname);

    this.viewElementCreator.addInsideElement(surnameFieldContainer);
  
    const dateOfBirthFieldContainerParams = {
      tag: 'div',
      classNames: ['dateOfBirthField'],
      textContent: '',
      callback: null,
    };

    const dateOfBirthFieldContainer = new ElementCreator(dateOfBirthFieldContainerParams);
  
    const fieldDateOfBirthParams = {
      tag: 'span',
      classNames: ['accountText'],
      textContent: 'Date of Birth:',
      callback: null,
    };

    const fieldDateOfBirth = new ElementCreator(fieldDateOfBirthParams);
  
    dateOfBirthFieldContainer.addInsideElement(fieldDateOfBirth);
  
    const fieldDateOfBirthDateOfBirthParams = {
      tag: 'span',
      classNames: ['accountText', 'text'],
      textContent: '',
      callback: null,
    };

    const fieldDateOfBirthDateOfBirth = new ElementCreator(fieldDateOfBirthDateOfBirthParams);
  
    surnameFieldContainer.addInsideElement(fieldDateOfBirthDateOfBirth);

    const fieldInputDateOfBirthParams = {
      tag: 'input',
      classNames: ['editFieldInput', 'hide'],
      textContent: '',
      value: '',
      action: '',
      type: 'text',
      disabled: false,
      callback: () => {},
    };

    const fieldInputDateOfBirth = new InputElementCreator(fieldInputDateOfBirthParams);
  
    dateOfBirthFieldContainer.addInsideElement(fieldInputDateOfBirth);
  
    const editModeBtnDateOfBirth = new ElementCreator(editModeBtnParams);
  
    dateOfBirthFieldContainer.addInsideElement(editModeBtnDateOfBirth);

    this.viewElementCreator.addInsideElement(surnameFieldContainer);


    const billingAdressVindow = new BillingAdressVindowView();

    this.viewElementCreator.addInsideElement(billingAdressVindow.getHtmlElement());


    const shippingAdressVindow = new ShippingAdressVindowView();

    this.viewElementCreator.addInsideElement(shippingAdressVindow.getHtmlElement());


    const changeButtonsContainerParams = {
      tag: 'div',
      classNames: ['changeButtonContainer'],
      textContent: '',
      callback: null,
    };

    const changeButtonsContainer = new ElementCreator(changeButtonsContainerParams);


    const changePassButtonParams = {
      tag: 'button',
      classNames: ['changePassButton', 'changeButton'],
      textContent: 'Change Password',
      callback: null,
    };

    const changePassButton = new ElementCreator(changePassButtonParams);

    const changeMailButtonParams = {
      tag: 'button',
      classNames: ['changeMailButton', 'changeButton'],
      textContent: 'Change Email',
      callback: null,
    };

    const changeMailButton = new ElementCreator(changeMailButtonParams);

    changeButtonsContainer.addInsideElement(changePassButton);
    changeButtonsContainer.addInsideElement(changeMailButton);

    this.viewElementCreator.addInsideElement(changeButtonsContainer);



  }
}