import { SET_USER_INFO, RESET_TOKEN, RESET_USER_INFO, SET_TOKEN } from './userConstants'

interface Action {
  type: string
  payload?: any
}

export const userInfoReducer = (state: any, action: Action): any => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        user: action.payload,
      }

    case RESET_USER_INFO:
      return {
        user: null,
      }

    default:
      return state
  }
}

export const userTokenReducer = (state: any, action: Action): any => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        token: action.payload,
      }

    case RESET_TOKEN:
      return {
        token: null,
      }

    default:
      return state
  }
}
