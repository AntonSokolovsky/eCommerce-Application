import View from '../../view/view';

const parameters = [
    // log_in:
    {
        tag:  'header',
        classNames: ['header_CSS'],
        textContent: '',
        callback: null,
    },
    {
        tag:  'div',
        classNames: ['burger_CSS'],
        textContent: '',
        callback: null,
    },
    // Log_in_text:
    {
        tag: 'span',
        classNames: ['AVA_logo_CSS'],
        textContent: "AVA",
        callback: null,
    },
    // mail_input:
    {
        tag: 'div',
        classNames: ['search_CSS'],
        textContent: '',
        callback: null,
    },
    // password_input:
    {
        tag: 'div',
        classNames: ['Account_logo_CSS'],
        textContent: '',
        callback: null,
    },
    // email_text:
    {
        tag: 'div',
        classNames: ['basket_CSS'],
        textContent: "",
        callback: null,
    },
]

export default class header_View {
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