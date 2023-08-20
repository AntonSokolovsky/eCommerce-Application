import './not-found.css';
import View from '../view';

export default class NotFoundView extends View {
  constructor() {
    const params = {
      tag: 'section',
      classNames: ['not-found'],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    this.viewElementCreator.setTextContent('Ошибка 404');
  }
}