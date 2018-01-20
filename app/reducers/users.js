// Test file for Redux operability

const users = (state={}, action) => {
  switch(action.type) {
    case 'SHOW_USERS':
      return
        // ...state,
        // users: action.payload
        Object.assign({}, state, {
        users: action.payload
      })

      default:
        return state;
  }
}

export default users
