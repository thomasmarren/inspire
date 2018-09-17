const initialState = {
  daily: [],
  summary:{},
  user: 'user1'
}

const reducer = (state = initialState, action) => {
  if (action.type === 'DAILY_DATA')
  {
    return Object.assign({}, state, {
      daily: action.payload
    })
  }
  if (action.type === 'SUMMARY_DATA')
  {
    return Object.assign({}, state, {
      summary: action.payload
    })
  }
  if (action.type === 'CHANGE_USER')
  {
    return Object.assign({}, state, {
      user: action.payload
    })
  }
  return state
}

export default reducer