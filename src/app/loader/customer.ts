import { ctpClient } from '../../sdk/client';
import {
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import { CustomerCreate } from '../../type/customer-type';

const projectKey = process.env.CTP_PROJECT_KEY || '';

export class Customer {
  protected apiRoot;

  constructor() {
    this.apiRoot = createApiBuilderFromCtpClient(ctpClient)
      .withProjectKey({ projectKey: projectKey });
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

  createCustomer(customerParams: CustomerCreate) {
    return this.apiRoot
      .customers()
      .post(
        {
          body: customerParams,
        })
      .execute();
  }
}
