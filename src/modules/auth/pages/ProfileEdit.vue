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
              <input type="text" class="form-control" placeholder="Thalles Daniel">
            </div>
            <div class="d-flex flex-wrap">
              <div class="form-group pe-2 col-md-6">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="thallesdaniell@hotmail.com">
              </div>
              <div class="form-group col-md-6">
                <label>CPF</label>
                <input type="text" class="form-control" placeholder="000.000.000-00">
              </div>
            </div>
            <div class="d-flex flex-wrap">
              <div class="form-group col-md-6 pe-2">
                <label>Data de Nascimento</label>
                <input type="date" class="form-control">
              </div>
              <div class="form-group col-md-6">
                <label>Celular</label>
                <input type="text" class="form-control" placeholder="(00) 0000-0000">
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
                <input type="text" class="form-control" placeholder="Avenida Alameda das Travessas">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProfileEdit'
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
