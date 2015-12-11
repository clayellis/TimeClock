var React = require('react');
var UserCard = require('./user-card');
var CreateCard = require('./create-card');

module.exports = React.createClass({

    getInitialState() {
      return {
        usersInfo: [
          {
            username: 'Clay Ellis'
          },{
              username: 'Joey Nelson'
          }]
      }
    },

    render: function() {
        var usercards = this.state.usersInfo.map(function(userProps) {
            return <UserCard {...userProps} />
        });

        return <div>
            {usercards}
            <CreateCard />
        </div>
    }
});
