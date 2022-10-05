<template>
  <section class="single-movie">
    <div class="container-fluid">
      <div class="row backdrop align-items-end ps-md-5" :style="{background: `linear-gradient(0deg, rgba(22,22,22,1) 0%, rgba(22,22,22,0.98) 10%, rgba(22,22,22,0.95) 22%, rgba(22,22,22,0.8) 32%, rgba(22,22,22,0.75) 36%, rgba(22,22,22,0.7) 43%, rgba(22,22,22,0.5) 58%, rgba(22,22,22,0) 100%), url(${imagem.cdn}) top center/cover no-repeat`}">
        <div class="col-md-6">
          <h2>{{titulo}}</h2>
          <div class="my-1">
            <span class="pe-4">{{duracao}} MIN</span>
            <span>{{data.substr(0,4)}}</span>
          </div>
          <span>{{descricao}}</span>
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
        <h1>Você também pode gostar</h1>
        <div class="col-md-3">
          <router-link to="/">
            <img :src="imagem.cdn" class="img-fluid">
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link to="/">
            <img :src="imagem.cdn" class="img-fluid">
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link to="/">
            <img :src="imagem.cdn" class="img-fluid">
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link to="/">
            <img :src="imagem.cdn" class="img-fluid">
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Player from '@/components/player/Player'
export default {
  data () {
    return {
      id: 3150,
      data: '2021-10-25 17:40:54',
      titulo: 'Bispo Lucas - Quebre barreiras para vencer',
      subtitulo: '',
      descricao: 'Sabia que temos que vencer o medo de fracassar e tirar a linguagem secular de dentro de nós? Isso é preciso para vencermos as barreiras. Sobre este assunto, Bispo Lucas Cunha destaca nesta palestra.',
      tags: 'cultodafamilia,#barreiras ,vencer ,#bispolucas',
      entrada: '2021-10-25 17:38:59',
      saida: '0000-00-00 00:00:00',
      duracao: '42:00',
      url: 'bispo-lucas-quebre-barreiras-para-vencer',
      link_youtube: '',
      link_vimeo: '638819161',
      imagem: {
        id: 31261,
        descricao: 'Bispo_Thumb_1200x700_Quebre_barreiras_para_vencer',
        url: '617715abf27c8_fcde9383de3a3a50a78a04cd83932188',
        extensao: 'jpg',
        tamanho: '144.385742',
        tipo: 'image/jpeg',
        data: '2021-10-25 17:38:04',
        cdn: 'https://imagens.saraplay.com.br/617715abf27c8_fcde9383de3a3a50a78a04cd83932188.jpg'
      }
    }
  }
  // components: {
  //   Player
  // }
}
</script>

<style lang="scss">
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
