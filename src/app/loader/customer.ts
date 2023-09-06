import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { createFlow } from '../../sdk/client';
import {
  CustomerDraft,
  MyCustomerSignin,
  MyCustomerUpdateAction,
} from '@commercetools/platform-sdk';
// import { ProductsQueryArgs } from '../../type/products-type';

<<<<<<< HEAD
=======


>>>>>>> 30ee1638c51f494bcf806c86ad017cd2469b9e58
export class Customer {
  protected apiRoot;

  protected options: MyCustomerSignin | null;

  constructor(options?: MyCustomerSignin) {
    this.options = options || null;
    this.apiRoot = this.getApiRoot();
  }

  getApiRoot() {
    if (this.options) {
      const userAuthOptions: UserAuthOptions = {
        username: this.options.email,
        password: this.options.password,
      };
      return createFlow(userAuthOptions);
    } else {
      return createFlow();
    }
  }

  getCustomerByEmail(customerEmail:string) {
    return this.apiRoot
      .customers()
      .get({
        queryArgs: {
          where: `email="${customerEmail}"`,
        },
      })
      .execute();
  }

  createCustomer(customerParams: CustomerDraft) {
    return this.apiRoot
      .customers()
      .post(
        {
          body: customerParams,
        })
      .execute();
  }

  loginCustomer(userAuthOptions: MyCustomerSignin) {
    return this.apiRoot
      .me()
      .login()
      .post({ body: userAuthOptions })
      .execute();
  }

  getProducts() {
    return this.apiRoot
      .products()
      .get()
      .execute();
  }

  updatePass(version: number, currentPassword: string, newPassword: string) {
    return this.apiRoot
      .me()
      .password()
      .post({
        body: {
          version: version,
          currentPassword: currentPassword,
          newPassword: newPassword,
        },
      })
      .execute();
  }

  changeData(ver: number, actions: MyCustomerUpdateAction[]) {
    return this.apiRoot
      .me()
      .post({
        body: {
          version: ver,
          actions,
        },
      })
      .execute();
  }

  changeAdress(ver: number, actions: MyCustomerUpdateAction[]) {
    return this.apiRoot
      .me()
      .post({
        body: {
          version: ver,
          actions,
          // actions: [{
          //   action: "changeAddress",
          //   addressId: "{{addressId}}",
          //   address: {
          //     streetName: "Example Street",
          //     postalCode: "80933",
          //     city: "Exemplary City",
          //     country: "DE",
          //   }
          // }]
        },
      })
      .execute();
  }
}
