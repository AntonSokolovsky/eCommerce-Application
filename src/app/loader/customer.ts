import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { createFlow } from '../../sdk/client';
import {
  CustomerDraft,
  MyCustomerSignin,
  MyCustomerUpdateAction,
} from '@commercetools/platform-sdk';
import { QueryParamsSearchProducts } from '../../type/products-type';

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

  getAttributes() {
    return this.apiRoot
      .productTypes()
      .get()
      .execute();
  }

  getCategories() {
    return this.apiRoot
      .categories()
      .get()
      .execute();
  }

  getAllProducts() {
    const params: QueryParamsSearchProducts = {
      queryArgs: {
      },
    };
    return this.apiRoot
      .productProjections()
      .search()
      .get(params)
      .execute();
  }

  getProductsWithOptions(arrayFilterParams: Map<string, Set<HTMLElement>>) {
    const filter: string[] = [];
    arrayFilterParams.forEach((listValueAttributes, myEnumName) => {
      let filterString = `variants.attributes.${myEnumName}.key:`;
      let countValues = listValueAttributes.size;
      listValueAttributes.forEach((myEnumValue) => {
        if (countValues === 1) {
          filterString = filterString + '"' + (myEnumValue as HTMLInputElement).value + '"';
        } else {
          countValues -= 1;
          filterString = filterString + '"' + (myEnumValue as HTMLInputElement).value + '", ';
        }
      });
      filter.push(filterString);
    });
    const params: QueryParamsSearchProducts = {
      queryArgs:{
        filter: filter,
      },
    };
    return this.apiRoot
      .productProjections()
      .search()
      .get(params)
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
        },
      })
      .execute();
  }
}
