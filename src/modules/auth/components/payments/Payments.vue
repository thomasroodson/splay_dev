<template>
  <div class="row justify-content-center">
    <div class="col-lg-8 mb-4">
      <h3>Pagamento</h3>
    </div>
    <div class="col-lg-8 d-flex justify-content-center">
      <div class="card-pay pt-3">
        <div class="card-body py-0 mt-4 pt-1 d-flex">
          <div class="flex-grow-1">
            <img src="https://registro.br/assets/img/pagamento/bandeiras/visa.png" class="img-fluid">
          </div>
            <p class="d-flex flex-column px-3">
              <small>cvc</small>
              <span>{{ cvvCard ? cvvCard : '000' }}</span>
            </p>
        </div>
        <div class="card-body p-0">
          <p class="w-100 d-flex justify-content-center">
            <span class="number-card">{{ numberCard ? numberCard : '0000 0000 0000 0000' }}</span>
          </p>
        </div>
        <div class="card-body d-flex pt-0">
          <p class="d-flex flex-grow-1 flex-column">
            <small>Nome</small>
            <span>{{ nameCard ? nameCard : 'Joana Carvalho Pires' }}</span>
          </p>
          <p class="d-flex flex-column px-3">
            <small>expira</small>
            <span>20/26</span>
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-8 card mt-4 py-4">
      <form class="card-body d-flex flex-column">
        <div class="form-group">
          <label>Número do cartão</label>
          <input type="text" class="form-control bg-transparent" v-model="numberCard" placeholder="0000 0000 0000 0000" v-mask="'#### #### #### ####'">
        </div>
        <div class="form-group">
          <label>Nome impresso no cartão</label>
          <input type="text" class="form-control bg-transparent" placeholder="Joana Carvalho Pires">
        </div>
        <div class="form-group d-flex justify-content-between">
          <div class="col-sm-9 row">
            <label>Data de validade</label>
            <div class="col">
              <input type="text" class="form-control bg-transparent" placeholder="0000 0000 0000 0000">
            </div>
            <div class="col">
              <input type="text" class="form-control bg-transparent" placeholder="0000 0000 0000 0000">
            </div>
          </div>
          <div class="col-sm-3">
            <label>cvc</label>
            <input type="text" class="form-control bg-transparent" placeholder="000" mask="'###'">
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <h5>Valor total - R$ 29,90</h5>
          <button class="btn btn-danger">Pagar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
export default {
  name: 'PaymentsComponet',
  data () {
    return {
      numberCard: '',
      nameCard: '',
      monthCard: '',
      yearCard: '',
      cvvCard: ''
    }
  },
  directives: {
    mask
  }
}
</script>

<style lang="scss" scoped>
  .card-pay {
    background: #414141;
    background: -moz-linear-gradient(180deg, rgba(65,65,65,1) 15%, rgba(22,22,22,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(65,65,65,1) 15%, rgba(22,22,22,1) 100%);
    background: linear-gradient(180deg, rgba(65,65,65,1) 15%, rgba(22,22,22,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#414141",endColorstr="#161616",GradientType=1);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.15);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.15);
    width: 100%;
    max-width: 373px;
    height: 220px;
    border-radius: 5px;
    small {
      font-size: 0.65rem;
    }
    span {
      font-size: 1.03rem;
    }
    .number-card {
      font-size: 1.7rem;
    }
  }
  .card {
    background: #414141;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.15);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.15);
    .form-group {
      margin-bottom: 0.8rem;
      input {
        color: #fff
      }
    }
  }
</style>
