<template>
  <div class="home">
    <section class="slide">
      <SlideComponent />
    </section>
    <!--Slider Topo-->
    <section class="plans">
      <PlansComponent />
    </section>
    <!--Plans-->
    <section class="films py-3">
      <div class="container">
        <div class="row">
          <h2 class="h4 mt-5">Filmes</h2>
          <FilmsComponent />
        </div>
      </div>
    </section>
    <!--Films-->
    <section class="genesis py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h2 class="h4 mt-5 mb-md-5 pb-md-5">Rede Gênesis</h2>
            <div class="col-12 my-md-5 py-md-5"></div>
            <div class="mt-5 pt-5">
              <h4 class="h1 mt-md-5 pt-md-5 mb-0">Estamos ao vivo</h4>
            </div>
            <button class="btn btn-outline-light text-uppercase mt-2 mb-5"> Assistir</button>
          </div>
        </div>
      </div>
    </section>
    <!--Gênesis-->
    <section class="cultos py-3">
      <div class="container">
        <div class="row mb-4">
          <h2 class="h4 mt-5">Cultos</h2>
          <CultsComponent />
        </div>
      </div>
    </section>
    <!--Cultos-->
    <section class="brasil-fm py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h2 class="h4 mt-5">Sara Brasil FM</h2>
            <div class="col-12 my-md-5 py-md-5"></div>
            <div class="col-md-4 mt-5 pt-5">
              <h4 class="h1">Sintonizados em você</h4>
            </div>
            <button class="btn btn-outline-light text-uppercase mt-2 mb-5"> Ouça Agora</button>
          </div>
        </div>
      </div>
    </section>
    <!--BrasilFM-->
    <section class="plans-devices pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <h2 class="h3 text-center mt-5">Aprenda onde e quando quiser</h2>
          <div class="col-md-8 mt-5 d-md-flex justify-content-around">
            <div class="col-md-5 mb-2 d-flex">
              <div class="p-2 price">
                <span>Plano 1</span>
                <h4 class="price">R$ 9,90</h4>
                <p class="text-right">por mês</p>
              </div>
              <div class="col-md-7 p-2 position-relative">
                <p>Phasellus convallis sit amet metus a laoreet.</p>
                <button class="btn btn-outline-light position-absolute text-uppercase">Assine</button>
              </div>
            </div><!--plan-->
            <div class="col-md-5 d-flex">
              <div class="p-2 price">
                <span>Plano 1</span>
                <h4 class="price">R$ 9,90</h4>
                <p class="text-right">por mês</p>
              </div>
              <div class="col-md-7 p-2 position-relative">
                <p>Phasellus convallis sit amet metus a laoreet.</p>
                <button class="btn btn-outline-light position-absolute text-uppercase">Assine</button>
              </div>
            </div><!--plan-->
          </div>
        </div>
        <img class="img-fluid" src="@/assets/images/plans_device.png" />
      </div>
    </section><!--Plans/Devices-->
    </div>
</template>

<script>
import SlideComponent from '@/components/slider/Slider'
import PlansComponent from '@/components/plans/Plans'
import FilmsComponent from '@/components/films/Films'
import CultsComponent from '@/components/cults/Cults'

export default {
  name: 'LandingPage',
  components: {
    SlideComponent,
    PlansComponent,
    FilmsComponent,
    CultsComponent
  }
}
</script>
<style lang="scss" scoped>
.btn{
  border-radius: 0;
}
// - Plans
.plans{
  .single-plan{
    h4{
      font-size: 35px;
      font-weight: 900 !important;
    }
  }
}
// - Genesis
.genesis{
  background: linear-gradient(to left, transparent, black), url('@/assets/images/banner_genesis.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  .pb-5{
    padding-bottom:19rem !important ;
  }
  h4{
    font-size: 46px;
    line-height: 0.9;
  }
}
// - Brasil FM
.brasil-fm{
  background: linear-gradient(to left, transparent, black), url('@/assets/images/sara_brasil_fm.png');
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  h4{
    line-height: 48px;
    font-size: 56px;
  }
}
// - Plans / Device
.plans-devices{
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 15%, rgba(22,22,22,1) 100%);
  .col-md-7{
    border-left: 1px solid #CCC
  }
  .btn{
    right: 0;
  }
  .price{
    h4{
      font-size: 35px;
      font-weight: 900 !important;
    }
    p{
      font-size: 12px;
    }
  }
  @media (min-width: 768px) {
    .genesis{
      .col-md-8{
        text-align: left !important;
      }
    }
    .price{
      p{
        float:right
      }
    }
    .img-fluid{
      margin-top: -80px;
    }
  }
}
</style>
