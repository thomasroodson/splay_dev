<template>
  <vue-plyr ref="plyr" :options="playerOptions">
    <video :poster="post.media.cover" :id="'video-' + post.id" data-plyr-config="{'autoplay': false}">
    </video>
  </vue-plyr>
</template>

<script>
import VuePlyr from 'vue-plyr'
import Hls from 'hls.js'

export default {
  name: 'ComponentName',
  components: {
    VuePlyr
  },
  data () {
    return {
      playerOptions: {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
        settings: ['quality', 'speed', 'loop']
      }
    }
  },
  computed: {
    player () {
      console.log(this.$refs.plyr.player)
      return this.$refs.plyr.player
    }
  },
  mounted () {
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource('https://devimages.apple.com.edgekey.net/iphone/samples/bipbop/bipbopall.m3u8')
      hls.attachMedia(this.player.media)

      window.hls = hls
    }
  }
}
</script>
