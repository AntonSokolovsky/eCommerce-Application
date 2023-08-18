import './main.css';
import View from '../view';
import CarouselView from './carousel/carousel-view';
import PopularView from './popular/popular-view';


export default class MainView extends View {
  constructor() {
    const params = {
      tag: 'main',
      classNames: ['main'],
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