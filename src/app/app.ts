
import './app.css';
import RegView from '../view/registration/reg-view';
import LogInView from '../view/log-in/log-in_view';
import HeaderView from '../view/header/header-view';
import MainView from '../view/main-page/main-view';
import FooterView from '../view/footer/footer-view';

export default class App {
  constructor() {
    // this.createRegView();
    this.createLogInView();
    // this.createView();
  }
  createLogInView() {
    const header = new HeaderView();
    const logIn = new LogInView();
    const footer = new FooterView();

    document.body.append(/* header.getHtmlElement(),*/ logIn.getHtmlElement()/*, footer.getHtmlElement()*/);
  }

  // createRegView() {
  //   const header = new HeaderView();
  //   const registr = new RegView();
  //   const footer = new FooterView();

  //   document.body.append(/*header.getHtmlElement(),*/ registr.getHtmlElement()/*, footer.getHtmlElement()*/);
  // }
  }

//   createView() {
//     const header = new HeaderView();
//     const main = new MainView();
//     const footer = new FooterView();

//     document.body.append(header.getHtmlElement(), main.getHtmlElement(), footer.getHtmlElement());
//   }
}