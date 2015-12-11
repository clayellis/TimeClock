var React = require('react');
var Header = require('./header');
var Footer = require('./footer');

module.exports = React.createClass({
  render: function() {
    return <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
  }
});
