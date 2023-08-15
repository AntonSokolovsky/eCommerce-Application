import './style.css';
import { Attributes, InputElementParams } from '../../type/params-element-type';
import { ElementCreator } from '../element-creator';

export class InputElementCreator extends ElementCreator {
  private _InputElement: null | HTMLInputElement;

  constructor(params: InputElementParams) {
    super(params);
    this._InputElement = null;
    this.addValue(params.type);
  }

  addValue(value: string) {
    this._InputElement = this._element as HTMLInputElement;
    this._InputElement.type = value;
  }

  getInputElement() {
    if (!this._InputElement) {
      throw new Error('InputElement not defined');
    }
    return this._InputElement;
  }
}