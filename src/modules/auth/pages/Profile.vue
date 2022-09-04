<template>
    <section class="profile-area">
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-8 title-profile">
            <h1>Conta <span>&</span> Perfil</h1>
          </div>
        </div>
      </div>
      <div class="container p-3 mt-1">
        <div class="row justify-content-center">
          <div class="col-md-8 d-flex">
            <div class="avatar-profile">
              <img class="img-fluid" src="@/assets/images/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg"/>
            </div>
            <div class="body-profile mt-2 px-5">
              <h5 class="h3">Lucas Cunha</h5>
              <p>lucascunha@gmail.com</p>
              <p>Senha: *******</p>
              <p>Telefone: (61) 9 8304-4330</p>
              <p>Endereço: QMSW 04 lote 07/08 - Sudoeste / DF</p>
            </div>
          </div>
        </div>
              <button type="button" class="btn btn-outline-light">Light</button>
      </div>
    </section>
</template>

<script>
export default {
  name: 'ProfilePage'
}
</script>

<style lang="scss">
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
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
}
</style>
