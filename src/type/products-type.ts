import { QueryParam } from '@commercetools/sdk-client-v2';

export type ProductsQueryArgs = {
  where?: string | string[];
  priceCurrency?: string;
  priceCountry?: string;
  priceCustomerGroup?: string;
  priceChannel?: string;
  localeProjection?: string | string[];
  expand?: string | string[];
  sort?: string | string[];
  limit?: number;
  offset?: number;
  withTotal?: boolean;
  [key: string]: QueryParam;
};