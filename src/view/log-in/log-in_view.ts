import View from '../../view/view';

const parameters = [
    // log_in:
    {
        tag:  'div',
        classNames: ['log_in_CSS'],
    },
    // Log_in_text:
    {
        tag: 'span',
        classNames: ['Log_in_text_CSS'],
        textContent: "Log In",
    },
    // mail_input:
    {
        tag: 'input',
        classNames: ['mail_input_CSS'],
    },
    // password_input:
    {
        tag: 'input',
        classNames: ['password_input_CSS'],
    },
    // email_text:
    {
        tag: 'span',
        classNames: ['email_text_CSS'],
        textContent: "telephone or Email",
    },
    // password_text:
    {
        tag: 'span',
        classNames: ['password_text_CSS'],
        textContent: "Password",
    },
    // sign_in_button:
    {
        tag: 'button',
        classNames: ['button_CSS'],
        textContent: "Sign In",
    },
    // forgot_btn_text:
    {
        tag: 'span',
        classNames: ['forgot_btn_text_CSS'],
        textContent: "forgot a password",
    },
    // createAcc_btn_text:
    {
        tag: 'span',
        classNames: ['createAcc_btn_text_CSS'],
        textContent: "create an account",
    },
]

export default class log_in_View extends View {
    result: void;
    constructor() {
        super(parameters[0]);
        this.result = this.merging();
    }

    merging() {
        for (let i = 1; i < parameters.length; i++) {
            const temp = new View(parameters[i]);
            
        }
        
    }
}