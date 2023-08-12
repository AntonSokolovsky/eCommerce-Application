import createElement from '../utilities/index';

export default class View {
    viewElement: createElement;
    constructor(params : { tag: string, classNames: Array<string> }) {
        this.viewElement = this.createView(params);
    }

    createView(params : { tag: string, classNames: Array<string> }) {
        const elementParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: '',
            callback: function() {
                return;
            },
        }
        this.viewElement = new createElement(elementParams);
        return this.viewElement;
    }
}