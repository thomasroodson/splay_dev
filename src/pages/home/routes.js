export default [
  {
    path: '/',
    name: 'landingpage',
    component: () => import(/* webpackChunkName: "landinpage" */ './LandingPage')
  },
  {
    path: '/browse',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './Home')
  }
]
