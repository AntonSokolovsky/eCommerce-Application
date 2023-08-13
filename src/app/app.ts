import log_in_View from '../view/log-in/log-in_view';

export default class App {
  constructor() {
    this.createViews();
  }

  createViews() {
    const log_inView = new log_in_View();
    // const headerView = new HeaderView();
    // const header = headerView.getHtmlElement();

    // const footerView = new FooterView();
    // const footer = footerView.getHtmlElement();

    // const mainView = new MainView();
    // const main = mainView.getHtmlElement();
    console.log(log_inView);
    document.body.append();
  }
}