import createElement from '../utilities/elem-creator';

export default class View {
    viewElement: createElement | null;
    constructor(params : { tag: string, classNames: Array<string> }, textContent?: string, callback?: Function | null) {
        this.createView(params);
        this.viewElement = null;
    }

    createView(params : { tag: string, classNames: Array<string> }, textContent: string = '', callback?: Function | null) {
        let content: string;
        if (textContent !== '') {
            content = textContent;
        } else {
            content = '';
        }
        const func: Function | null = (callback) ? callback: null;
        const elementParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: content,
            callback: func,
        }
        this.viewElement = new createElement(elementParams);
        
        return this.viewElement.getElement();
    }
}