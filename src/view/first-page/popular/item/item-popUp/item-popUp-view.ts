import './item-popUp.css';
import View from '../../../../view';
import { ElementCreator } from '../../../../../utilities/element-creator';

const CssClasses = {
  OVERLAY: 'popUp__overlay',
  CONTAINER: 'popUp__container',
  CAROUSEL_FRAME: 'item-carousel__frame',
  CAROUSEL_LINE: 'item-carousel__line',
  CAROUSEL_IMG: 'item-carousel__img',
};

export default class ItemPopUp extends View {
  constructor(paramItem: any) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.OVERLAY],
    };
    super(params);
    this.configureView(paramItem);
  }

  configureView(paramItem: any) {
    const contParams = {
      tag: 'div',
      classNames: [CssClasses.CONTAINER],
      textContent: '',
      callback: null,
    };
    const creatorCont = new ElementCreator(contParams);
    this.viewElementCreator.addInsideElement(creatorCont);

    const closeParams = {
      tag: 'div',
      classNames: ['popUp__close'],
      textContent: '+',
      callback: this.closePopUp.bind(this),
    };
    const creatorClose = new ElementCreator(closeParams);
    creatorCont.addInsideElement(creatorClose);

    const frameParams = {
      tag: 'div',
      classNames: [CssClasses.CAROUSEL_FRAME],
      textContent: '',
      callback: null,
    };
    const creatorFrame = new ElementCreator(frameParams);
    creatorCont.addInsideElement(creatorFrame);

    const lineParams = {
      tag: 'div',
      classNames: [CssClasses.CAROUSEL_LINE],
      textContent: '',
      callback: null,
    };
    const creatorLine = new ElementCreator(lineParams);
    creatorFrame.addInsideElement(creatorLine);

    const imgParams = {
      tag: 'div',
      classNames: [CssClasses.CAROUSEL_IMG],
      textContent: '',
      callback: null,
    };
    for (let i = 0; i < paramItem.staged.masterVariant.images.length; i += 1) {
      const creatorImg = new ElementCreator(imgParams);
      creatorImg.setAttributeElement({ style: `background-image: url('${paramItem.staged.masterVariant.images[i].url}')` });

      creatorLine.addInsideElement(creatorImg);
    }

    const paramsArrows = {
      tag: 'div',
      classNames: ['carousel__arrows'],
      textContent: '',
      callback: null,
    };
    const paramsArrowLeft = {
      tag: 'div',
      classNames: ['carousel__arrow', 'arrow_left'],
      textContent: '<',
      callback: null,
    };
    const paramsArrowRight = {
      tag: 'div',
      classNames: ['carousel__arrow', 'arrow_right'],
      textContent: '>',
      callback: null,
    };
    const creatorArrows = new ElementCreator(paramsArrows);
    const carouselArrowLeft = new ElementCreator(paramsArrowLeft);
    const carouselArrowRight = new ElementCreator(paramsArrowRight);
    creatorArrows.addInsideElement(carouselArrowLeft);
    creatorArrows.addInsideElement(carouselArrowRight);
    creatorCont.addInsideElement(creatorArrows);
  }

  closePopUp() {
    this.viewElementCreator.getElement().remove();
  }
}