import './first.css';
import View from '../view';
import CarouselView from './carousel/carousel-view';
import PopularView from './popular/popular-view';
import Router from '../../app/router/router';
import { PromoCodesView } from './promo-codes-view/promo-codes-view';


export default class FirstPageView extends View {
  constructor(router: Router) {
    const params = {
      tag: 'section',
      classNames: ['section', 'section-first-page'],
    };
    super(params);
    this.configureView(router);
  }

  configureView(router: Router) {
    const carouselView = new CarouselView();
    this.viewElementCreator.addInsideElement(carouselView.getHtmlElement());
    const popularView = new PopularView(router);
    this.viewElementCreator.addInsideElement(popularView.getHtmlElement());
    const promoCodesView = new PromoCodesView();
    this.viewElementCreator.addInsideElement(promoCodesView.getHtmlElement());
  }
}