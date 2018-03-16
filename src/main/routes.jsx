import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Search from '../search/search'
import Results from '../results/results'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Search} />
    <Route path='/results' component={Results} />
    <Redirect from='*' to='/' />
  </Router>
)
