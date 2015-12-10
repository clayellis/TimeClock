var TestButton = require('./button');

var options = {
    title: 'If you see me...'
};

var element = React.createElement(TestButton, options);
React.render(element, document.querySelector('.container'));
