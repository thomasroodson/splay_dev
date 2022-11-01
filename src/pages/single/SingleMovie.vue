<template>
  <section class="single-movie">
 <div v-if="loading">
      <Loading />
    </div>
    <div v-if="!loading" class="container-fluid">
      <div class="row backdrop align-items-end ps-md-5" :style="{background: `linear-gradient(0deg, rgba(22,22,22,1) 0%, rgba(22,22,22,0.98) 10%, rgba(22,22,22,0.95) 22%, rgba(22,22,22,0.8) 32%, rgba(22,22,22,0.75) 36%, rgba(22,22,22,0.7) 43%, rgba(22,22,22,0.5) 58%, rgba(22,22,22,0) 100%), url(${movie.imagem.cdn}) top center/cover no-repeat`}">
        <div class="col-md-6">
          <h2>{{movie.titulo}}</h2>
          <div class="my-1">
            <span class="pe-4">{{movie.duracao}} MIN</span>
            <span>{{movie.data.substr(0,4)}}</span>
          </div>
          <span>{{movie.descricao}}</span>
          <div class="items my-3">
            <router-link to="teste/3150">
              <span class="py-2 px-4 me-2">
                <font-awesome-icon :icon="['fa', 'play']"/>
              </span>
            </router-link>
            <span class="py-2 px-4 ms-2">
              <font-awesome-icon :icon="['fas', 'heart']"/>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5 py-5">
      <div class="row text-center">
        <h1 class="h1-related">Você também pode gostar</h1>
        <div class="col-md-3">
          <router-link to="/">
            <img :src="movie.imagem.cdn" class="img-fluid pb-3">
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link to="/">
            <img :src="movie.imagem.cdn" class="img-fluid pb-3">
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link to="/">
            <img :src="movie.imagem.cdn" class="img-fluid pb-3">
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link to="/">
            <img :src="movie.imagem.cdn" class="img-fluid pb-3">
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Loading from '@/components/loading/Loading'

export default {
  props: ['id'],
  data () {
    return {
      loading: false
    }
  },
  async created () {
    await this.LoadSingleMovie(this.id)
    this.loading = false
  },
  methods: {
    ...mapActions('single', ['LoadSingleMovie'])
  },
  computed: {
    ...mapState('single', ['movie'])
  },
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>
.single-movie{
  .backdrop{
    min-height: 90vh;
    h2{
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
  .items{
    span{
      border: 2px solid #fff;
      cursor: pointer;
      transition: ease-in 50ms;
      color: #fff;
      &:hover{
        background-color: #ff0000;
        border: 2px solid #ff0000;
      }
    }
  }
}
</style>
