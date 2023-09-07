import { MyCustomerUpdateAction } from '@commercetools/platform-sdk';
import { Customer } from '../app/loader/customer';

export default function checkBoxes(e: Event):void {
  const customer = new Customer();
  const target = e.target;
  const BillingCheckbox = document.querySelector('.BillingCheckbox');
  const ShippingCheckbox = document.querySelector('.ShippingCheckbox');
  const congradulationsWindow: HTMLElement | null = document.querySelector('.congradulations_window');
  if (target instanceof HTMLInputElement) {
    const tarhetCheched = target.checked;
    if (target.classList.contains('BillingCheckbox')) {
      if (tarhetCheched) {
        if (ShippingCheckbox instanceof HTMLInputElement) ShippingCheckbox.checked = false;
        const mail = localStorage.getItem('userMail');
        if (mail) {
          customer.getCustomerByEmail(mail)
            .then((res) => {
              const ver = res.body.results[0].version;
              const adressId = res.body.results[0].addresses[0].id;
              const actions: MyCustomerUpdateAction[] = [{
                action: 'setDefaultShippingAddress',
                addressId: adressId,
              }];
              customer.changeData(ver, actions)
                .then(() => {
                  congradulationsWindow?.classList.remove('hide');
                  setTimeout(() => {
                    congradulationsWindow?.classList.add('hide');
                  }, 2000);
                });
            });
        }
      }
    }
    if (target.classList.contains('ShippingCheckbox')) {
      if (tarhetCheched) {
        if (BillingCheckbox instanceof HTMLInputElement) BillingCheckbox.checked = false;
        const mail = localStorage.getItem('userMail');
        if (mail) {
          customer.getCustomerByEmail(mail)
            .then((res) => {
              const ver = res.body.results[0].version;
              const adressId = res.body.results[0].addresses[1].id;
              const actions: MyCustomerUpdateAction[] = [{
                action: 'setDefaultShippingAddress',
                addressId: adressId,
              }];
              customer.changeData(ver, actions)
                .then(() => {
                  congradulationsWindow?.classList.remove('hide');
                  setTimeout(() => {
                    congradulationsWindow?.classList.add('hide');
                  }, 2000);
                });
            });
        }
      }
    }
  }

}