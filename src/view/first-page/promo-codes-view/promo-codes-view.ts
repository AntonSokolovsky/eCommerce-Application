import styles from './promo-codes-view.module.css';
import View from '../../view';
import { ElementParams, ViewParams } from '../../../type/params-element-type';
import { ElementCreator } from '../../../utilities/element-creator';
import { Customer } from '../../../app/loader/customer';
import { PromoCodeView } from './promo-code-view/promo-code-view';

const TEXT = {
  title: 'Promocodes',
  subtitle: 'Make your shopping even more profitable with our promo codes',
  link: '',
};

export class PromoCodesView extends View {

  private loader: Customer;
  
  constructor() {
    const params: ViewParams = {
      tag: 'section',
      classNames: [styles.promocodes__container],
    };
    super(params);
    this.loader = new Customer();
    this.configureView();
  }
  
  async configureView() {
    const response = (await this.loader.getPromoCodeById());
    const promoCodes = response.body.results;
    const titlePromoCodesParams: ElementParams = {
      tag: 'h1',
      classNames: [styles.promocodes__title],
      textContent: TEXT.title,
      callback: null,
    };
    const creatorPromoCodes = new ElementCreator(titlePromoCodesParams);
    this.viewElementCreator.addInsideElement(creatorPromoCodes);

    const subtitlePromoCodesParams: ElementParams = {
      tag: 'h2',
      classNames: [styles.promocodes__subtitle],
      textContent: TEXT.subtitle,
      callback: null,
    };
    const creatorSubtitlePromoCodes = new ElementCreator(subtitlePromoCodesParams);
    this.viewElementCreator.addInsideElement(creatorSubtitlePromoCodes);

    const listPromoCodesParams: ElementParams = {
      tag: 'ul',
      classNames: [styles.promocodes__list],
      textContent: TEXT.link,
      callback: null,
    };
    const creatorListPromocodes = new ElementCreator(listPromoCodesParams);
    promoCodes.forEach((promoCode) => {
      const promoCodeView = new PromoCodeView(promoCode);
      creatorListPromocodes.addInsideElement(promoCodeView.getHtmlElement());
    });
    this.viewElementCreator.addInsideElement(creatorListPromocodes);
  }
}