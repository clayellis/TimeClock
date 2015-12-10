var TestButton = require('./button');
var CreateCard = require('./createCard')

var options = {
    title: 'If you see me...'
};

var element = React.createElement(CreateCard, options);
React.render(element, document.querySelector('.container'));
