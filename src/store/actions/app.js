import { SET_LINE, SET_START_TIME, SET_END_TIME } from '../../constants/app'

export const setBlockLine = payload => {
  return {
    type: SET_LINE,
    payload
  }
}

export const setTimestampStart = payload => {
  return {
    type: SET_START_TIME,
    payload
  }
}

export const setTimestampEnd = payload => {
  return {
    type: SET_END_TIME,
    payload
  }
}
