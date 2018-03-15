const INITIAL_STATE = {
  query: '',
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'QUERY_CHANGED':
      return { ...state, query: action.payload }
    case 'SEARCH_SEARCHED':
      return { ...state, list: action.payload }
    case 'SEARCH_CLEAR':
      return { ...state, query: '' }
    default:
      return state
  }
}
