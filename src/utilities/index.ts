/**
 * @typedef {{
* tag: string,
* classNames: Array<string>,
* textContent: string,
* callback: function,
* }} ElementParams
*/

export default class createElement {
    element: null | HTMLElement;
    constructor(parameters: {tag: string,
        classNames: Array<string>,
        textContent: string,
        callback: Function}){
        this.element = null;
        this.elementCreator(parameters);
    }

    elementCreator(parameters: {tag: string,
            classNames: Array<string>,
            textContent: string,
            callback: Function}){
        this.element = document.createElement(parameters.tag);
        this.setCssClasses(parameters.classNames);
        this.setTextContent(parameters.textContent);
        this.setCallBack(parameters.callback);
    }

    setCssClasses(classes: string[]){
        classes.forEach((e) => this.element?.classList.add(e));
    }

    setTextContent(text: string){
        if (this.element) {
            this.element.textContent = text;
        }
    }

    setCallBack(callback: Function){
        this.element?.addEventListener("click", (event) => callback(event));
    }

    getElement() {
        return this.element;
    }
}