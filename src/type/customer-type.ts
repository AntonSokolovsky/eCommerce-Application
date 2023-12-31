interface MyAdress {
  country: string;
  streetName?: string;
  streetNumber?: string;
  additionalStreetInfo?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  state?: string;
}
export interface CustomerCreate {
  key?: string,
  firstName: string | undefined,
  email: string,
  lastName: string,
  dateOfBirth: string,
  password: string,
  addresses: MyAdress[],
  defaultShippingAddress?: number,
  shippingAddressIds?: number[],
  defaultBillingAddress?: number,
  billingAddressIds?: number[],
}
