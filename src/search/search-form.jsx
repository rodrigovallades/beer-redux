import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/icon-button'
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
    if (e.key === `Enter`) {
      e.shiftKey ? search() : null
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { search, query, clear } = this.props
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
      </div>
    )
  }
}

const mapStateToProps = state => ({ query: state.search.query })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeQuery, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
