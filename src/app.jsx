var UsersGrid = require('./users-grid');
var CreateCard = require('./createCard')

var options = {
    usersInfo: [{
        username: 'Clay Ellis'
    },{
        username: 'Joey Nelson'
    }]
};

var element = React.createElement(UsersGrid, options);
React.render(element, document.querySelector('.container'));
