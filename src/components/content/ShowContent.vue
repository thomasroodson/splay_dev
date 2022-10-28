<template>
  <carousel v-if="loading" v-bind="settings">
    <slide v-for="({ imagem, url }, index ) in categorias[iCateg].conteudo" :key="index">
      <a :href="`/watch/${url}`">
        <img class="img-fluid px-1" :src="imagem.cdn">
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
        perPageCustom: [[576, 2], [768, 3], [992, 5], [1200, 6]]
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
    ...mapActions('components', ['LoadConteudoCategoria'])
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
    height: 160px;
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
