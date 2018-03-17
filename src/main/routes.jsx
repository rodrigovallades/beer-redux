import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

import App from './app'

import Search from '../search/search'
import Results from '../results/results'

export default props => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Search} />
      <Route path='results' component={Results} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)
