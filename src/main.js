import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/scss/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
// import Vuelidate from 'vuelidate'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-flash'
import 'videojs-contrib-hls/dist/videojs-contrib-hls'
// import 'videojs-contrib-hls.js/src/videojs.hlsjs'

library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.use(Vuelidate)
Vue.use(VuePlyr)
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
