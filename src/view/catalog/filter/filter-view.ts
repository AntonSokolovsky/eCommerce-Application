import styles from './filter-view.module.css';
import View from '../../view';
import { ElementParams, ViewParams } from '../../../type/params-element-type';
import { Customer } from '../../../app/loader/customer';
import { ElementCreator } from '../../../utilities/element-creator';
import { Mediator } from '../../../app/controller/mediator';
import { AttributeEnumType, ProductType } from '@commercetools/platform-sdk';
import { MyAttributeType } from '../../../type/products-type';

const TEXT = {
  title: 'Filter',
};

export class FilterView extends View {
  private checkboxes;

  private loader;

  private mediator = Mediator.getInstance();

  constructor() {
    const params: ViewParams = {
      tag: 'section',
      classNames: [styles['section-filter']],
    };
    super(params);
    this.checkboxes = new Map<string, HTMLElement>();
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
        const type: MyAttributeType = attribute.type as AttributeEnumType;
        
        type.values.forEach((value) => {
          const attributeValue = value.label;

          const elementFilter = this.getItemFilters(attributeValue);
          elementFilter[1].addInsideElement(elementFilter[0].getElement());
          elementFilter[2].addInsideElement(elementFilter[1].getElement());
          listItems.addInsideElement(elementFilter[2]);
          this.checkboxes.set(attribute.name, elementFilter[0].getElement());
        });
      });
    });
    this.viewElementCreator.addInsideElement(listItems.getElement());
  }

  getItemFilters(attributeName: string): ElementCreator[] {
    const elementFilterParams: ElementParams = {
      tag: 'input',
      classNames: [styles.filter__checkbox],
      textContent: '',
      callback: null,
    };

    const itemFilterParams: ElementParams = {
      tag: 'li',
      classNames: [styles.filter__item],
      textContent: '',
      callback: null,
    };

    const labelFilterParams: ElementParams = {
      tag: 'label',
      classNames: [styles.filter__label],
      textContent: `${attributeName}`,
      callback: null,
    };

    const creatorLabelFilter = new ElementCreator(labelFilterParams);
    const creatorItemFilter = new ElementCreator(itemFilterParams);
    const creatorElementFilter = new ElementCreator(elementFilterParams);
    creatorElementFilter.setAttributeElement({ 'type': 'checkbox' });
    return [creatorElementFilter, creatorLabelFilter, creatorItemFilter];
  }

  handleCheckbox() {
  }
}