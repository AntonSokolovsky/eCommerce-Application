import './popular.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';
import ItemView from './item/item-view';
import Router from '../../../app/router/router';



export default class PopularView extends View {
  constructor(router: Router) {
    const params = {
      tag: 'section',
      classNames: ['section', 'section-popular'],
    };
    super(params);
    this.configureView(router);
  }

  configureView(router: Router) {
    const paramsTitle = {
      tag: 'h2',
      classNames: ['section__title', 'popular__title'],
      textContent: 'Popular',
      callback: null,
    };
    const creatorTitle = new ElementCreator(paramsTitle);
    this.viewElementCreator.addInsideElement(creatorTitle);

    const paramsItems = {
      tag: 'div',
      classNames: ['popular__items'],
      textContent: '',
      callback: null,
    };
    const creatorItems = new ElementCreator(paramsItems);
    for (let i = 0; i < 8; i += 1) {
      const creatorItem = new ItemView(router);
      creatorItems.addInsideElement(creatorItem.getHtmlElement());
    }
    this.viewElementCreator.addInsideElement(creatorItems);

    const paramsLink = {
      tag: 'div',
      classNames: ['popular__link'],
      textContent: 'Search ALL',
      callback: null,
    };
    const creatorLink = new ElementCreator(paramsLink);
    this.viewElementCreator.addInsideElement(creatorLink);
  }
}