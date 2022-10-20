<template>
  <footer v-if="!$route.meta.hideFooter" class="pt-5 mb-4">
    <div class="d-md-flex justify-content-between container">
      <div class="col-md-2 my-4">
        <h6 class="mb-4">FALE CONOSCO:</h6>
          <ul class="list-group">
            <li class="list-group-item ">+55 (61) 9 8300-8500</li>
            <li class="list-group-item ">+55 (61) 9 8300-8500</li>
          </ul>
      </div>
      <div class="col-md-2 my-4">
        <h6 class="mb-4 pb-2">HORÁRIO DE ATENDIMENTO</h6>
        <p>10h às 16h de</p>
        <p>segunda à sexta.</p>
      </div>
      <div class="col-md-6 my-4">
        <ul class="nav flex-column flex-md-row justify-content-md-center">
          <li class="nav-item"><a href="#" class="nav-link">TERMO DE USO</a></li>
          <li class="nav-item"><a href="#" class="nav-link">PRIVACIDADE</a></li>
          <li class="nav-item"><a href="#" class="nav-link">ÁREA DO VENDEDOR</a></li>
        </ul>
      </div>
      <div class="col-md-2 my-4">
        <h6 class="mb-4">REDE SOCIAIS</h6>
        <ul class="list-inline">
          <li class="list-inline-item">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x"/>
          </li>
          <li class="list-inline-item">
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x"/>
          </li>
          <li class="list-inline-item">
            <font-awesome-icon :icon="['fab', 'square-facebook']" size="2x"/>
          </li>

        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
footer{
  min-height: 6rem;
  border-top: 1px solid #d4d4d4;
  h6, ul > li{
    font-size: 0.75rem;
    font-weight: 100;
  }
  li > a {
    color: #fff;
    padding-top: 0;
    &:hover {
      color:#ff0000;
    }
    @media (max-width: 768px){
      padding: 0 ;
    }
  }
  .list-group-item{
    background-color: transparent;
    border: none;
    color: #d4d4d4;
    padding: 0;
  }
  p {
    font-size: 0.75rem;
    font-weight: 100;
    line-height: 0;
  }

}
</style>
