import { Attributes, ElementParams } from '../type/params-element-type';

export class ElementCreator {
  protected _element: null | HTMLElement;

  constructor(params: ElementParams) {
    this._element = null;
    this.createElement(params);
  }

  createElement(params: ElementParams) {
    this._element = document.createElement(params.tag);
    this.setElementClass(params.classNames);
    this.setTextContent(params.textContent);
    this.setCallback(params.callback);
  }

  setElementClass(classNames: string[] = []): void {
    if (this._element) {
      classNames.map((e) => this._element?.classList.add(e));
    }
  }

  setTextContent(text = ''): void {
    if (this._element) {
      this._element.textContent = text;
    }
  }

  setInnerHtml(markup = ''): void {
    if (this._element) {
      this._element.insertAdjacentHTML('beforeend', `${markup}`);
    }
  }

  addInsideElement(element: HTMLElement | ElementCreator): void {
    if (!this._element) {
      throw new Error('Element does not exist');
    }
    if (element instanceof ElementCreator) {
      this._element.append(element.getElement());
    } else {
      this._element.append(element);
    }
  }

  setAttributeElement(attributes: Attributes): void {
    if (this._element) {
      Object.entries(attributes)
        .forEach((attribute: [string, string]) => {
          this._element?.setAttribute(attribute[0], attribute[1]);
        });
    }
  }

  setCallback(callback: null | ((event: Event) => void)) {
    if (!this._element) {
      throw new Error('element does not exist');
    }
    if (typeof callback === 'function') {
      this._element.addEventListener('click', (event) => callback(event));
    }
  }

  getElement() {
    if (!this._element) {
      throw new Error('element not defined');
    }
    return this._element;
  }
}
