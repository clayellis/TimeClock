var UsersGrid = require('./users-grid');
var CreateCard = require('./createCard')
var Footer = require('./footer')
var mongoose = require('mongoose')

var options = {
    usersInfo: [{
        username: 'Clay Ellis'
    },{
        username: 'Joey Nelson'
    }],
};

var element = React.createElement(Footer, options);
React.render(element, document.querySelector('.container'));
