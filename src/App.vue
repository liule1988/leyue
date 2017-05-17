<template>
  <div id="app">
    <le-header></le-header>
    <router-view></router-view>
    <le-footer></le-footer>
  </div>
</template>

<script>
  import lefooter from './components/Footer.vue';
  import leheader from './components/Header.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'app',
    components:{
      'le-footer':lefooter,
      'le-header':leheader
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      ...mapGetters([
        'audio'
      ])
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 45px;
  }
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: white;
  }
</style>
