<template>
  <carousel v-if="loading" v-bind="settings">
    <slide v-for="({ imagem, id, url}, index ) in categorias[iCateg].conteudo" :key="index">
      <a :href="`/watch/${id}/${url}`">
        <img class="img-fluid px-1" :src="`https://img.saraplay.com.br/280x180/${imagem.url}.jpg`">
      </a>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CultsComponent',
  data () {
    return {
      settings: {
        autoplay: false,
        paginationActiveColor: '#F10000',
        perPageCustom: [[576, 2], [768, 3], [992, 4], [1200, 5]]
      },
      loading: true
    }
  },
  props: {
    idComp: Number,
    iCateg: Number
  },
  async created () {
    this.loading = false
    await this.LoadConteudoCategoria(this.idComp)
    this.loading = true
  },
  methods: {
    ...mapActions('components', ['LoadConteudoCategoria']),
    ...mapActions('single', ['LoadSingleMovie'])
  },
  computed: {
    ...mapState('components', ['categorias'])
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped>
  img{
    width: 280px;
    max-height: 180px;
    overflow: hidden;
    object-fit: cover;
    object-position: center center;
  }
  .VueCarousel-wrapper{
    overflow: visible;
  }
  .VueCarousel-dot-container{
    margin-top:0 !important;
  }
</style>
