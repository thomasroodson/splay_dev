<template>
      <vue-plyr>
      <div class="plyr__video-embed">
        <iframe :src="`https://www.youtube.com/embed/QR1ludgWu9o?amp;iv_load_policy=3&amp;modestbranding=0&amp;playsinline=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=0`" allowfullscreen allowtransparency allow="autoplay"></iframe>
      </div>
    </vue-plyr>
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
