import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import configureStore from "./store/configureStore";

// routes
import ExploreContainer from "./containers/ExploreContainer";
import DetailContainer from "./containers/DetailContainer";
import HomeContainer from "./containers/HomeContainer";
import SearchContainer from "./containers/SearchContainer";
import Main from "./components/Main";

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={HomeContainer} />
        <Route path="explore/tv" type="tv" component={ExploreContainer} />
        <Route path="explore/movie" type="movie" component={ExploreContainer} />
        <Route
          name="detail"
          path="detail/:type/:id"
          component={DetailContainer}
        />
        <Route path="search" component={SearchContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);
