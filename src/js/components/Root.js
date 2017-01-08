import React from 'react';
import {Router, Route, browserHistory, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import Main from './Main';
import CurrentNote from '../containers/CurrentNote';

export default ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="note/:key" component={CurrentNote} />
      </Route>
    </Router>
  </Provider>
);