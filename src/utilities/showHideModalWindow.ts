import { Customer } from '../app/loader/customer';
import {
  MyCustomerUpdateAction,
} from '@commercetools/platform-sdk';

export default function showHideModalWindow(mode: string):void {
  const customer = new Customer();
  const inputElem: HTMLInputElement | null = document.querySelector('.editField');
  const saveBtnPass: HTMLElement | null = document.querySelector('.saveButton');
  const closeBtnPass: HTMLElement | null = document.querySelector('.closeButton');
  const saveBtnMail: HTMLElement | null = document.querySelector('.saveButtonMail');
  const closeBtnMail: HTMLElement | null = document.querySelector('.closeButtonMail');
  const modalPassWindow: HTMLElement | null = document.querySelector('.modalPassWindow');
  const modalMailWindow: HTMLElement | null = document.querySelector('.modalMailWindow');
  const currentPassInputField: HTMLInputElement | null = document.querySelector('.currentPass');
  const newPassInputField: HTMLInputElement | null = document.querySelector('.newPass');
  const newMailnputField: HTMLInputElement | null = document.querySelector('.newMail');
  const congradulationsWindow: HTMLElement | null = document.querySelector('.congradulations_window');
  const currentMail = localStorage.getItem('userMail');

  if (mode === 'password') {
    modalPassWindow?.removeAttribute('style');
    if (inputElem) {
      inputElem.focus();
    }
    saveBtnPass?.addEventListener('click', () => {
      if (currentMail) {
        customer.getCustomerByEmail(currentMail).then((res) => {
          const vers: number = res.body.results[0].version;
          let currentPassValue = '';
          let newPassValue = '';
          if (currentPassInputField?.value) currentPassValue = currentPassInputField?.value;
          if (newPassInputField?.value) newPassValue = newPassInputField?.value;
          customer.updatePass(vers, currentPassValue, newPassValue);
          modalPassWindow?.setAttribute('style', 'display: none;');
          saveBtnPass?.removeEventListener('click', () => {});
          congradulationsWindow?.classList.remove('hide');
          setTimeout(() => {
            congradulationsWindow?.classList.add('hide');
          }, 2000);
        });
      }
    });
    closeBtnPass?.addEventListener('click', () => {
      modalPassWindow?.setAttribute('style', 'display: none;');
      closeBtnPass?.removeEventListener('click', () => {});
    });
  } else {
    modalMailWindow?.removeAttribute('style');
    if (inputElem) {
      inputElem.focus();
    }
    saveBtnMail?.addEventListener('click', () => {
      if (currentMail) {
        customer.getCustomerByEmail(currentMail).then((res) => {
          const vers: number = res.body.results[0].version;
          let newMail = '';
          if (newMailnputField?.value) newMail = newMailnputField?.value;
          const actions: MyCustomerUpdateAction[] = [{
            'action': 'changeEmail',
            'email': newMail,
          }];
          customer.changeData(vers, actions);
          localStorage.setItem('userMail', newMail);
          modalPassWindow?.setAttribute('style', 'display: none;');
          saveBtnPass?.removeEventListener('click', () => {});
        });
      }
      modalMailWindow?.setAttribute('style', 'display: none;');
      saveBtnMail?.removeEventListener('click', () => {});
      congradulationsWindow?.classList.remove('hide');
      setTimeout(() => {
        congradulationsWindow?.classList.add('hide');
      }, 2000);
    });
    closeBtnMail?.addEventListener('click', () => {
      modalMailWindow?.setAttribute('style', 'display: none;');
      closeBtnMail?.removeEventListener('click', () => {});
    });
  }
}