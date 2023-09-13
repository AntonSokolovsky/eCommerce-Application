import { ClientResponse, ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';
import CatalogView from '../view/catalog/catalog-view';
import Router from '../app/router/router';

export default function setItems() {
  const width = window.innerWidth;
  const countsOnPC = 12;
  const countsOnTablet = 12;
  const countsOnTL = 6;
  let targetCount;
            
  if (width > 1100) {
    targetCount = countsOnPC;
  } else if (width > 750 && width < 1100) {
    targetCount = countsOnTablet;
  } else if (width < 750) {
    targetCount = countsOnTL;
  }

  return targetCount;
}