import React, { Component } from 'react'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/icon-button'

class SearchList extends Component {
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

const mapStateToProps = state => ({ list: state.search.list })
const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)
