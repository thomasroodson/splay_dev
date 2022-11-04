import * as types from './mutation-types'

export default {
  [types.SET_STREAMTV] (state, payload) {
    state.streamTV = payload
  }
}
