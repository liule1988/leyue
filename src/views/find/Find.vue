<template>
    <transition name="fade">

        <div class="find">
          <tab active-color="#29b6f6">
            <tab-item @on-item-click="jumpTo(0)">个性推荐</tab-item>
            <tab-item @on-item-click="jumpTo(1)">歌单</tab-item>
            <tab-item @on-item-click="jumpTo(1)">排2榜</tab-item>
          </tab>
          <!--<router-view></router-view>-->
          <swiper v-model="index" height="100%" :min-moving-distance="150" :show-dots="false" class="swiper-container" style="width:100%;height: 100%;padding-bottom: 90px;background-color: #eef2f1;">
            <swiper-item :key="1">
              <le-recommend></le-recommend>
            </swiper-item>
            <swiper-item :key="2">
          2
            </swiper-item>
            <swiper-item :key="3">
            3
            </swiper-item>
          </swiper>
        </div>
    </transition>
</template>

<script>
  import { Tab, TabItem } from 'vux';
  import {Swiper, SwiperItem} from 'vux';
  import leRecommend from './recommend.vue';
  export default {
        name: 'Find',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
              index:0
            }
        },
      components:{
        Tab,
        TabItem,
        Swiper, SwiperItem,
        leRecommend
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
          this.index=data;
          },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .find{
    height: 100%;
    width: 100%;
    position: fixed;
  }

</style>
