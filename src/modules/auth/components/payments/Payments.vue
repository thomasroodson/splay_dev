<template>
  <div class="row justify-content-center">
    <div class="col-lg-8 mb-4">
      <h3>Pagamento</h3>
    </div>
    <div class="col-lg-8 d-flex justify-content-center">
      <div class="card-pay pt-3">
        <div class="card-body py-0 mt-4 pt-1 d-flex">
          <div class="flex-grow-1">
            <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" v-if="getCardType" v-bind:key="getCardType" class="img-fluid">
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
            <span>{{ nameCard ? nameCard.toUpperCase() : 'Joana Carvalho Pires'.toUpperCase() }}</span>
          </p>
          <p class="d-flex flex-column px-3">
            <small>expira</small>
            <span>{{ monthCard ? monthCard : '00' }}/{{ yearCard ? yearCard : '00' }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-8 card mt-4 py-4">
      <form class="card-body d-flex flex-column" @submit.prevent="submit()">
        <div class="form-group">
          <label>Número do cartão</label>
          <input type="text" class="form-control bg-transparent" v-model="numberCard" autocomplete="off" placeholder="0000 0000 0000 0000" v-mask="'#### #### #### ####'">
        </div>
        <div class="form-group">
          <label>Nome impresso no cartão</label>
          <input type="text" class="form-control bg-transparent" v-model="nameCard" autocomplete="off" placeholder="Joana Carvalho Pires">
        </div>
        <div class="form-group d-flex justify-content-between">
          <div class="col-sm-9 row">
            <label>Data de validade</label>
            <div class="col input-group">
              <select class="custom-select bg-transparent" @change="handleChangeMonth">
                <option value="">Mês</option>
                <option :value="index + 1" v-for="(month, index) in monthDate" :key="index">{{ month }}</option>
              </select>
            </div>
            <div class="col input-group">
              <select class="custom-select bg-transparent" @change="handleChangeYear">
                <option value="">Ano</option>
                <option :value="yearDate + index" v-for="(n, index) in 12" :key="n">{{ yearDate + index }}</option>
              </select>
            </div>
          </div>
          <div class="col-sm-3">
            <label>cvc</label>
            <input type="text" class="form-control bg-transparent" v-model="cvvCard" placeholder="000" mask="'###'">
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <h5>Valor total - R$ 29,90</h5>
          <button type="submit" class="btn btn-danger w-50">Pagar</button>
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
      cvvCard: '',
      monthDate: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      yearDate: new Date().getFullYear(),
      pay: {
        nome: 'THOMAS ROODSON ALVES DA SILVA',
        vencimento: '10/26',
        cvv: '608',
        numero: '5445002035996935'
      }
    }
  },
  directives: {
    mask
  },
  computed: {
    getCardType () {
      /* eslint-disable */
      const number = this.numberCard
      let re = new RegExp('^4')
      if (number.match(re) != null) return 'visa'

      re = new RegExp('^5[1-5]')
      if (number.match(re) != null) return 'mastercard'

      re = new RegExp('^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))')
      if (number.match(re) != null) return 'elo'
      
      return 'visa' // default type
    }
  },
  methods: {
    handleChangeMonth (e) {
      if (e.target.value < 10) {
        this.monthCard = `0${e.target.value}`
      } else {
        this.monthCard = e.target.value
      }
    },
    handleChangeYear (e) {
      this.yearCard = e.target.value.slice(2, 4)
    },
    submit () {
      try {
        console.log(this.pay)
      } catch (err) {

      }
    }
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
    .img-fluid {
      height: 45px;
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
        color: #fff;
        &::placeholder {
          color: #fff;
        }
      }
    }
    .custom-select {
      width: 100%;
      min-width: 280px;
      cursor: pointer;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      padding: 0.375rem 0.75rem;
      color:#fff;
      option {
        color: #414141;
      }
      &:focus-visible{
        outline: 0;
      }
    }
    .btn{
      background-color:#FF0000 !important;
      border-color: #FF0000;
      font-size: 1.088rem;
      border-radius: 12px;
    }
    .btn:hover{
      opacity: 0.8;
    }
    input:focus{
      border-color: #fff;
      box-shadow: none !important;
    }
  }
</style>
