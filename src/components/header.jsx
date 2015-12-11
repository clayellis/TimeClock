var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


module.exports = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">
              <strong>Time</strong>Tracker
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbarr-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="time">Time</Link></li>
              <li><Link to="report">Report</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
