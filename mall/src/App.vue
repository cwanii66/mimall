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
    // storage.setItem('abc', {a: 1}, 'user') //test storage
  }
}

</script>

<style>
  @import './assets/scss/reset.scss';

</style>
