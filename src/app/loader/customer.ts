import { ctpClient, getCtpClientPasswordFlow } from '../../sdk/client';
import {
  CustomerDraft,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import { UserAuthOptions } from '@commercetools/sdk-client-v2';

const projectKey = process.env.CTP_PROJECT_KEY || '';

export class Customer {
  protected apiRoot;

  protected options: UserAuthOptions | null;

  constructor(options?: UserAuthOptions) {
    this.options = options || null;
    this.apiRoot = this.getApiRoot();
  }

  getApiRoot() {
    if (this.options) {
      return createApiBuilderFromCtpClient(getCtpClientPasswordFlow(this.options))
        .withProjectKey({ projectKey: projectKey });
    } else {
      return createApiBuilderFromCtpClient(ctpClient)
        .withProjectKey({ projectKey: projectKey });
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

  loginCustomer() {

  }
}
