// import store from "@/store"

export default async (to, from, next) => {
  const namePage = to.name
  document.title = ` ${namePage[0].toUpperCase()}${namePage.substring(1)} - SaraPlay `
  // if (to.name !== 'login' && !store.getters['auth/hasToken']) {

  // }
  next()
}
