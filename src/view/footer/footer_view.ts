import View from '../../view/view';

const parameters = [
    // log_in:
    {
        tag:  'footer',
        classNames: ['footer_CSS'],
        textContent: '',
        callback: null,
    },
    {
        tag:  'span',
        classNames: ['catalog_f_CSS'],
        textContent: 'Catalog',
        callback: null,
    },
    // Log_in_text:
    {
        tag: 'span',
        classNames: ['contacts_f_CSS'],
        textContent: "Contacts",
        callback: null,
    },
    // mail_input:
    {
        tag: 'span',
        classNames: ['About_input_CSS'],
        textContent: 'About Us',
        callback: null,
    },
    // password_input:
    {
        tag: 'Span',
        classNames: ['AVA_logo_CSS'],
        textContent: 'AVA',
        callback: null,
    },
    // email_text:
    {
        tag: 'div',
        classNames: ['tik_tok_icon_CSS'],
        textContent: "",
        callback: null,
    },
    // password_text:
    {
        tag: 'div',
        classNames: ['vk_icon_CSS'],
        textContent: "",
        callback: null,
    },
    // sign_in_button:
    {
        tag: 'div',
        classNames: ['telegram_icon_CSS'],
        textContent: "",
        callback: null,
    },
    // forgot_btn_text:
    {
        tag: 'div',
        classNames: ['youtube_icon_CSS'],
        textContent: "",
        callback: null,
    },
    // createAcc_btn_text:
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