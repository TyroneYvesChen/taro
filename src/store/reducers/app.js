import { SET_LINE } from '../../constants/app'

const INITIAL_STATE = {
  blockLineObj: {}
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LINE:
      return {
        ...state,
        blockLineObj: action.payload
      }
    default:
      return state
  }
}
