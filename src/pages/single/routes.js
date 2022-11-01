export default [
  {
    path: '/watch/:id/:hash',
    name: 'single-movie',
    component: () => import(/* webpackChunkName: "singlemovie" */ './SingleMovie'),
    props: true
  },
  {
    path: '/watch/:id/:hash/movie',
    name: 'player-movie',
    component: () => import(/* webpackChunkName: "playermovie" */ './PlayerMovie'),
    meta: {
      hideNavbar: true,
      hideFooter: true
    }
  }
]
