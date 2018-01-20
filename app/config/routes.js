// Routes file for React Router V3

import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import ExploreContainer from '../containers/ExploreContainer';
import DetailContainer from '../containers/DetailContainer';
import HomeContainer from '../containers/HomeContainer';
import SearchContainer from '../containers/SearchContainer';
import Main from '../components/Main';


class Routes extends React.Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path='/' component={Main}>
            <IndexRoute component={HomeContainer} />
            <Route path='explore/tv' type = 'tv' component={ExploreContainer} />
            <Route path='explore/movie' type = 'movie' component={ExploreContainer} />
            <Route name="detail" path='detail/:type/:id' component={DetailContainer}/>
            <Route path='search' component={SearchContainer}/>
          </Route>
        </Router>
          )
        }
}

export default Routes;
