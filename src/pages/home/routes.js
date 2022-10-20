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
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ './Search'),
    meta: {
      hideNavbar: true,
      hideFooter: true
    }
  }

]
