import store from '../store'

export default async (to, from, next) => {
  try {
    await store.dispatch('auth/ActionCheckToken')
  } catch (err) {
    //
  }
  if (to.name !== 'login' && to.name !== 'register' && to.name !== 'reset-pass' && to.name !== 'landingpage' && !store.getters['auth/hasToken']) {
    next({ name: 'login' })
  } else {
    if ((to.name === 'login' || to.name === 'landingpage') && store.getters['auth/hasToken']) {
      next({ name: 'home' })
    } else {
      next()
    }
  }
}
