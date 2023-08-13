import log_in_View from '../view/log-in/log-in_view';
import header_View from '../view/header/header_view';
import footer_View from '../view/footer/footer_view';

export default class App {

  constructor() {
    const footer_view = new footer_View();
    const header_view = new header_View();

    const footer_View_to_ins = footer_view.merging() as HTMLElement;
    const header_View_to_ins = header_view.merging() as HTMLElement;
    this.createViews(footer_View_to_ins, header_View_to_ins);
    this.create_Log_in_page();
  }

  createViews(header: HTMLElement, footer: HTMLElement) {
    
    // const headerView = new HeaderView();
    // const header = headerView.getHtmlElement();

    // const footerView = new FooterView();
    // const footer = footerView.getHtmlElement();

    // const mainView = new MainView();
    // const main = mainView.getHtmlElement();
    document.body.appendChild(footer);
    document.body.appendChild(header);
  }

  create_Log_in_page() {
    const log_inView = new log_in_View();
    const log_inView_to_ins = log_inView.merging() as HTMLElement;
    document.querySelector('header')?.insertAdjacentElement("afterend", log_inView_to_ins);
  }
}