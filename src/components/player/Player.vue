<template>
  <section>
    {{ movie.link_youtube }}
    <div v-if=" movie.link_youtube  !== ''" class="youtube-ply">
      <vue-plyr>
      <div class="plyr__video-embed">
        <iframe :src="`https://www.youtube.com/embed/${ movie.link_youtube }?amp;iv_load_policy=3&amp;modestbranding=0&amp;playsinline=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=0`" allowfullscreen allowtransparency allow="autoplay"></iframe>
      </div>
    </vue-plyr>
    </div>
    <div v-if=" movie.link_vimeo  !== ''" class="vimeo-ply">
      <vue-plyr>
        <div class="plyr__video-embed">
          <iframe
            :src="`https://player.vimeo.com/video/${ movie.link_vimeo }?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          ></iframe>
        </div>
      </vue-plyr>
    </div>
    <div class="movie-ply"></div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PlayerComponent',
  computed: {
    ...mapState('single', ['movie'])
  }
}
</script>

<style lang="scss" scoped>

</style>
