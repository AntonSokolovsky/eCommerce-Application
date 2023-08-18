import './style.css';
import View from '../view';
import LogInVindowView from '../log-in/logInView/logInWindow';

export default class LogInView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: ['logInregView'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    const LogInWindowView = new LogInVindowView();
    this.viewElementCreator.addInsideElement(LogInWindowView.getHtmlElement());
  }
}