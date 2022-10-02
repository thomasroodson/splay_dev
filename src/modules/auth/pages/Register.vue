<template>
  <section class="register-area">
    <div class="container text-center">
      <div class="row align-items-center justify-content-center register">
        <div class="col-md-4">
          <h1>Cadastre-se</h1>
          <form @submit.prevent="submit()">
            <div class="card">
              <div class="card-body mt-4">
                <div class="form-group mb-2">
                  <input v-model="form.name" type="text" class="form-control" placeholder="Nome Completo">
                </div>
                <div class="form-group mb-2">
                  <input v-model="form.email" type="email" class="form-control" placeholder="E-mail">
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <input v-model="form.password" type="password" class="form-control" placeholder="Senha">
                  </div>
                  <div class="col">
                    <input v-model="passwordConfirmed" type="password" class="form-control" placeholder="Confirmar Senha">
                  </div>
                </div>

                <div class="form-group form-check mb-2">
                  <input v-model="terms" type="checkbox" class="form-check-input">
                  <label class="form-check-label">Eu aceito os <a href="#">Cokies</a> e <a href="#">Termos de Uso</a></label>
                </div>
                <router-link class="btn btn-light px-4 py-2 btn-login" :to="{ name: 'login' }" >Login</router-link>
                <button type="submit" class="btn btn-danger px-5">
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RegisterPage',
  data () {
    return {
      form: {
        email: '',
        name: '',
        password: '',
        newsletter: false
      },
      terms: false,
      passwordConfirmed: ''
    }
  },
  methods: {
    ...mapActions('auth', ['ActionRegister']),
    async submit () {
      if (this.form.password === this.passwordConfirmed && this.terms) {
        try {
          await this.ActionRegister(this.form)
          this.$router.push({ name: 'Home' })
        } catch { }
      } else {
        alert('As senhas precisam ser iguais!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .register{
      height: 100vh;
    }
    .card{
      min-width: 350px;
      background-color:#292929;
      border: #ccc 1px solid;
      border-radius: 12px;
      color:rgb(138, 136, 136);
    }
    .form-control{
      font-weight: 300;
      background-color: #111 !important;
      border-radius: 10px;
      font-size: 18px;
      color:#fff;
    }
    .form-control:focus{
      border-color:#FF0000;
      box-shadow: none;
    }
    .btn-login{
      margin-right: 10px;
      border-radius: 12px;
      border: none;
    }
    .btn-danger{
      background-color:#FF0000 !important;
      border-color: #FF0000;
      font-size: 20px;
      border-radius: 12px;
    }
    .btn:hover{
      opacity: 0.8;
    }
    .form-check{
      text-align: left;
      font-size: 14px;
    }

</style>
