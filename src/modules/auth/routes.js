export default [
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ './pages/Login')
  },
  {
    name: 'register',
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ './pages/Register')
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import(/* webpackChunkName: "profile" */ './pages/Profile')
  },
  {
    name: 'profile-edit',
    path: '/profile/edit',
    component: () => import(/* webpackChunkName: "profile" */ './pages/ProfileEdit')
  },
  {
    name: 'reset-pass',
    path: '/reset-pass',
    component: () => import(/* webpackChunkName: "reset-pass" */ './pages/ResetPass')
  }
]
