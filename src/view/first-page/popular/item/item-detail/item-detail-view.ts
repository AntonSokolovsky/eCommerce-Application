import './item-detail.css';
import ItemView from '../item-view';
import { Pages } from '../../../../../app/router/pages';
import { ElementCreator } from '../../../../../utilities/element-creator';
import ItemPopUp from '../item-popUp/item-popUp-view';
import View from '../../../../view';

const CssClasses = {
  CONTAINER: 'item',
  CONTAINER_DETAIL: 'item_detail',
  DETAIL_IMG: 'item_detail__img',
  DETAIL_NAME: 'item_detail__name',
  DETAIL_DESC: 'item_detail__desc',
  BUTTON: 'item_detail__button',
};
const ITEM_TEXT_BACK = 'Назад...';

export default class ItemDetailView extends ItemView {
  configureView() {
    this.viewElementCreator.setElementClass([CssClasses.CONTAINER, CssClasses.CONTAINER_DETAIL]);

    const imgParams = {
      tag: 'div',
      classNames: [CssClasses.DETAIL_IMG],
      textContent: '',
      callback: this.showPopUp.bind(this, new ItemPopUp()),
    };
    const creatorImg = new ElementCreator(imgParams);
    this.viewElementCreator.addInsideElement(creatorImg);

    const nameItemParams = {
      tag: 'p',
      classNames: [CssClasses.DETAIL_NAME],
      textContent: 'Item name',
      callback: null,
    };
    const creatorNameItem = new ElementCreator(nameItemParams);
    this.viewElementCreator.addInsideElement(creatorNameItem);

    const descParams = {
      tag: 'p',
      classNames: [CssClasses.DETAIL_DESC],
      textContent: 'Item description',
      callback: null,
    };
    const creatorDesc = new ElementCreator(descParams);
    this.viewElementCreator.addInsideElement(creatorDesc);

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

    const buttonParams = {
      tag: 'button',
      classNames: [CssClasses.BUTTON],
      textContent: ITEM_TEXT_BACK,
      callback: this.buttonClickHandler.bind(this, `${Pages.CATALOG}`),
    };
    const creatorButton = new ElementCreator(buttonParams);
    this.viewElementCreator.addInsideElement(creatorButton);
  }

  showPopUp(view: View) {
    const element = view.getHtmlElement();
    this.viewElementCreator.addInsideElement(element);
  }
}