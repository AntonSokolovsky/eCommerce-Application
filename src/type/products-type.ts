import { AttributeEnumType } from '@commercetools/platform-sdk';
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

export type MyAttributeType = AttributeEnumType;

export type QueryParamsSearchProducts = {
  queryArgs?: {
    fuzzy?: boolean;
    fuzzyLevel?: number;
    markMatchingVariants?: boolean;
    filter?: string | string[];
    'filter.facets'?: string | string[];
    'filter.query'?: string | string[];
    facet?: string | string[];
    sort?: string | string[];
    limit?: number;
    offset?: number;
    withTotal?: boolean;
    staged?: boolean;
    priceCurrency?: string;
    priceCountry?: string;
    priceCustomerGroup?: string;
    priceChannel?: string;
    localeProjection?: string | string[];
    storeProjection?: string;
    expand?: string | string[];
    [key: string]: QueryParam;
  };
};

export type CheckboxElementWithNameAttribute = [string, HTMLInputElement];

export type FilterOfAttributeValueParams = [string, string];
