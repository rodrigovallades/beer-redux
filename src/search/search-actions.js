import axios from 'axios'

const GMAPS_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAFGFzc9BcMwW9UT2N5mYj9PeT4bXs8a6o'
const API_URL = 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql'

export const changeQuery = event => ({
  type: 'QUERY_CHANGED',
  payload: event.target.value
})

export const search = (address) => {
  return (dispatch, getState) => {
    const address = getState().search.query
    if (address) {
      axios.get(`${GMAPS_URL}&address=${address}`)
        .then(res => dispatch({ type: 'SEARCH_SEARCHED', payload: res.data }))
    }
  }
}

export const clear = () => {
  return [{ type: 'SEARCH_CLEAR' }, search()]
}
