<template>
  <section id="profile-edit">
    <div class="container mt-5 py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 title-profile">
          <h1>Editar Perfil</h1>
        </div>
        <div class="col-lg-8 no-border py-4">

          <form @submit.prevent="ActionUpdateProfile(user)">
            <div class="form-group">
              <label>Nome Completo</label>
              <input
                type="text"
                class="form-control"
                v-model="user.nome"
              >
            </div>
            <div class="d-flex flex-wrap">
              <div class="form-group pe-2 col-md-6">
                <label>Email</label>
                <input type="email" class="form-control" v-model="user.email">
              </div>
              <div class="form-group col-md-6">
                <label>CPF</label>
                <input type="text" class="form-control" v-model="user.cpf" v-mask="'###.###.###-##'">
              </div>
            </div>
            <div class="d-flex flex-wrap">
              <div class="form-group col-md-6 pe-2">
                <label>Data de Nascimento</label>
                <input type="text" :value="user.nascimento.split('-').reverse()" class="form-control" v-mask="'##/##/####'">
              </div>
              <div class="form-group col-md-6">
                <label>Celular</label>
                <input type="text" class="form-control" v-model="user.celular" v-mask="'(##) #####-####'">
              </div>
            </div>
            <div class="d-flex flex-wrap">
              <div class="form-group col-md-5 pe-2">
                <label>Endereço</label>
                <input type="text" class="form-control" placeholder="Avenida Alameda das Travessas">
              </div>
              <div class="form-group col-md-2 pe-2">
                <label>Número</label>
                <input type="text" class="form-control" placeholder="102">
              </div>
              <div class="form-group col-md-5">
                <label>Complemento</label>
                <input type="text" class="form-control" placeholder="Apartamento, Casa">
              </div>
            </div>
            <div class="d-flex flex-wrap">
              <div class="form-group col-md-4 pe-2">
                <label>CEP</label>
                <input type="text" class="form-control" placeholder="Avenida Alameda das Travessas" v-mask="'##.###-###'">
              </div>
              <div class="form-group col-md-4 pe-2">
                <label>Estado</label>
                <input type="text" class="form-control" placeholder="102">
              </div>
              <div class="form-group col-md-4">
                <label>Cidade</label>
                <input type="text" class="form-control" placeholder="Apartamento, Casa">
              </div>
              <div class="form-group col-md-12">
                <label>País</label>
                <input type="text" class="form-control" placeholder="País">
              </div>
            </div>
          </form>
          <div class="d-flex mt-3">
            <div class="flex-grow-1 pe-2">
              <button type="submit" class="btn btn-dark w-100">Atualizar</button>
            </div>
            <div>
              <button type="button" class="btn btn-secondary px-4">Pagamento</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
import { mask } from 'vue-the-mask'

export default {
  name: 'ProfileEdit',
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['ActionUpdateProfile'])
  },
  directives: {
    mask
  },
  validations: {
    user: {
      nome: {
        required,
        minLength: minLength(4)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#profile-edit{
  .col-lg-8{
    border-bottom: 1px solid #ccc;
    .form-control{
      font-weight: 300;
      background-color: #111 !important;
      border-radius: 10px;
      font-size: 1.063rem;
      color:#fff;
    }
    .form-control:focus{
      border-color:#FF0000;
      box-shadow: none;
    }
  }
  .btn{
    font-size: 1.088rem;
    border-radius: 12px;
  }
  .btn-dark{
    background-color:#FF0000 !important;
    border-color: #FF0000;
  }
  .btn-dark:hover{
    opacity: 0.8;
  }
  .no-border{
    border: 0 !important;
  }
  .title-profile h1{
    font-weight: 900;
  }
}
</style>
