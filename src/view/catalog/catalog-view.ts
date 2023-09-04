import './catalog.css';
import View from '../view';
import { ElementCreator } from '../../utilities/element-creator';
import ItemView from '../first-page/popular/item/item-view';
import Router from '../../app/router/router';
import ItemDetailView from '../first-page/popular/item/item-detail/item-detail-view';

export default class CatalogView extends View {
  constructor(router: Router, id = '') {
    const params = {
      tag: 'section',
      classNames: ['section', 'section-catalog'],
    };
    super(params);
    this.configureView(router, id);
  }

  configureView(router: Router, id = '') {
    if (id) {
      this.addLargeItemToView(router, id);
    } else {
      this.addSmallItemsToView(router);
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
    for (let i = 0; i < 20; i += 1) {
      const creatorItem = new ItemView(router);
      creatorItems.addInsideElement(creatorItem.getHtmlElement());
    }
    this.viewElementCreator.addInsideElement(creatorItems);

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
    // const selectedCard = cardsInfo.find((card) => card.id === id);
    const largeCardComponent = new ItemDetailView(router);
    this.viewElementCreator.addInsideElement(largeCardComponent.getHtmlElement());
  }
}