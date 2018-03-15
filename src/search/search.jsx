import React, { Component } from 'react'

import PageHeader from '../template/page-header'
import SearchForm from './search-form'

export default props => (
  <div>
    <PageHeader title='Cold beer delivered right to your door' subtitle='Delivery address'></PageHeader>
    <SearchForm />
  </div>
)
