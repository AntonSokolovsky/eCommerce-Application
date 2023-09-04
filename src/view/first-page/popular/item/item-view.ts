import './item.css';
import View from '../../../view';
import { ElementCreator } from '../../../../utilities/element-creator';
import Router from '../../../../app/router/router';
import { Pages } from '../../../../app/router/pages';


export default class ItemView extends View {
  router: Router;

  constructor(router: Router) {
    const params = {
      tag: 'div',
      classNames: ['item'],
    };
    super(params);
    this.configureView();
    this.router = router;
  }

  configureView() {
    this.viewElementCreator.setElementClass(['item-small']);
    const paramsContImg = {
      tag: 'div',
      classNames: ['item__cont-img'],
      textContent: '',
      callback: this.buttonClickHandler.bind(this, `${Pages.CATALOG}/${1}`),
    };
    const creatorContImg = new ElementCreator(paramsContImg);
    this.viewElementCreator.addInsideElement(creatorContImg);

    const paramsToolbar = {
      tag: 'div',
      classNames: ['item__toolbar'],
      textContent: '',
      callback: null,
    };
    const paramsPrice = {
      tag: 'div',
      classNames: ['item__price'],
      textContent: '0.00$',
      callback: null,
    };
    const paramsBasket = {
      tag: 'div',
      classNames: ['item__basket'],
      textContent: '',
      callback: null,
    };
    const creatorToolbar = new ElementCreator(paramsToolbar);

    const creatorPrice = new ElementCreator(paramsPrice);
    creatorToolbar.addInsideElement(creatorPrice);
    const creatorBasket = new ElementCreator(paramsBasket);
    creatorToolbar.addInsideElement(creatorBasket);

    this.viewElementCreator.addInsideElement(creatorToolbar);
  }

  buttonClickHandler(url: string) {
    this.router.navigate(url);
  }
}