import './item.css';
import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';
import Router from '../../../../app/router/router';
import { Pages } from '../../../../app/router/pages';
import { ProductProjection } from '@commercetools/platform-sdk';


export default class ItemView extends View {
  router: Router;

  constructor(router: Router, product: ProductProjection, id: number) {
    const params = {
      tag: 'div',
      classNames: ['item'],
    };
    super(params);
    this.configureView(product, id);
    this.router = router;
  }

  configureView(product: ProductProjection, id: number) {

    this.viewElementCreator.setElementClass(['item-small']);

    const paramsContImg = {
      tag: 'div',
      classNames: ['item__cont-img'],
      textContent: '',
      callback: this.buttonClickHandler.bind(this, `${Pages.CATALOG}/${id}`),
    };
    const creatorContImg = new ElementCreator(paramsContImg);
    if (product.masterVariant.images) {
      creatorContImg.setAttributeElement({ style: `background-image: url('${product.masterVariant.images[0].url}')` });
    }
    this.viewElementCreator.addInsideElement(creatorContImg);

    const paramsToolbar = {
      tag: 'div',
      classNames: ['item__toolbar'],
      textContent: '',
      callback: null,
    };
    const creatorToolbar = new ElementCreator(paramsToolbar);
    this.viewElementCreator.addInsideElement(creatorToolbar);

    const paramsPricesCont = {
      tag: 'div',
      classNames: ['item__prices-container'],
      textContent: '',
      callback: null,
    };
    const creatorPricesCont = new ElementCreator(paramsPricesCont);
    creatorToolbar.addInsideElement(creatorPricesCont);

    let paramsPrice;
    if (product.masterVariant.prices) {
      paramsPrice = {
        tag: 'div',
        classNames: ['item__price'],
        textContent: `${product.masterVariant.prices[0].value.centAmount / 100}$`,
        callback: null,
      };
    } else {
      paramsPrice = {
        tag: 'div',
        classNames: ['item__price'],
        textContent: '',
        callback: null,
      };
    }
    const creatorPrice = new ElementCreator(paramsPrice);
    creatorPricesCont.addInsideElement(creatorPrice);

    if (product.masterVariant.prices && product.masterVariant.prices[0].discounted) {
      const paramsDiscount = {
        tag: 'div',
        classNames: ['item__discount'],
        textContent: `${product.masterVariant.prices[0].discounted.value.centAmount / 100}$`,
        callback: null,
      };
      const creatorDiscount = new ElementCreator(paramsDiscount);
      creatorPricesCont.addInsideElement(creatorDiscount);
      creatorPrice.setAttributeElement({ style: 'text-decoration: line-through; font-size: 16px;' } );
    }

    const paramsBasket = {
      tag: 'div',
      classNames: ['item__basket'],
      textContent: '',
      callback: null,
    };

    const creatorBasket = new ElementCreator(paramsBasket);
    creatorToolbar.addInsideElement(creatorBasket);
  }

  buttonClickHandler(url: string) {
    this.router.navigate(url);
  }
}