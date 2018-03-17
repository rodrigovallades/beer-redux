import React from 'react'
import { Link } from 'react-router'

export default props => (
  <div>
    <h1>Beer search - Frontend challenge [Rodrigo Vallades]</h1>
    <ul>
      <li><Link to='search'>Search</Link></li>
      <li><Link to='results'>Results</Link></li>
    </ul>
  </div>
)
