import './style.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';
// import Router from '../../../app/router/router';
import { InputElementCreator } from '../../../utilities/InputFieldsCreator/InputFieldsCreator';
import editFields from '../../../utilities/editField';
import BillingAdressVindowView from './billingAdressView/billingAdressView';
import ShippingAdressVindowView from './ShippingAdressView/shippingAdressView';
import { Customer } from '../../../app/loader/customer';
import showHideModalWindow from '../../../utilities/showHideModalWindow';
import { isUserLogin } from '../../../utilities/is-user-login';


export default class AccountVindowView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['AccountVindow'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    let customerName = '';
    let customerBillingSurname = '';
    let dateOfBirthField = '';

    if (isUserLogin()) {
      const customer = new Customer();
      const mail = localStorage.getItem('userMail');
      if (mail) {
        customer.getCustomerByEmail(mail)
          .then((res) => {
            if (res.body.results[0].firstName && res.body.results[0].lastName && res.body.results[0].dateOfBirth) {
              customerName = res.body.results[0].firstName;
              customerBillingSurname = res.body.results[0].lastName;
              dateOfBirthField = res.body.results[0].dateOfBirth;

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
                classNames: ['nameField', 'firstName'],
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
                textContent: customerName,
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
                classNames: ['nameField', 'secondName'],
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
                textContent: customerBillingSurname,
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
                classNames: ['nameField', 'dateOfBirthField'],
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
                textContent: dateOfBirthField,
                callback: null,
              };
        
              const fieldDateOfBirthDateOfBirth = new ElementCreator(fieldDateOfBirthDateOfBirthParams);
          
              dateOfBirthFieldContainer.addInsideElement(fieldDateOfBirthDateOfBirth);
        
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
        
              this.viewElementCreator.addInsideElement(dateOfBirthFieldContainer);
        
        
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
                callback: () => { showHideModalWindow('password'); },
              };
        
              const changePassButton = new ElementCreator(changePassButtonParams);
        
              const changeMailButtonParams = {
                tag: 'button',
                classNames: ['changeMailButton', 'changeButton'],
                textContent: 'Change Email',
                callback: () => { showHideModalWindow('Mail'); },
              };
        
              const changeMailButton = new ElementCreator(changeMailButtonParams);
        
              const modalPassWindowParams = {
                tag: 'div',
                classNames: ['modalVindow', 'modalPassWindow'],
                textContent: '',
                callback: null,
              };
        
              const modalPassWindow = new ElementCreator(modalPassWindowParams);
        
              const currentPassTextParams = {
                tag: 'p',
                classNames: ['currentPassText'],
                textContent: 'Current pass',
                callback: null,
              };
        
              const currentPassText = new ElementCreator(currentPassTextParams);
        
              modalPassWindow.setAttributeElement({ style: 'display:none' });
        
              const fieldInputCurrentPassParams = {
                tag: 'input',
                classNames: ['editField', 'currentPass'],
                textContent: '',
                value: '',
                action: '',
                type: 'text',
                disabled: false,
                callback: () => {},
              };
        
              const fieldInputCurrentPass = new InputElementCreator(fieldInputCurrentPassParams);
        
              const newPassTextParams = {
                tag: 'p',
                classNames: ['currentPassText'],
                textContent: 'New pass',
                callback: null,
              };
        
              const newPassText = new ElementCreator(newPassTextParams);
        
              const fieldInputNewPassParams = {
                tag: 'input',
                classNames: ['editField', 'newPass'],
                textContent: '',
                value: '',
                action: '',
                type: 'text',
                disabled: false,
                callback: () => {},
              };
        
              const fieldInputNewPass = new InputElementCreator(fieldInputNewPassParams);
        
              const saveButtonParams = {
                tag: 'button',
                classNames: ['saveButton'],
                textContent: 'Save',
                callback: null,
              };
        
              const saveButton = new ElementCreator(saveButtonParams);
        
              const closeButtonParams = {
                tag: 'button',
                classNames: ['closeButton'],
                textContent: 'Close',
                callback: null,
              };
        
              const closeButton = new ElementCreator(closeButtonParams);
        
              const modalMailWindowParams = {
                tag: 'div',
                classNames: ['modalVindow', 'modalMailWindow'],
                textContent: '',
                callback: null,
              };
        
              const modalMailWindow = new ElementCreator(modalMailWindowParams);
        
              modalMailWindow.setAttributeElement({ style: 'display:none' });
        
              const newMailTextParams = {
                tag: 'p',
                classNames: ['currentMailText'],
                textContent: 'New mail',
                callback: null,
              };
        
              const newMailText = new ElementCreator(newMailTextParams);
        
              const fieldInputNewMailParams = {
                tag: 'input',
                classNames: ['editField', 'newMail'],
                textContent: '',
                value: '',
                action: '',
                type: 'text',
                disabled: false,
                callback: () => {},
              };
        
              const fieldInputNewMail = new InputElementCreator(fieldInputNewMailParams);
        
              const saveButtonMailParams = {
                tag: 'button',
                classNames: ['saveButtonMail'],
                textContent: 'Save',
                callback: null,
              };
        
              const saveButtonMail = new ElementCreator(saveButtonMailParams);
        
              const closeButtonMailParams = {
                tag: 'button',
                classNames: ['closeButtonMail'],
                textContent: 'Close',
                callback: null,
              };
        
              const closeButtonMail = new ElementCreator(closeButtonMailParams);

              const congradulationsParams = {
                tag: 'div',
                classNames: ['congradulations_window', 'hide'],
                textContent: '',
                callback: null,
              };
          
              const congradulations = new ElementCreator(congradulationsParams);
        
              const congradulationsTextParams = {
                tag: 'p',
                classNames: ['congradulations_text'],
                textContent: 'Changes made successfully!!!',
                callback: null,
              };
          
              const congradulationsTextText = new ElementCreator(congradulationsTextParams);
              congradulations.addInsideElement(congradulationsTextText);
          
              modalMailWindow.addInsideElement(newMailText);
              modalMailWindow.addInsideElement(fieldInputNewMail);
              modalMailWindow.addInsideElement(saveButtonMail);
              modalMailWindow.addInsideElement(closeButtonMail);
        
              modalPassWindow.addInsideElement(currentPassText);
              modalPassWindow.addInsideElement(fieldInputCurrentPass);
              modalPassWindow.addInsideElement(newPassText);
              modalPassWindow.addInsideElement(fieldInputNewPass);
              modalPassWindow.addInsideElement(saveButton);
              modalPassWindow.addInsideElement(closeButton);
        
              changeButtonsContainer.addInsideElement(changePassButton);
              changeButtonsContainer.addInsideElement(changeMailButton);
        
              this.viewElementCreator.addInsideElement(changeButtonsContainer);
              this.viewElementCreator.addInsideElement(modalPassWindow);
              this.viewElementCreator.addInsideElement(modalMailWindow);
              this.viewElementCreator.addInsideElement(congradulations);
            }
          });
      }
    } else {
      const nonAutorizeWindowParams = {
        tag: 'div',
        classNames: ['nonAutorize_window'],
        textContent: '',
        callback: null,
      };
  
      const nonAutorizeWindow = new ElementCreator(nonAutorizeWindowParams);

      const nonAutorizeWindowTextParams = {
        tag: 'p',
        classNames: ['nonAutorize_window_text'],
        textContent: 'Please login!',
        callback: null,
      };
  
      const nonAutorizeWindowText = new ElementCreator(nonAutorizeWindowTextParams);
      nonAutorizeWindow.addInsideElement(nonAutorizeWindowText);

      this.viewElementCreator.addInsideElement(nonAutorizeWindow);
    }
  }
}