import { routes as home } from '../pages/home'
import { routes as single } from '../pages/single'
import { routes as streams } from '../pages/streams'
import { routes as auth } from '../modules/auth'

export default [
  ...home,
  ...single,
  ...streams,
  ...auth
]
