import View from '../../view/view';
import '../log-in/style.css';

const parameters = [
    // log_in:
    {
        tag:  'main',
        classNames: ['log_in_CSS'],
        textContent: '',
        callback: null,
    },
    // Log_in_text:
    {
        tag: 'span',
        classNames: ['Log_in_text_CSS'],
        textContent: "Log In",
        callback: null,
    },
    // mail_input:
    {
        tag: 'input',
        classNames: ['mail_input_CSS'],
        textContent: '',
        callback: null,
    },
    // password_input:
    {
        tag: 'input',
        classNames: ['password_input_CSS'],
        textContent: '',
        callback: null,
    },
    // email_text:
    {
        tag: 'span',
        classNames: ['email_text_CSS'],
        textContent: "telephone or Email",
        callback: null,
    },
    // password_text:
    {
        tag: 'span',
        classNames: ['password_text_CSS'],
        textContent: "Password",
        callback: null,
    },
    // sign_in_button:
    {
        tag: 'button',
        classNames: ['button_CSS'],
        textContent: "Sign In",
        callback: null,
    },
    // forgot_btn_text:
    {
        tag: 'span',
        classNames: ['forgot_btn_text_CSS'],
        textContent: "forgot a password",
        callback: null,
    },
    // createAcc_btn_text:
    {
        tag: 'span',
        classNames: ['createAcc_btn_text_CSS'],
        textContent: "create an account",
        callback: null,
    },
]

export default class log_in_View {
    result_login_view: null | HTMLElement;
    constructor() {
        const element = new View(parameters[0]);
        this.result_login_view = element.createView(parameters[0]) as HTMLElement;
    }

    merging() {
        for (let i = 1; i < parameters.length; i++) {
            let view_to_insert = new View(parameters[i]);
            let elem_to_insert = view_to_insert.createView(parameters[i]) as HTMLElement;
            this.result_login_view?.appendChild(elem_to_insert);
        }
        return this.result_login_view;
    }
}