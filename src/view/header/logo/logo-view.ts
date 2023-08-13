import './logo.css';
import View from '../../view';

export default class LogoView extends View {
  constructor() {
    const params = {
      tag: 'h1',
      classNames: ['logo'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    this.viewElementCreator.setTextContent('AVA');
  }
}