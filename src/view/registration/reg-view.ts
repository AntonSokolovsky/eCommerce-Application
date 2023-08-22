import './style.css';
import View from '../view';
import RgVindowView from '../registration/RegisterWindow/regVindow_view';
import Router from '../../app/router/router';

export default class RegView extends View {
  constructor(mainComponent: Router) {
    const params = {
      tag: 'div',
      classNames: ['logInregView'],
    };
    super(params);
    this.configureView(mainComponent);
  }

  configureView(mainComponent: Router) {
    const registerWindowView = new RgVindowView(mainComponent);
    this.viewElementCreator.addInsideElement(registerWindowView.getHtmlElement());
  }
}