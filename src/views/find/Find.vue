<template>
    <transition name="fade">

        <div class="find">
          <tab>
            <tab-item @on-item-click="handler">个性推荐</tab-item>
            <tab-item @on-item-click="handler">歌单</tab-item>
            <tab-item @on-item-click="handler">排行榜</tab-item>
          </tab>
          <router-view></router-view>
        </div>
    </transition>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  import { Swiper } from 'vux'
    export default {
        name: 'Find',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
      components:{
        Tab,
        TabItem,
        Swiper
      },
        mounted () {
            this.play();
        },
        methods: {
            play () {
                this.$store.commit('tabChange', {
                    'isFind': true,
                    'title': '',
                    'left': '识别',
                    'right': '正在播放'
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
