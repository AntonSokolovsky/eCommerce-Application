import { ElementParams, ViewParams } from '../type/params-element-type';
import { ElementCreator } from '../utilities/element-creator';

export default class View {
  protected viewElementCreator:ElementCreator;

  
  constructor(params: ViewParams = { tag: 'section', classNames: [] }) {
    this.viewElementCreator = this.createView(params);
  }
  
  getHtmlElement():HTMLElement {
    return this.viewElementCreator.getElement();
  }
 
  createView(params: ViewParams):ElementCreator {
    const elementParams: ElementParams = {
      tag: params.tag,
      classNames: params.classNames,
      textContent: '',
      callback: null,
    };
    this.viewElementCreator = new ElementCreator(elementParams);
  
    return this.viewElementCreator;
  }
}