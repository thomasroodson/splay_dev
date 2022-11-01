export default [
  {
    path: '/watch/:id',
    name: 'single-movie',
    component: () => import(/* webpackChunkName: "singlemovie" */ './SingleMovie'),
    props: true
  },
  {
    path: '/watch/:id/:hash',
    name: 'player-movie',
    component: () => import(/* webpackChunkName: "playermovie" */ './PlayerMovie'),
    meta: {
      hideNavbar: true,
      hideFooter: true
    }
  }
]
