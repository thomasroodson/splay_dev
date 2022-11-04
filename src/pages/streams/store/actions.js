import services from '@/http'
import * as types from './mutation-types'

export const LoadStremTV = ({ dispatch }) => {
  return services.streams.loadStreamTV().then(res => {
    dispatch('ActionSetStreamTV', res.data.data)
  })
}

export const ActionSetStreamTV = ({ commit }, payload) => {
  commit(types.SET_STREAMTV, payload)
}
