<template>
  <section class="login-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4 offset-md-6 offset-lg-8">
          <div class="card mt-2">
            <div class="card-body">
              <h5 class="card-title text-center mb-4">
                Área de Login
              </h5>
              <form @submit.prevent="submit()">
                <div class="form-group">
                  <input
                    required
                    type="email"
                    v-model="form.email"
                    class="form-control mb-2"
                    placeholder="Seu E-mail">
                </div>
                <div class="form-group">
                  <template v-if="show">
                    <font-awesome-icon @click="showPassword" :icon="['fas', 'eye-slash']"/>
                  </template>
                  <template v-else>
                    <font-awesome-icon @click="showPassword" :icon="['fas', 'eye']"/>
                  </template>
                  <input
                    required
                    :type="inputType"
                    v-model="form.password"
                    class="form-control mb-3"
                    placeholder="Senha">
                </div>
                <div v-show="errorPassword" class="alert alert-danger">
                  <p>Não foi possível fazer login! Verfique Login e Senha.</p>
                </div>
                <button type="submit" class="btn w-100 btn-danger py-2 mb-1">
                  Entrar
                </button>
              </form>
              <hr/>
              <div class="footer-form d-flex justify-content-center text-center">
                <div class="col">
                  <span class="mr-2" >Esqueci minha senha</span>
                  <router-link :to="{ name: 'register' }">Cadastrar</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: false,
      inputType: 'password',
      errorPassword: false
    }
  },
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      try {
        await this.ActionDoLogin(this.form)

        this.$router.push({ name: 'home' })
      } catch (error) {
        this.errorPassword = !this.errorPassword
        this.form.email = ''
        this.form.password = ''
      }
    },
    showPassword () {
      this.show = !this.show
      this.inputType = this.show ? 'text' : 'password'
    }
  }
}
</script>

<style lang="scss" scoped>
.login-area{
  background-image: url('@/assets/images/background_login.jpg') !important;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  .row{
    height: 100vh;
  }
  .card{
    min-width: 300px;
    color:#fff;
    background-color: #292929;
  }
  input{
    background-color:#000000;
    color: #fff;
    border-radius:8px;
    font-size: 20px;
  }
  .form-control:focus{
    border-color:#FF0000;
    box-shadow: none;
  }
  .fa-eye{
    cursor: pointer;
    position:absolute;
    right: 29px;
    top:130px;
  }
  .fa-eye-slash{
    cursor: pointer;
    position:absolute;
    right: 29px;
    top:130px;
  }
  .alert-danger{
    background-color: transparent !important;
    border-color: #FF0000;
    font-size: 12px;
    text-align: center;
    padding: 3px;
    border-radius: 0;
  }
  .alert-danger p {
    font-weight: 200;
    margin-bottom: 3px;
  }
  .btn{
    background-color:#FF0000 !important;
    border-color: #FF0000;
    font-size: 20px;
    border-radius: 12px;
  }
  .btn:hover{
    opacity: 0.8;
  }
  .footer-form{
    font-size:14px;
  }
  .footer-form .mr-2{
    margin-right: 15px !important;
  }
}

</style>
