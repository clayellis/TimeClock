var React = require('react');
var UserCard = require('./user-card');
var CreateCard = require('./createCard');

module.exports = React.createClass({
    render: function() {
        var usercards = this.props.usersInfo.map(function(userProps) {
            return <UserCard {...userProps} />
        });

        return <div>
            {usercards}
            <CreateCard />
        </div>
    }
});
