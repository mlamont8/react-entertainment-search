import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import {createstore} from 'react';
import allReducers from './reducers';
import {Provider} from 'react-redux';


const store = createstore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    routes
  </Provider>,
  document.getElementById('app')
);
