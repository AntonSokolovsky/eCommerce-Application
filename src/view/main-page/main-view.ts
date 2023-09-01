import './main.css';
import View from '../view';

export default class MainView extends View {
  constructor() {
    const params = {
      tag: 'main',
      classNames: ['main'],
    };
    super(params);
  }
  
  setContent(view: View) {
    const element = view.getHtmlElement();
    const currentElement = this.viewElementCreator.getElement();

    while (currentElement.firstElementChild) {
      currentElement.firstElementChild.remove();
    }

    this.viewElementCreator.addInsideElement(element);
  }
}