import './first.css';
import View from '../view';
import CarouselView from './carousel/carousel-view';
import PopularView from './popular/popular-view';


export default class FirstPageView extends View {
  constructor() {
    const params = {
      tag: 'section',
      classNames: ['section', 'section-first-page'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const carouselView = new CarouselView();
    this.viewElementCreator.addInsideElement(carouselView.getHtmlElement());
    const popularView = new PopularView();
    this.viewElementCreator.addInsideElement(popularView.getHtmlElement());
  }
}