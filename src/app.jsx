var UsersGrid = require('./users-grid');
var Report = require('./report')

var options = {
    usersInfo: [{
        username: 'Clay Ellis'
    },{
        username: 'Joey Nelson'
    }],

    reportInfo: [{
      name: 'Johnny Cage',
      totalHours: 10.5,
      number: 1
    },{
      name: 'Angus Stone',
      totalHours: 42.0,
      number: 2
    },{
      name: 'Ford Prefect',
      totalHours: 32.6,
      number: 3
    }]
};

var element = React.createElement(Report, options);
React.render(element, document.querySelector('.container'));
