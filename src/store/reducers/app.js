import {
  SET_LINE,
  SET_START_TIME,
  SET_END_TIME,
  SET_GAME_OVER,
  SET_OPTIONS,
  SET_INTERVAL
} from '../../constants/app'

const INITIAL_STATE = {
  blockLineObj: {},
  timestampStart: 0,
  timestampEnd: 0,
  timeIntervalId: null, // 计时
  isGameOver: false // 游戏是否结束
}

export default function app(state = INITIAL_STATE, action) {
  console.log(action, 'actionactionaction')
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
    case SET_GAME_OVER:
      return {
        ...state,
        isGameOver: action.payload
      }
    case SET_INTERVAL:
      return {
        ...state,
        timeIntervalId: action.payload
      }
    case SET_OPTIONS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
