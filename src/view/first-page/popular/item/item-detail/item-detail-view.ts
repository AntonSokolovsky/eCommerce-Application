import './item-detail.css';
import { Pages } from '../../../../../app/router/pages';
import { ElementCreator } from '../../../../../utilities/element-creator';
import ItemPopUp from '../item-popUp/item-popUp-view';
import View from '../../../../view';
import Router from '../../../../../app/router/router';
import { MyCartChangeLineItemQuantityAction, ProductProjection } from '@commercetools/platform-sdk';
import { Customer } from '../../../../../app/loader/customer';
import { itemsMap } from '../../../../../app/state/state';
import { ModalWindowRequest } from '../../../../modal-window-response-view/modal-window-request';
import { MessagesModalWindow } from '../../../../../type/messages-modal';
import { Mediator } from '../../../../../app/controller/mediator';
import { MyEnumCartAction, UpdateQuantityParams } from '../../../../../type/basket-type';


const CssClasses = {
  CONTAINER: 'item',
  CONTAINER_DETAIL: 'item_detail',
  DETAIL_IMG: 'item_detail__img',
  DETAIL_NAME: 'item_detail__name',
  DETAIL_DESC: 'item_detail__desc',
  BUTTON: 'item_detail__button',
};
const ITEM_TEXT_BACK = 'Назад...';

export default class ItemDetailView extends View {
  router: Router;

  private mediator = Mediator.getInstance();

  constructor(router: Router, paramItem: ProductProjection, id: number) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.CONTAINER, CssClasses.CONTAINER_DETAIL],
    };
    super(params);
    this.configureView(paramItem, id);
    this.router = router;
  }

  configureView(paramItem: ProductProjection, id: number) {
    const customer = new Customer();

    const imgParams = {
      tag: 'div',
      classNames: [CssClasses.DETAIL_IMG],
      textContent: '',
      callback: this.showPopUp.bind(this, new ItemPopUp(paramItem)),
    };
    const creatorImg = new ElementCreator(imgParams);
    if (paramItem.masterVariant.images) {
      creatorImg.setAttributeElement({ style: `background-image: url('${paramItem.masterVariant.images[0].url}')` });
    }
    this.viewElementCreator.addInsideElement(creatorImg);

    const nameItemParams = {
      tag: 'p',
      classNames: [CssClasses.DETAIL_NAME],
      textContent: paramItem.name['en-US'],
      callback: null,
    };
    const creatorNameItem = new ElementCreator(nameItemParams);
    this.viewElementCreator.addInsideElement(creatorNameItem);

    let descParams;
    if (paramItem.description) {
      descParams = {
        tag: 'p',
        classNames: [CssClasses.DETAIL_DESC],
        textContent: paramItem.description['en-US'],
        callback: null,
      };
    } else {
      descParams = {
        tag: 'p',
        classNames: [CssClasses.DETAIL_DESC],
        textContent: '',
        callback: null,
      };
    }
    const creatorDesc = new ElementCreator(descParams);
    this.viewElementCreator.addInsideElement(creatorDesc);

    const paramsToolbar = {
      tag: 'div',
      classNames: ['item__toolbar'],
      textContent: '',
      callback: null,
    };
    const creatorToolbar = new ElementCreator(paramsToolbar);
    this.viewElementCreator.addInsideElement(creatorToolbar);

    const paramsPricesCont = {
      tag: 'div',
      classNames: ['item__prices-container'],
      textContent: '',
      callback: null,
    };
    const creatorPricesCont = new ElementCreator(paramsPricesCont);
    creatorToolbar.addInsideElement(creatorPricesCont);

    let paramsPrice;
    if (paramItem.masterVariant.prices) {
      paramsPrice = {
        tag: 'div',
        classNames: ['item__price'],
        textContent: `${paramItem.masterVariant.prices[0].value.centAmount / 100}$`,
        callback: null,
      };
    } else {
      paramsPrice = {
        tag: 'div',
        classNames: ['item__price'],
        textContent: '',
        callback: null,
      };
    } 
    const creatorPrice = new ElementCreator(paramsPrice);
    creatorPricesCont.addInsideElement(creatorPrice);

    if (paramItem.masterVariant.prices && paramItem.masterVariant.prices[0].discounted) {
      const paramsDiscount = {
        tag: 'div',
        classNames: ['item__discount'],
        textContent: `${paramItem.masterVariant.prices[0].discounted.value.centAmount / 100}$`,
        callback: null,
      };
      const creatorDiscount = new ElementCreator(paramsDiscount);
      creatorPricesCont.addInsideElement(creatorDiscount);
      
      creatorPrice.setAttributeElement({ style: 'text-decoration: line-through; font-size: 16px;' });
    }

    const paramsBasket = {
      tag: 'div',
      classNames: ['item__basket'],
      textContent: '',
      callback: (e: Event) => {
        const target = e.target;
        if (target && target instanceof Element) {
          if (target.classList.contains('basket_selected')) {
            target.classList.remove('basket_selected');
            customer.getUserCart()
              .then((data) => {
                data.body.results[0].lineItems.forEach(item => {
                  if (item.name['en-US'] === paramItem.name['en-US']) {
                    const paramsAmountUpdate: UpdateQuantityParams = {
                      body: {
                        version: data.body.results[0].version,
                        actions: [<MyCartChangeLineItemQuantityAction>{
                          action: MyEnumCartAction.MyCartChangeLineItemQuantityAction,
                          lineItemId: item.id,
                          quantity: 0,
                        }],
                      },
                    };
                    customer.updateAmountItemBasket(paramsAmountUpdate, data.body.results[0].id)
                      .then(() => {
                        const message = `${paramItem.name['en-US']} ${MessagesModalWindow.PRODUCT_DELETE_CART_SUCCESS}`;
                        this.mediator.updateBasket();
                        this.showModalWindow(message);
                        customer.getUserCart();
                      });
                  }
                });
              });
          } else {
            target.classList.add('basket_selected');
            customer.getUserCart()
              .then((data) => {
                if (data.body.results.length === 0) {
                  customer.createUserCart()
                    .then(() => {
                      // alert('Создал!');
                      customer.getUserCart()
                        .then((d) => {
                          if (target && target instanceof Element) {
                            customer.addItemInCartByID(itemsMap.get(Number(target.id)), d.body.results[0].id, d.body.results[0].version)
                              .then(() => {
                                const message = `${paramItem.name['en-US']} ${MessagesModalWindow.PRODUCT_ADD_CART_SUCCESS}`;
                                this.mediator.updateBasket();
                                this.showModalWindow(message);
                              });
                          }
                        });
                    });
                } else {
                  if (target && target instanceof Element) {
                    customer.addItemInCartByID(itemsMap.get(Number(target.id)), data.body.results[0].id, data.body.results[0].version)
                      .then(() => {
                        const message = `${paramItem.name['en-US']} ${MessagesModalWindow.PRODUCT_ADD_CART_SUCCESS}`;
                        this.mediator.updateBasket();
                        this.showModalWindow(message);
                        customer.getUserCart();
                      });
                  }
                }
              });
          }
        }
      },
    };
    const creatorBasket = new ElementCreator(paramsBasket);
    creatorBasket.setAttributeElement({ id: String(id) });
    customer.getUserCart()
      .then((data) => {
        data.body.results[0].lineItems.forEach(item => {
          if (item.name['en-US'] === paramItem.name['en-US']) {
            creatorBasket.setElementClass(['basket_selected']);
          }
        });
      });
    creatorToolbar.addInsideElement(creatorBasket);

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

  buttonClickHandler(url: string) {
    this.router.navigate(url);
  }

  showModalWindow(message: string) {
    const modalWindow = new ModalWindowRequest(message);
    return modalWindow;
  }
}