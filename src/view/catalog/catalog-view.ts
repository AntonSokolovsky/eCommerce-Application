import './catalog.css';
import View from '../view';
import { ElementCreator } from '../../utilities/element-creator';
import ItemView from '../first-page/popular/item/item-view';
import Router from '../../app/router/router';
import ItemDetailView from '../first-page/popular/item/item-detail/item-detail-view';
import { Customer } from '../../app/loader/customer';
import { FilterView } from './filter/filter-view';
import { Mediator } from '../../app/controller/mediator';
import { CustomEventNames, ParamsCustomEvent } from '../../type/mediator-type';
import { ElementParams } from '../../type/params-element-type';

export default class CatalogView extends View {
  private loader;
  
  private router;
  
  private id;

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
    this.mediator.subscribe(CustomEventNames.PRODUCTS_FILTER, this.handleFilter.bind(this));
  }

  configureView() {
    const filter = new FilterView();
    this.viewElementCreator.addInsideElement(filter.getHtmlElement());

    if (this.id) {
      this.addLargeItemToView(this.router, this.id);
    } else {
      this.addSmallItemsToView(this.router);
    }
  }

  handleFilter(params?: ParamsCustomEvent) {
    this.viewElementCreator.getElement().childNodes[1].remove();
    if (this.id) {
      this.addLargeItemToView(this.router, this.id, params);
    } else {
      this.addSmallItemsToView(this.router, params);
    }
  }

  addSmallItemsToView(router: Router, params?: ParamsCustomEvent) {
    const paramsCatalogContainer: ElementParams = {
      tag: 'div',
      classNames: ['catalog__container'],
      textContent: '',
      callback: null,
    };
    const creatorCatalogContainer = new ElementCreator(paramsCatalogContainer);

    const paramsTitle = {
      tag: 'h2',
      classNames: ['section__title', 'catalog__title'],
      textContent: 'Catalog',
      callback: null,
    };
    const creatorTitle = new ElementCreator(paramsTitle);
    creatorCatalogContainer.addInsideElement(creatorTitle);

    const paramsItems = {
      tag: 'div',
      classNames: ['catalog__items'],
      textContent: '',
      callback: null,
    };
    const creatorItems = new ElementCreator(paramsItems);
    creatorCatalogContainer.addInsideElement(creatorItems);
    
    if (params) {
      const productsProjection = params.productsProjection;
      if (productsProjection?.total) {
        for (let i = 0; i < productsProjection.total; i += 1) {
          const creatorItem = new ItemView(router, productsProjection.results[i], i);
          creatorItems.addInsideElement(creatorItem.getHtmlElement());
        }
      }
    } else {
      this.loader.getAllProducts()
        .then((data) => {
          if (data.body.total) {
            for (let i = 0; i < data.body.total; i += 1) {
              const creatorItem = new ItemView(router, data.body.results[i], i);
              creatorItems.addInsideElement(creatorItem.getHtmlElement());
            }
          }
        });
    }

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

    creatorCatalogContainer.addInsideElement(creatorBtns);
    this.viewElementCreator.addInsideElement(creatorCatalogContainer);
  }

  addLargeItemToView(router: Router, id = '', params?: ParamsCustomEvent) {
    if (params) {
      if (params.productsProjection?.results) {
        const productsProjection = params.productsProjection;
        const largeCardComponent = new ItemDetailView(router, productsProjection?.results[+id]);
        this.viewElementCreator.addInsideElement(largeCardComponent.getHtmlElement());
      }
    } else {
      this.loader.getAllProducts()
        .then((data) => {
          const largeCardComponent = new ItemDetailView(router, data.body.results[+id]);
          this.viewElementCreator.addInsideElement(largeCardComponent.getHtmlElement());
        });
    }
  }
}
