<template>
  <section id="profile-edit">
    <div class="container mt-5 py-5">
        <Payments v-if="true" />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Payments from '../components/payments/Payments'

export default {
  name: 'ProfileEdit',
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['ActionUpdateProfile'])
  },
  components: {
    Payments
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
