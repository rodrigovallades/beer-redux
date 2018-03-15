import axios from 'axios'

const API_URL = 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql'

export const changeQuery = event => ({
  type: 'QUERY_CHANGED',
  payload: event.target.value
})

export const search = (description) => {
  return (dispatch, getState) => {
    const description = getState().search.query
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${API_URL}?sort=-createdAt${search}`)
      .then(res => dispatch({ type: 'SEARCH_SEARCHED', payload: res.data }))
  }
}

export const clear = () => {
  return [{ type: 'SEARCH_CLEAR' }, search()]
}
