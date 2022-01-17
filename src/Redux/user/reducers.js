import { USER_GET_SUCCESS, USER_GET_FAILURE } from './actions'

const initialState = {
  user: [{ name: 'Sam' }, { name: 'Tim' }]
}

export function userReducer (state = initialState, action) {
  switch (action.type) {
    case USER_GET_SUCCESS:
      console.log(action.payload, 'from reducer')
      return { user: action.payload }

    case USER_GET_FAILURE:
      return state
    default:
      return state
  }
}
