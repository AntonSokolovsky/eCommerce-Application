import './app.css';
import HeaderView from '../view/header/header-view';
import MainView from '../view/main-page/main-view';
import FooterView from '../view/footer/footer-view';

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const header = new HeaderView();
    const main = new MainView();
    const footer = new FooterView();

    document.body.append(header.getHtmlElement(), main.getHtmlElement(), footer.getHtmlElement());
  }
}