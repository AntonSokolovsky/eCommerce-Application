import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { createFlow } from '../../sdk/client';
import {
  CustomerDraft,
  MyCustomerSignin,
  MyCustomerUpdateAction,
} from '@commercetools/platform-sdk';
// import { ProductsQueryArgs } from '../../type/products-type';



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

  //To Do implement getting products with some arguments
  // getProducts() {
  //   const queryArgs: ProductsQueryArgs = {
  //     sort: [],
  //     limit: 20,
  //     offset: 1,
  // };
  // this.apiRoot
  //   .products()
  // .get({ queryArgs })
  // .get()
  // .execute()
  // .then((data) => console.log(data));
  // }

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
}
