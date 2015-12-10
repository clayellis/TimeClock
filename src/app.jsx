var CreateCard = require('./createCard')

var options = {
    usersInfo: [{
        username: 'Clay Ellis'
    },{
        username: 'Joey Nelson'
    }]
};

var element = React.createElement(CreateCard, options);
React.render(element, document.querySelector('.container'));
