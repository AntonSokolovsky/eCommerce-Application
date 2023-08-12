import createElement from '../src/utilities/index';

const param = {
    tag: 'footer',
    classNames: ['a', 'aa', 'aaa'],
    textContent: 'yes',
    callback: function() {
        return;
    }
};

const start = new createElement(param);
console.log();