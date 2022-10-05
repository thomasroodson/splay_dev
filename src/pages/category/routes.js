export default [
  {
    path: '/browse/category/:id',
    name: 'category',
    component: () => import(/* webpackChunkName: "home" */ './Category')
  }
]
