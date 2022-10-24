<template>
  <section id="search" class="d-flex align-items-center">
    <div class="container my-5">
      <div class="row mt-5 pt-5">

        <div class="col-12 d-flex my-5">
          <font-awesome-icon class="pt-1 pe-2" :icon="['fa', 'magnifying-glass']" size="xl"/>
          <div class="input-group input-group-sm mb-3">
            <input @keyup="inputSearch(inputSearchText)" type="text" placeholder="busca" class="form-control" v-model="inputSearchText">
            <div class="input-group-prepend">
              <font-awesome-icon class="navbar-toggler-icon" :icon="['fa', 'x']" size="xs" @click="$router.back()"/>
            </div>
          </div>
        </div>

        <div class="col-12 text-center mt-5">
          <span>Digite o que procure ou selecione uma palavra-chave</span>
        </div>
      </div>

      <div v-show="false" class="row my-4 justify-content-center">
        <div class="col-6 col-md-3 my-2" v-for="result in 20" :key="result.index">
          <a href="/#">
            <img src="https://www.themoviedb.org/t/p/original/kJdacG3ZPc76FWWmzgGy4meYkY0.jpg" class="img-fluid">
          </a>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-md-8 keywords text-center">
          <button class="btn btn-outline-light m-1" v-for="keyword in keywords" :key="keyword.index" >{{keyword}}</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchComponent',
  data () {
    return {
      inputSearchText: '',
      filteredResult: [],
      keywords: ['emocionantes', 'inpirador', 'bíblicos', 'louvor', 'para toda a família', 'engraçado', 'suspense', 'liderança', 'para crianças', 'política']
    }
  },
  methods: {
    inputSearch (e) {
      console.log(e.toLowerCase())
    }
  }
}
</script>

<style lang="scss" scoped>
  #search {
    .input-group {
      border-bottom: 1px solid #ededed;
      input {
        padding: 0 0 0 5px;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        color: #ededed;
        font-size: 1.088rem;
        font-weight: 300;
        &::placeholder{
          color:#ededed;
        }
        &:focus {
        border-color: transparent;
        outline: 0;
        box-shadow: none;
        }
      }
    }
    .input-group-prepend{
      cursor: pointer;
    }
    .keywords {
      button{
        border-radius: 0;
        font-weight: 300;
      }
    }
  }
</style>
