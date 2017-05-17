<template>
    <transition name="fade">

        <div class="find">
          <tab active-color="#29b6f6">
            <tab-item @on-item-click="jumpTo('recommend')">个性推荐</tab-item>
            <tab-item @on-item-click="jumpTo('musicList')">歌单</tab-item>
            <tab-item @on-item-click="jumpTo('ranks')">排行榜</tab-item>
          </tab>
          <router-view></router-view>
        </div>
    </transition>
</template>

<script>
  import { Tab, TabItem } from 'vux';
  import {Swiper, SwiperItem} from 'vux'
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
        Swiper, SwiperItem
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
            },
            jumpTo(data) {
            this.$router.push({
              path: '/find/'+data
            });
          },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
