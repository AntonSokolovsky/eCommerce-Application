import './style.css';
import View from '../view';
import LogInVindowView from '../log-in/logInView/logInWindow';
import Router from '../../app/router/router';

export default class LogInView extends View {
  constructor(mainComponent: Router) {
    const params = {
      tag: 'div',
      classNames: ['logInregView'],
    };
    super(params);
    this.configureView(mainComponent);
  }

  configureView(mainComponent: Router) {
    const LogInWindowView = new LogInVindowView(mainComponent);
    this.viewElementCreator.addInsideElement(LogInWindowView.getHtmlElement());
  }
}