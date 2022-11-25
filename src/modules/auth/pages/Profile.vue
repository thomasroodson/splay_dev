<template>
    <section class="profile-area  mt-5 py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 title-profile">
            <h1>Conta <span>&</span> Perfil</h1>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-md-8 d-flex py-4">
            <div class="avatar-profile d-flex align-items-center justify-content-center">
              <font-awesome-icon :icon="['fas', 'user']" size="2x"/>
            </div>
            <div class="body-profile px-5 text-start">
              <h5 class="h3">{{ user.nome }}</h5>
              <p>{{ user.email }}</p>
              <p>Senha: *******</p>
              <p>Telefone: {{ user.celular }}</p>
              <p>Endereço: {{user.endereco}} {{user.numero}}</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center plans">
          <div class="col-md-8 d-flex py-2">
            <div class="col-md-4 d-flex align-items-center">
              <h2 class="h4 m-0">Detalhes do Plano</h2>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              {{ user.plano.titulo }}
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <p class="m-0">{{ user.plano.descricao }}</p>
            </div>
          </div>
        </div>
        <a class="btn btn-outline-light my-3 w-50" :href="`/${user.id}/profile/edit`">Atualizar dados</a>
      </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfilePage',
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>

<style lang="scss" scoped>
.profile-area{
  .col-md-8{
    border-bottom: 1px solid #ccc;
  }
  .title-profile h1{
    font-weight: 900;
  }
  .title-profile h1 span {
    font-weight: 100;
  }
  .avatar-profile{
    width: 100px;
    height: 100px;
    overflow: hidden;
    border: 2px solid #ccc;
    border-radius: 8rem;
  }
  .plans {
    p {
      font-size: 0.75rem;
    }
  }
}
</style>
