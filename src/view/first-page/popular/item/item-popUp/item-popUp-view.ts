import './item-popUp.css';
import View from '../../../../view';
import { ElementCreator } from '../../../../../utilities/element-creator';
import { ProductProjection } from '@commercetools/platform-sdk';

const CssClasses = {
  OVERLAY: 'popUp__overlay',
  CONTAINER: 'popUp__container',
  CAROUSEL_FRAME: 'item-carousel__frame',
  CAROUSEL_LINE: 'item-carousel__line',
  CAROUSEL_IMG: 'item-carousel__img',
};

export default class ItemPopUp extends View {
  carouselLine: ElementCreator | null;

  carouselArrowLeft: ElementCreator | null;

  carouselArrowRight: ElementCreator | null;

  constructor(paramItem: ProductProjection) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.OVERLAY],
    };
    super(params);
    this.carouselLine = null;
    this.carouselArrowLeft = null;
    this.carouselArrowRight = null;
    this.configureView(paramItem);
  }

  configureView(paramItem: ProductProjection) {
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
    this.carouselLine = new ElementCreator(lineParams);
    creatorFrame.addInsideElement(this.carouselLine);

    const imgParams = {
      tag: 'div',
      classNames: [CssClasses.CAROUSEL_IMG],
      textContent: '',
      callback: null,
    };
    if (paramItem.masterVariant.images) {
      for (let i = 0; i < paramItem.masterVariant.images.length; i += 1) {
        const creatorImg = new ElementCreator(imgParams);
        creatorImg.setAttributeElement({ style: `background-image: url('${paramItem.masterVariant.images[i].url}')` });
        this.carouselLine.addInsideElement(creatorImg);
      }
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
      callback: this.moveLeft.bind(this),
    };
    const paramsArrowRight = {
      tag: 'div',
      classNames: ['carousel__arrow', 'arrow_right'],
      textContent: '>',
      callback: this.moveRight.bind(this),
    };
    const creatorArrows = new ElementCreator(paramsArrows);
    this.carouselArrowLeft = new ElementCreator(paramsArrowLeft);
    this.carouselArrowRight = new ElementCreator(paramsArrowRight);
    creatorArrows.addInsideElement(this.carouselArrowLeft);
    creatorArrows.addInsideElement(this.carouselArrowRight);
    creatorCont.addInsideElement(creatorArrows);
  }

  closePopUp() {
    this.viewElementCreator.getElement().remove();
  }

  moveRight() {
    if (this.carouselLine) {
      const position = parseInt( window.getComputedStyle(this.carouselLine.getElement()).left );
      if (position === 0 && this.carouselArrowRight && this.carouselArrowLeft) {
        this.carouselArrowLeft.setAttributeElement({ style: 'opacity: 1;' });
        this.carouselLine.setAttributeElement({ style: `left: ${position - 300}px;` });
        this.carouselArrowRight.setAttributeElement({ style: 'opacity: 0.5;' });
      }
    }
  }

  moveLeft() {
    if (this.carouselLine) {
      const position = parseInt(window.getComputedStyle(this.carouselLine.getElement()).left);
      if (position === -300 && this.carouselArrowRight && this.carouselArrowLeft) {
        this.carouselArrowRight.setAttributeElement({ style: 'opacity: 1;' });
        this.carouselArrowLeft.setAttributeElement({ style: 'opacity: 0.5;' });
        this.carouselLine.setAttributeElement({ style: `left: ${position + 300}px;` });
      }
    }
  }
}