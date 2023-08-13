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
        callback: Function | null}){
        this.element = null;
        this.elementCreator(parameters);
    }

    elementCreator(parameters: {tag: string,
            classNames: Array<string>,
            textContent: string,
            callback: Function | null}){
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

    setCallBack(callback: Function | null){
        this.element?.addEventListener("click", function(event){
            if (callback) {
                callback(event);
            }
        });
    }

    insertElem(ins_element: HTMLElement){
        this.element?.append(ins_element);
        return this.element;
    }

    getElement() {
        return this.element;
    }
}