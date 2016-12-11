import React from 'react';
import {Router, Route, browserHistory, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import Main from './Main';
import Note from './Note';

export default ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="note/:key" component={Note} />
      </Route>
    </Router>
  </Provider>
);