import './style.css';
import { InputElementParams } from '../../type/params-element-type';
import { ElementCreator } from '../element-creator';

export class InputElementCreator extends ElementCreator {
  private _InputElement: null | HTMLInputElement;

  constructor(params: InputElementParams) {
    super(params);
    this._InputElement = null;
    this.addValue(params.type, params.value, params.disabled);
  }

  addValue(type: string, value: string, disabled: boolean) {
    this._InputElement = this._element as HTMLInputElement;
    this._InputElement.type = type;
    this._InputElement.value = value;
    this._InputElement.disabled = disabled;
  }

  getInputElement() {
    if (!this._InputElement) {
      throw new Error('InputElement not defined');
    }
    return this._InputElement;
  }

  Callback(callback: null | ((event: Event) => void)) {
    if (!this._InputElement) {
      throw new Error('element does not exist');
    }
    if (typeof callback === 'function') {
      this._InputElement.addEventListener('input', (event) => callback(event));
    }
  }
}