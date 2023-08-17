import './carousel.css';
import View from '../../view';
import { ElementCreator } from '../../../utilities/element-creator';


export default class CarouselView extends View {
  constructor() {
    const params = {
      tag: 'section',
      classNames: ['section', 'section-carousel', 'carousel'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const paramsFrame = {
      tag: 'div',
      classNames: ['carousel__frame'],
      textContent: '',
      callback: null,
    };
    const creatorFrame = new ElementCreator(paramsFrame);
    this.viewElementCreator.addInsideElement(creatorFrame);

    const paramsLine = {
      tag: 'div',
      classNames: ['carousel__line'],
      textContent: '',
      callback: null,
    };
    const creatorLine = new ElementCreator(paramsLine);
    for (let i = 1; i < 10; i += 1) {
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel__item');
      carouselItem.textContent = `${i}`;
      creatorLine.addInsideElement(carouselItem);
    }
    creatorFrame.addInsideElement(creatorLine);

    const paramsArrows = {
      tag: 'div',
      classNames: ['carousel__arrows'],
      textContent: '',
      callback: null,
    };
    const paramsArrowLeft = {
      tag: 'div',
      classNames: ['carousel__arrow', 'arrow_left'],
      textContent: 'arrow left',
      callback: null,
    };
    const paramsArrowRight = {
      tag: 'div',
      classNames: ['carousel__arrow', 'arrow_right'],
      textContent: 'arrow right',
      callback: null,
    };
    const creatorArrows = new ElementCreator(paramsArrows);
    const carouselArrowLeft = new ElementCreator(paramsArrowLeft);
    const carouselArrowRight = new ElementCreator(paramsArrowRight);
    creatorArrows.addInsideElement(carouselArrowLeft);
    creatorArrows.addInsideElement(carouselArrowRight);
    this.viewElementCreator.addInsideElement(creatorArrows);
  }
}