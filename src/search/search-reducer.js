const INITIAL_STATE = {
  query: '',
  address: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'QUERY_CHANGED':
      return { ...state, query: action.payload }
    case 'SEARCH_SEARCHED':
      return { ...state, address: action.payload }
    case 'SEARCH_CLEAR':
      return { ...state, query: '', address: {} }
    default:
      return state
  }
}
