import { SET_LINE } from '../../constants/app'

export const setBlockLine = payload => {
  return {
    type: SET_LINE,
    payload
  }
}
