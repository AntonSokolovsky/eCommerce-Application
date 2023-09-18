import { MyCartUpdate } from '@commercetools/platform-sdk';

export type SummaryBasketParams = {
  total: number,
  count: number,
  discount: number,
};

export type UpdateQuantityParams = {
  body: MyCartUpdate;
};

// export type UpdateDiscountParams = {
//   body: MyCartRemoveDiscountCodeAction
// };

export const enum MyEnumCartAction {
  MyCartChangeLineItemQuantityAction = 'changeLineItemQuantity',
  MyCartAddDiscountCodeAction = 'addDiscountCode',
  MyCartRemoveDiscountCodeAction = 'removeDiscountCode',  
}