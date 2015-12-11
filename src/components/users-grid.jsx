var React = require('react');
var UserCard = require('./user-card');
var CreateCard = require('./create-card');

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
