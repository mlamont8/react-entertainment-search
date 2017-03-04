var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/home/Home');
var ExploreContainer = require('../containers/ExploreContainer')
var DetailContainer = require('../containers/DetailContainer')
var SearchContainer = require('../containers/SearchContainer')


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='explore/tv' type = 'tv' component={ExploreContainer} />
      <Route path='explore/movie' type = 'movie' component={ExploreContainer} />
      <Route name="detail" path='detail/:type/:id' component={DetailContainer}/>
      <Route path='search' component={SearchContainer}/>
    </Route>
  </Router>
);

module.exports = routes;
