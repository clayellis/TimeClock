var UsersGrid = require('./users-grid');
var CreateCard = require('./createCard')
var mongoose = require('mongoose')

var options = {
    usersInfo: [{
        username: 'Clay Ellis'
    },{
        username: 'Joey Nelson'
    }],

    title: 'johnny'
};

var element = React.createElement(UsersGrid, options);
React.render(element, document.querySelector('.container'));
