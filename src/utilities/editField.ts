import { Customer } from '../app/loader/customer';
import {
  MyCustomerUpdateAction,
} from '@commercetools/platform-sdk';

export default function editFields(e: Event) {
  const customer = new Customer();
  const customerMail = localStorage.getItem('userMail');
  const target = e.target;
  let targetParentElem: HTMLElement | null;
  let elemToEdit: HTMLElement | null;
  let inputElem: HTMLInputElement | null;
  let textToEdit = '';
  const congradulationsWindow: HTMLElement | null = document.querySelector('.congradulations_window');

  if (target instanceof HTMLElement) {
    targetParentElem = target.parentElement;
    target.innerHTML = 'save';
    if (targetParentElem?.querySelector('.text') && targetParentElem?.querySelector('.editFieldInput')) {
      elemToEdit = targetParentElem?.querySelector('.text');
      inputElem = targetParentElem?.querySelector('.editFieldInput');
      if (elemToEdit?.innerHTML) {
        textToEdit = elemToEdit?.innerHTML;
      }
      if (elemToEdit && inputElem) {
        if (!inputElem.classList.contains('hide')) {
          const value = inputElem.value;
          if (customerMail) {
            customer.getCustomerByEmail(customerMail).then((res) => {
              const ver = res.body.results[0].version;
              if (inputElem) {
                if (targetParentElem?.classList.contains('firstName')) {
                  const actions: MyCustomerUpdateAction[] = [{
                    'action': 'setFirstName',
                    'firstName': value,
                  }];
                  customer.changeData(ver, actions);
                  congradulationsWindow?.classList.remove('hide');
                  setTimeout(() => {
                    congradulationsWindow?.classList.add('hide');
                  }, 2000);
                } else if (targetParentElem?.classList.contains('secondName')) {
                  const actions: MyCustomerUpdateAction[] = [{
                    'action': 'setLastName',
                    'lastName': value,
                  }];
                  customer.changeData(ver, actions);
                  congradulationsWindow?.classList.remove('hide');
                  setTimeout(() => {
                    congradulationsWindow?.classList.add('hide');
                  }, 2000);
                } else if (targetParentElem?.classList.contains('dateOfBirthField')) {
                  const actions: MyCustomerUpdateAction[] = [{
                    'action': 'setDateOfBirth',
                    'dateOfBirth': value,
                  }];
                  customer.changeData(ver, actions);
                  congradulationsWindow?.classList.remove('hide');
                  setTimeout(() => {
                    congradulationsWindow?.classList.add('hide');
                  }, 2000);
                }
              }
            });
          }
          elemToEdit.innerHTML = inputElem.value;
          target.innerHTML = 'Edit Mode';
        }
        elemToEdit.classList.toggle('hide');
        inputElem?.classList.toggle('hide');
        inputElem.focus();
        inputElem.value = textToEdit;
      }
    }
  }
}