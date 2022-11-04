<template>
  <section id="genesis-tv">
    <div class="container-fluid m-0 p-0">
      <video ref="video" width="100%" height="640" controls></video>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// import Hls from 'hls.js'

export default {
  name: 'StreamTV',
  async created () {
    this.LoadStremTV()
  },
  mounted () {
    // const hls = new Hls()
    // const stream = this.streamTV[0].url
    // const video = this.$refs['video']
    // hls.loadSource(stream)
    // hls.attachMedia(video)
    // hls.on(Hls.Events.MANIFEST_PARSED, function () {
    //   video.play()
    // })
  },
  methods: {
    ...mapActions('streams', ['LoadStremTV'])
  },
  computed: {
    ...mapState('streams', ['streamTV'])
  }
}
</script>

<style lang="scss" scoped>
  #genesis-tv{
    height: calc(100vh - 300px) !important;
  }
</style>
