var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var UsersGrid = require('./components/users-grid');
var Report = require('./components/report')

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="time" component={UsersGrid}/>
      <Route path="report" component={Report}/>
    </Route>
  </Router>
)
