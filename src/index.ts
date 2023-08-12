import createElement from '../src/utilities/index';
console.log("hello");
const param = {
    tag: 'footer',
    classNames: ['a', 'aa', 'aaa'],
    textContent: 'yes',
    callback: function() {
        return;
    }
};

const start = new createElement(param);
console.log(start.getElement());