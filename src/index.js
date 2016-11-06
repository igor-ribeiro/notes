import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './index.css';

import HomePage from './pages/HomePage';
import NotePage from './pages/NotePage';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/">
      <IndexRoute component={HomePage} />
      <Route path="/:title" component={NotePage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
