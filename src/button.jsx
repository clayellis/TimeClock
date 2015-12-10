var React = require('react');

module.exports = React.createClass({
    handleClick: function() {
        console.log('We\'re up!')
    },
    render: function() {
        return <button onClick={this.handleClick} className="btn btn-default" type="button">
            {this.props.title}
        </button>
    }
});
