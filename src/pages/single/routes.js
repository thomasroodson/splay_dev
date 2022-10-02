export default [
  {
    path: '/watch/:id',
    name: 'single-movie',
    component: () => import(/* webpackChunkName: "singlemovie" */ './SingleMovie')
  }
]
