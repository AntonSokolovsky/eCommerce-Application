import './catalog.css';
import View from '../view';
import { ElementCreator } from '../../utilities/element-creator';
import ItemView from '../first-page/popular/item/item-view';
import Router from '../../app/router/router';
import ItemDetailView from '../first-page/popular/item/item-detail/item-detail-view';
import { Customer } from '../../app/loader/customer';

import { FilterView } from './filter/filter-view';
import { Mediator } from '../../app/controller/mediator';
import { CustomEventNames } from '../../type/mediator-type';
// import { products } from '../../app/loader/products';

export default class CatalogView extends View {
  private loader;
  
  private router;
  
  private id;
  
  private listProducts: HTMLElement | null;

  private mediator = Mediator.getInstance();
  
  constructor(router: Router, id = '') {
    const params = {
      tag: 'section',
      classNames: ['section', 'section-catalog'],
    };
    super(params);
    this.router = router;
    this.loader = new Customer();
    this.id = id;
    this.configureView();
    this.listProducts = null;
    this.mediator.subscribe(CustomEventNames.PRODUCTS_FILTER, this.handleFilter.bind(this));
  }

  configureView() {
    // loader.getProducts()
    //   .then((data) => data.body.total);
    const filter = new FilterView();
    this.viewElementCreator.addInsideElement(filter.getHtmlElement());

    if (this.id) {
      this.addLargeItemToView(this.router, this.id);
    } else {
      this.addSmallItemsToView(this.router);
    }
  }

  // handleFilter(params?: ParamsCustomEvent) {
  handleFilter() {
    if (this.listProducts) {
      this.listProducts.remove();
    }
    if (this.id) {
      this.addLargeItemToView(this.router, this.id);
    } else {
      this.addSmallItemsToView(this.router);
    }
  }

  addSmallItemsToView(router: Router) {
    const paramsTitle = {
      tag: 'h2',
      classNames: ['section__title', 'catalog__title'],
      textContent: 'Catalog',
      callback: null,
    };
    const creatorTitle = new ElementCreator(paramsTitle);
    this.viewElementCreator.addInsideElement(creatorTitle);

    const paramsFilters = {
      tag: 'div',
      classNames: ['catalog__filters'],
      textContent: '',
      callback: null,
    };
    const creatorFilters = new ElementCreator(paramsFilters);
    this.viewElementCreator.addInsideElement(creatorFilters);

    const paramsItems = {
      tag: 'div',
      classNames: ['catalog__items'],
      textContent: '',
      callback: null,
    };
    const creatorItems = new ElementCreator(paramsItems);
    this.listProducts = creatorItems.getElement();
    this.viewElementCreator.addInsideElement(creatorItems);

    this.loader.getProducts()
      .then((data) => {
        if (data.body.total) {
          for (let i = 0; i < data.body.total; i += 1) {
            const creatorItem = new ItemView(router, data.body.results[i].masterData, i);
            creatorItems.addInsideElement(creatorItem.getHtmlElement());
          }
        }
      });

    const paramsBtns = {
      tag: 'div',
      classNames: ['catalog__buttons'],
      textContent: '',
      callback: null,
    };
    const paramsBtnLeft = {
      tag: 'div',
      classNames: ['catalog__button', 'button_left'],
      textContent: '<',
      callback: null,
    }; const paramsBtnNumber = {
      tag: 'div',
      classNames: ['catalog__button', 'button_number'],
      textContent: '1',
      callback: null,
    }; const paramsBtnRight = {
      tag: 'div',
      classNames: ['catalog__button', 'button_right'],
      textContent: '>',
      callback: null,
    };
    const creatorBtns = new ElementCreator(paramsBtns);

    const creatorBtnLeft = new ElementCreator(paramsBtnLeft);
    creatorBtns.addInsideElement(creatorBtnLeft);
    const creatorBtnNumber = new ElementCreator(paramsBtnNumber);
    creatorBtns.addInsideElement(creatorBtnNumber);
    const creatorBtnRight = new ElementCreator(paramsBtnRight);
    creatorBtns.addInsideElement(creatorBtnRight);

    this.viewElementCreator.addInsideElement(creatorBtns);
  }

  addLargeItemToView(router: Router, id = '') {
    // const selectedItem = cardsInfo.find((card) => card.id === id);
    this.loader.getProducts()
      .then((data) => {
        if (data.body.results) {
          const largeCardComponent = new ItemDetailView(router, data.body.results[+id].masterData);
          this.viewElementCreator.addInsideElement(largeCardComponent.getHtmlElement());
        }
      });
    // const selectedItem = cardsInfo.find((card) => card.id === id);
    // const largeCardComponent = new ItemDetailView(router);
    // this.viewElementCreator.addInsideElement(largeCardComponent.getHtmlElement());
  }
}