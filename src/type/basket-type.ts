import { MyCartUpdate } from '@commercetools/platform-sdk';

export type SummaryBasketParams = {
  total: number,
  count: number,
  discount: number,
};

export type UpdateQuantityParams = {
  body: MyCartUpdate;
};

export const enum MyEnumCartAction {
  MyCartChangeLineItemQuantityAction = 'changeLineItemQuantity',
}