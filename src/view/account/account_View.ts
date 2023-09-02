import './style.css';
import View from '../view';
import AccountVindowView from '../account/accountVindowView/accountVindow_View';
// import Router from '../../app/router/router';

export default class AccountView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['AccountView'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const accountWindowView = new AccountVindowView();
    this.viewElementCreator.addInsideElement(accountWindowView.getHtmlElement());
  }
}