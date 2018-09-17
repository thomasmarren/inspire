const initialState = {
  data: "this is a test"
}

const reducer = (state = initialState, action) => {
  if (action.type === 'TEST')
  {
    return Object.assign({}, state, {
      data: action.payload
    })
  }
  return state
}

export default reducer