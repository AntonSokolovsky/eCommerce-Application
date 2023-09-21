import { Cart, LineItem } from '@commercetools/platform-sdk';
import View from '../../../view';
import styles from './item-basket-view.module.css';
import { ElementParams, ViewParams } from '../../../../type/params-element-type';
import { ElementCreator } from '../../../../utilities/element-creator';
import { AmountItemView } from './amount-item-view/amount-item-view';
import { CurrencySymbols } from '../../../../type/enum-currencies';

const TEXT = {
  price: 'by price',
  total: 'total with discount',
};

export class ItemBasketView extends View {

  private cart: Cart;
  
  constructor(itemBasketParams: LineItem, cart: Cart) {
    const params: ViewParams = {
      tag: 'li',
      classNames: [styles['item-basket__container']],
    };
    super(params);

    this.cart = cart;
    this.configureView(itemBasketParams);
  }
  
  configureView(itemBasketParams: LineItem) {
    const imageItemBasketParams: ElementParams = {
      tag: 'img',
      classNames: [styles['item-basket__image']],
      textContent: '',
      callback: null,
    };
    const creatorImageItemBasket = new ElementCreator(imageItemBasketParams);
    const imageUrl = itemBasketParams.variant.images
      ? itemBasketParams.variant.images[0].url
      : '../../../assets/image-coming-soon.jpg';
    creatorImageItemBasket.setAttributeElement({
      'src': `${imageUrl}`,
      'alt': `Very awesome photo of ${itemBasketParams.name['en-US']}`,
    });
    this.viewElementCreator.addInsideElement(creatorImageItemBasket);

    const nameItemBasketParams: ElementParams = {
      tag: 'p',
      classNames: [styles['item-basket__title']],
      textContent: itemBasketParams.name['en-US'],
      callback: null,
    };
    const creatorNameItemBasket = new ElementCreator(nameItemBasketParams);
    this.viewElementCreator.addInsideElement(creatorNameItemBasket);

    const priceItemBasketParams: ElementParams = {
      tag: 'p',
      classNames: [styles['item-basket__price']],
      textContent: `${TEXT.price} ${itemBasketParams.price.value.centAmount / 100} ${CurrencySymbols.EUR}`,
      callback: null,
    };
    const creatorPriceItemBasket = new ElementCreator(priceItemBasketParams);
    this.viewElementCreator.addInsideElement(creatorPriceItemBasket);

    const amountItem = new AmountItemView(itemBasketParams, this.cart);
    this.viewElementCreator.addInsideElement(amountItem.getHtmlElement());

    const totalItemPriceParams: ElementParams = {
      tag: 'p',
      classNames: [styles['item-basket__total-price']],
      textContent: `${TEXT.total} ${itemBasketParams.totalPrice.centAmount / 100} ${CurrencySymbols.EUR}`,
      callback: null,
    };
    const creatorTotalItemPrice = new ElementCreator(totalItemPriceParams);
    this.viewElementCreator.addInsideElement(creatorTotalItemPrice);
  }
}