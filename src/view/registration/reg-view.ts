import './style.css';
import View from '../view';
import RgVindowView from '../registration/RegisterWindow/regVindow_view';
import Router from '../../app/router/router';

export default class RegView extends View {
  constructor(router: Router) {
    const params = {
      tag: 'div',
      classNames: ['logInregView'],
    };
    super(params);
    this.configureView(router);
  }

  configureView(router: Router) {
    const registerWindowView = new RgVindowView(router);
    this.viewElementCreator.addInsideElement(registerWindowView.getHtmlElement());
  }
}