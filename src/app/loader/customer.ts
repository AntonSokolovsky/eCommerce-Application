import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { ctpClient, getCtpClientPasswordFlow } from '../../sdk/client';
import {
  CustomerDraft,
  MyCustomerSignin,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';

const projectKey = process.env.CTP_PROJECT_KEY || '';

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
      return createApiBuilderFromCtpClient(getCtpClientPasswordFlow(userAuthOptions))
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

  loginCustomer(userAuthOptions: MyCustomerSignin) {
    return this.apiRoot
      .me()
      .login()
      .post({ body: userAuthOptions })
      .execute();
  }
}
