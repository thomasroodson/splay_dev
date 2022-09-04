export default [
  {
    path: '/',
    name: 'landingpage',
    component: () => import(/* webpackChunkName: "landinpage" */ './LandingPage')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './Home')
  }
]
