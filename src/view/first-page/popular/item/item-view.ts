import './item.css';
import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';
import Router from '../../../../app/router/router';
import { Pages } from '../../../../app/router/pages';
import { ProductCatalogData } from '@commercetools/platform-sdk';


export default class ItemView extends View {
  router: Router;

  constructor(router: Router, paramItem: ProductCatalogData, id: number) {
    const params = {
      tag: 'div',
      classNames: ['item'],
    };
    super(params);
    this.configureView(paramItem, id);
    this.router = router;
  }

  configureView(paramItem: ProductCatalogData, id: number) {
    this.viewElementCreator.setElementClass(['item-small']);

    const paramsContImg = {
      tag: 'div',
      classNames: ['item__cont-img'],
      textContent: '',
      callback: this.buttonClickHandler.bind(this, `${Pages.CATALOG}/${id}`),
    };
    const creatorContImg = new ElementCreator(paramsContImg);
    if (paramItem.current.masterVariant.images) {
      creatorContImg.setAttributeElement({ style: `background-image: url('${paramItem.current.masterVariant.images[0].url}')` });
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

    let paramsPrice;
    if (paramItem.current.masterVariant.prices) {
      paramsPrice = {
        tag: 'div',
        classNames: ['item__price'],
        textContent: `${paramItem.current.masterVariant.prices[0].value.centAmount / 100}$`,
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
    creatorToolbar.addInsideElement(creatorPrice);

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