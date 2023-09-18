import styles from './empty-basket-view.module.css';
import View from '../../view';
import { ElementParams, ViewParams } from '../../../type/params-element-type';
import { ElementCreator } from '../../../utilities/element-creator';
import Router from '../../../app/router/router';
import { Pages } from '../../../app/router/pages';

const TEXT = {
  title: 'There is no meat in your cart yet',
  subtitle: 'You want to see some meat, right?',
  link: 'there\'s meat here',
};

export class EmptyBasketView extends View {

  private router: Router;
  
  constructor(router: Router) {
    const params: ViewParams = {
      tag: 'div',
      classNames: [styles.empty__container],
    };
    super(params);
    this.configureView();
    this.router = router;
  }
  
  configureView() {
    const titleEmptyBasketParams: ElementParams = {
      tag: 'h1',
      classNames: [styles.empty__title],
      textContent: TEXT.title,
      callback: null,
    };
    const creatorTitleEmptyBasket = new ElementCreator(titleEmptyBasketParams);
    this.viewElementCreator.addInsideElement(creatorTitleEmptyBasket);

    const subtitleEmptyBasketParams: ElementParams = {
      tag: 'h2',
      classNames: [styles.empty__subtitle],
      textContent: TEXT.subtitle,
      callback: null,
    };
    const creatorSubtitleEmptyBasket = new ElementCreator(subtitleEmptyBasketParams);
    this.viewElementCreator.addInsideElement(creatorSubtitleEmptyBasket);

    const linkEmptyBasketParams: ElementParams = {
      tag: 'p',
      classNames: [styles.empty__link],
      textContent: TEXT.link,
      callback: () => this.router.navigate(Pages.CATALOG),
    };
    const creatorEmptyBasketLink = new ElementCreator(linkEmptyBasketParams);
    this.viewElementCreator.addInsideElement(creatorEmptyBasketLink);
  }
}