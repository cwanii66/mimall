<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: 'app',
  components: {

  },
  data() {
    return {

    }
  },
  mounted() {
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartCount()
    }
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res = {}) => { // 未登录 res 为undefined
        this.$store.dispatch('saveUserName', res.username)
      })
    },

    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  },
}

</script>

<style lang='scss'>
  @import './assets/scss/reset.scss';
  @import './assets/scss/config.scss';
  @import './assets/scss/button.scss';
  

</style>
