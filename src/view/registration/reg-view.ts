import './style.css';
import View from '../view';
import RgVindowView from '../registration/RegisterWindow/regVindow_view';

export default class RegView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['logInregView'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const registerWindowView = new RgVindowView();
    this.viewElementCreator.addInsideElement(registerWindowView.getHtmlElement());
  }
}