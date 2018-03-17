import 'modules/font-awesome/css/font-awesome.min.css'
import '../css/custom.css'

import React from 'react'
import Menu from '../template/menu'

export default props => (
  <div>
    <Menu />
    <div className='container'>
      {props.children}
    </div>
  </div>
)
