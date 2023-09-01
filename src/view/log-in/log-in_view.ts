import './style.css';
import View from '../view';
import LogInVindowView from '../log-in/logInView/logInWindow';
import Router from '../../app/router/router';

export default class LogInView extends View {
  constructor(router: Router) {
    const params = {
      tag: 'div',
      classNames: ['logInregView'],
    };
    super(params);
    this.configureView(router);
  }

  configureView(router: Router) {
    const LogInWindowView = new LogInVindowView(router);
    this.viewElementCreator.addInsideElement(LogInWindowView.getHtmlElement());
  }
}