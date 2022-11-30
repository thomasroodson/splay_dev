<template>
  <section id="profile-edit">
    <div class="container mt-5 py-5">
      <div class="row justify-content-center">
        <div class="col-md-8 title-profile">
          <h1>Editar Perfil</h1>
        </div>
        <div class="col-md-8 py-4">
          <form>
            <div class="form-group">
              <label>Nome Completo</label>
              <input type="text" class="form-control" placeholder="Thalles Daniel" v-model="name">
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: 'ProfileEdit',
  data () {
    return {
      name: '',
      age: 0
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  }
}
</script>

<style lang="scss" scoped>
#profile-edit{
  .col-md-8{
    border-bottom: 1px solid #ccc;
  }
  .title-profile h1{
    font-weight: 900;
  }
}
</style>
