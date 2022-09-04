import { routes as home } from '../pages/home'
import { routes as streams } from '../pages/streams'
import { routes as auth } from '../modules/auth'

export default [
  ...home,
  ...streams,
  ...auth
]
