<template>
  <div>
    <video
      id="vid1"
      width="500"
      height="300"
      class="video-js"
      preload="auto"
      poster="//vjs.zencdn.net/v/oceans.png"
      controls
      data-setup="{}"
    >
      <source
        src="http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8"
        type="application/x-mpegURL"
      />
    </video>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PlayerComponent',
  data () {
    return {
      idMovie: this.$route.params.id
    }
  },
  async created () {
    await this.LoadSingleMovie(this.idMovie)
  },
  methods: {
    ...mapActions('single', ['LoadSingleMovie'])
  },
  computed: {
    ...mapState('single', ['movie'])
  }
}
</script>

<style lang="scss" scoped>
.plyr__video-embed{
  max-height: 100vh !important;
}
</style>
