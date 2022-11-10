<template>
  <section class="register-area">
    <div class="container text-center">
      <div class="row align-items-center justify-content-center register">
        <div class="col-md-4">
          <h1>Resetar senha</h1>
          <h6>Insira seu email para redefinir sua senha.</h6>
          <form @submit.prevent="submit()">
            <div class="card">
              <div class="card-body mt-4">
                <div class="form-group mb-2">
                  <input v-model="form.email" type="email" class="form-control" placeholder="E-mail">
                </div>
                <div v-if="success" class="alert alert-success">
                  <p>{{resPass.body.message}}</p>
                </div>
                <div v-if="erro" class="alert alert-danger">
                  <p>{{resPass.body.message}}</p>
                </div>
                <router-link class="btn btn-light px-4 py-2 btn-login" :to="{ name: 'login' }" >Cancelar</router-link>
                <button class="btn btn-danger px-5" type="submit" >Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import services from '@/http'

export default {
  name: 'ResetPass',
  data () {
    return {
      form: {
        email: ''
      },
      resPass: null,
      success: false,
      erro: false
    }
  },
  methods: {
    async submit () {
      this.resPass = await services.auth.resetPass(this.form)
        .then(res => {
          return res
        }).catch((err) => {
          return err
        })

      const { status } = this.resPass

      if (status === 200) {
        this.success = !this.success
        setTimeout(() => {
          this.$router.push({ name: 'login' })
        }, 60000)
      } else {
        this.erro = !this.erro
        setTimeout(() => {
          this.erro = !this.erro
          this.form.email = ''
        }, 8000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .register{
      height: 100vh;
      h1{
        font-size: 2.088rem;
      }
      h6 {
        font-weight: 300;
      }
    }
    .card{
      min-width: 350px;
      background-color:#292929;
      border: #ccc 1px solid;
      border-radius: 6px;
      color:rgb(138, 136, 136);
    }
    .form-control{
      font-weight: 300;
      background-color: #111 !important;
      border-radius: 10px;
      font-size: 1.088rem;
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
