import {
  SET_LINE,
  SET_START_TIME,
  SET_END_TIME,
  SET_GAME_OVER,
  SET_OPTIONS,
  SET_INTERVAL
} from '../../constants/app'

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

export const setIsGameOver = payload => {
  return {
    type: SET_GAME_OVER,
    payload
  }
}

export const setOptions = payload => {
  return {
    type: SET_OPTIONS,
    payload
  }
}

export const setIntervalId = payload => {
  return {
    type: SET_INTERVAL,
    payload
  }
}
