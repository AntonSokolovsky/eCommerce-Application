import styles from './filter-view.module.css';
import View from '../../view';
import { ElementParams, ViewParams } from '../../../type/params-element-type';
import { Customer } from '../../../app/loader/customer';
import { ElementCreator } from '../../../utilities/element-creator';
import { Mediator } from '../../../app/controller/mediator';
import { AttributeDefinition,
  AttributeEnumType,
  AttributePlainEnumValue,
  ProductProjectionPagedSearchResponse,
  ProductType } from '@commercetools/platform-sdk';
import { CheckboxElementWithNameAttribute, MyAttributeType } from '../../../type/products-type';
import { MessagesModalWindow } from '../../../type/messages-modal';
import { ModalWindowRequest } from '../../modal-window-response-view/modal-window-request';
import { CustomEventNames } from '../../../type/mediator-type';

const TEXT = {
  title: 'Filter',
};

export class FilterView extends View {
  private checkboxes: CheckboxElementWithNameAttribute[];

  private loader;

  private mediator = Mediator.getInstance();

  constructor() {
    const params: ViewParams = {
      tag: 'section',
      classNames: [styles['section-filter']],
    };
    super(params);
    this.checkboxes = [];
    this.loader = new Customer;
    this.configureView();
  }

  configureView() {
    const titleFilterParams: ElementParams = {
      tag: 'h3',
      classNames: [styles.filter__title],
      textContent: TEXT.title,
      callback: null,
    };

    const creatorTitleFilter = new ElementCreator(titleFilterParams);
    this.viewElementCreator.addInsideElement(creatorTitleFilter);
    this.addFilter();
  }

  getListFilter() {
    const listItemsParams: ElementParams = {
      tag: 'ul',
      classNames: [styles.filter__list],
      textContent: '',
      callback: null,
    };

    const creatorListItems = new ElementCreator(listItemsParams);
    return creatorListItems;
  }

  async addFilter() {
    const listItems = this.getListFilter();
    const productTypes: ProductType[] = (await this.loader.getAttributes()).body.results;
    productTypes.forEach((productType) => {
      productType.attributes?.forEach((attribute) => {
        const subItemListParams: ElementParams = {
          tag: 'li',
          classNames: [styles.filter__subitem],
          textContent: '',
          callback: null,
        };
        const creatorSubItemList = new ElementCreator(subItemListParams);
        listItems.addInsideElement(creatorSubItemList);

        const titleSubListParams: ElementParams = {
          tag: 'h3',
          classNames: [styles.filter__subtitle],
          textContent: `${attribute.label['en-US']}`,
          callback: null,
        };
        const creatorTitleSublist = new ElementCreator(titleSubListParams);
        creatorSubItemList.addInsideElement(creatorTitleSublist);

        const subListParams: ElementParams = {
          tag: 'form',
          classNames: [styles.filter__sublist],
          textContent: '',
          callback: null,
        };
        const creatorSubList = new ElementCreator(subListParams);
        creatorSubItemList.addInsideElement(creatorSubList);
        const type: MyAttributeType = attribute.type as AttributeEnumType;
        type.values.forEach((value) => {
          const elementFilter = this.getItemFilters(value, attribute);
          elementFilter[1].addInsideElement(elementFilter[0]);
          elementFilter[2].addInsideElement(elementFilter[1]);
          creatorSubList.addInsideElement(elementFilter[2]);

          this.checkboxes.push([attribute.name, elementFilter[0].getElement() as HTMLInputElement]);
        });
      });
    });
    this.viewElementCreator.addInsideElement(listItems.getElement());
  }

  getItemFilters(value: AttributePlainEnumValue, attribute: AttributeDefinition): ElementCreator[] {
    const elementFilterParams: ElementParams = {
      tag: 'input',
      classNames: [styles.filter__checkbox],
      textContent: '',
      callback: (event) => this.handleCheckbox(event),
    };

    const itemFilterParams: ElementParams = {
      tag: 'div',
      classNames: [styles.filter__item],
      textContent: '',
      callback: null,
    };

    const labelFilterParams: ElementParams = {
      tag: 'label',
      classNames: [styles.filter__label],
      textContent: `${value.label}`,
      callback: null,
    };

    const creatorLabelFilter = new ElementCreator(labelFilterParams);
    const creatorItemFilter = new ElementCreator(itemFilterParams);
    const creatorElementFilter = new ElementCreator(elementFilterParams);
    creatorElementFilter.setAttributeElement({
      'type': 'checkbox',
      'value': `${value.key}`,
      'name': `${attribute.label['en-US']}`,
    });
    return [creatorElementFilter, creatorLabelFilter, creatorItemFilter];
  }

  async handleCheckbox(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      const listFilterParams = new Map<string, Set<HTMLElement>>();
      this.checkboxes.forEach((checkbox) => {
        if (checkbox[1].checked) {
          let  listValueAttributes = listFilterParams.get(checkbox[0]);
          if (!listValueAttributes) {
            listValueAttributes = new Set<HTMLElement>();
      
            listFilterParams.set(checkbox[0], listValueAttributes);
          }
          listValueAttributes.add(checkbox[1]);
        }
      });
      this.loader.getProductsWithOptions(listFilterParams)
        .then((data) => this.handleSuccessResponseFilter(data.body))
        .catch(() => this.handleErrorResponse());
    }
  }

  async handleSuccessResponseFilter(body: ProductProjectionPagedSearchResponse) {
    this.mediator.showProductsByFilter(CustomEventNames.PRODUCTS_FILTER, { productsProjection: body });
  }

  handleErrorResponse() {
    const errorMessage = MessagesModalWindow.PRODUCTS_FILTER_ERROR_MESSAGE;
    this.showModalWindow(errorMessage);
  }
  
  showModalWindow(message: string) {
    const modalWindow = new ModalWindowRequest(message);
    return modalWindow;
  }
}
