import View from '../../view/view';
import '../registration/style.css';

const parameters = [
    // log_in:
    {
        tag:  'main',
        classNames: ['reg_CSS'],
        textContent: '',
        callback: null,
    },
    // Log_in_text:
    {
        tag: 'span',
        classNames: ['Register_text_CSS'],
        textContent: "Register",
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
    {
        tag: 'input',
        classNames: ['confrim_password_input_CSS'],
        textContent: '',
        callback: null,
    },
    // email_text:
    {
        tag: 'span',
        classNames: ['email_text_CSS'],
        textContent: "",
        callback: null,
    },
    {
        tag: 'span',
        classNames: ['telephone_text_CSS'],
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
    {
        tag: 'span',
        classNames: ['password_confrim_text_CSS'],
        textContent: "Confrim password",
        callback: null,
    },
    // sign_in_button:
    {
        tag: 'button',
        classNames: ['button_CSS'],
        textContent: "Register",
        callback: null,
    },
    // forgot_btn_text:
    {
        tag: 'span',
        classNames: ['log_in_text_CSS'],
        textContent: "log in",
        callback: null,
    },
]

export default class Register_View {
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