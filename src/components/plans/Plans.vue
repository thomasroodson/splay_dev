<template>
  <div class="container my-5">
    <div
      class="row justify-content-center text-center"
      v-for="plano in planos"
      :key="plano.id"
    >
      <h2 class="text-uppercase mb-5">Conheça nossos planos:</h2>
      <div class="col-md-6 col-lg-4">
        <div class="card bg-transparent">
          <div class="card-body px-5 py-4">
            <span>Plano 1</span>
            <h2 class="card-title">{{plano.valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}}</h2>
            <span>por mês</span>
            <table class="table my-5 table-borderless text-light">
              <tbody>
                <tr>
                  <td>Rede Gênesis</td>
                  <td>&#10003;</td>
                </tr>
                <tr>
                  <td>Sara Brasil FM</td>
                  <td>&#10003;</td>
                </tr>
                <tr>
                  <td>Cultos ao vivo</td>
                  <td>&#10003;</td>
                </tr>
                <tr>
                  <td>Conteúdo exclusivo</td>
                  <td>&#10003;</td>
                </tr>
                <tr>
                  <td>Eventos</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Dispositivos</td>
                  <td>{{plano.dispositivo}}</td>
                </tr>
              </tbody>
            </table>
            <a href="#" class="btn bg-tranparent text-light text-uppercase px-3">Assine</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PlansComponent',
  created () {
    this.LoadPlans()
  },
  computed: {
    ...mapState('components', ['planos'])
  },
  methods: {
    ...mapActions('components', ['LoadPlans'])
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 300;
}
.card {
  border: 1px solid #d2d2d2;
  border-radius: 0;
  .card-title{
    font-size: 2.5rem;
    font-weight: 900;
  }
  span {
    font-weight: 300;
  }
  a {
    border: 1px solid #d2d2d2;
    border-radius: 0;
    font-size: 1.2rem;
    &:hover{
      opacity: 0.7;
    }
  }
  .table {
    border-top: 1px solid #d2d2d2;
    border-bottom: 1px solid #d2d2d2;
    text-align: left !important;
    td {
      padding: 0.3rem !important;
    }
  }
}
</style>
