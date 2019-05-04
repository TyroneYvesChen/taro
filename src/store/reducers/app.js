import { SET_LINE, SET_START_TIME, SET_END_TIME } from '../../constants/app'

const INITIAL_STATE = {
  blockLineObj: {},
  timestampStart: 0,
  timestampEnd: 0
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LINE:
      return {
        ...state,
        blockLineObj: action.payload
      }
    case SET_START_TIME:
      return {
        ...state,
        timestampStart: action.payload
      }
    case SET_END_TIME:
      return {
        ...state,
        timestampEnd: action.payload
      }
    default:
      return state
  }
}
