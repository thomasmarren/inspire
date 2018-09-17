const initialState = {
  data: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'API_DATA')
  {
    return Object.assign({}, state, {
      data: action.payload
    })
  }
  return state
}

export default reducer