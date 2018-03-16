import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/icon-button'
import SearchAddress from '../search/search-address'
import { changeQuery, search, clear } from './search-actions'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const { search, query, clear } = this.props
    if (e.keyCode === 13 || e.key === `Enter`) {
      search()
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  renderAddress(address) {
    if (address.results) {
      return (
        <SearchAddress address={address.results[0].formatted_address}/>        
      )
    }
  }

  render() {
    const { search, query, clear, address } = this.props
    return (
      <div role='form' className='todo-form'>
        <input
          id='description'
          className='form-control'
          placeholder='Search address'
          onChange={this.props.changeQuery}
          onKeyUp={this.keyHandler}
          value={this.props.query} />
        <IconButton
          style='info'
          icon='search'
          onClick={() => search()} />
        <IconButton
          style='default'
          icon='close'
          onClick={() => clear()} />

        {this.renderAddress(address)}
      </div>
    )
  }
}

const mapStateToProps = state => ({ query: state.search.query, address: state.search.address })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeQuery, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
