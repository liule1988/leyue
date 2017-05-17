<template>
  <div class="recommend">
    <swiper :aspect-ratio="300/800"  auto loop dots-position="center">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in banner " :key="index" ><img :src="item.pic" style="width: 100%"></swiper-item>
    </swiper>

  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'vux'
import api from '../../api/index'
  export default {
    name: 'le-recommend',
    data () {
      return {
        banner:[]
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    mounted(){
        this.getBanner();
    },
    methods:{
        getBanner(){
            api.getBanner().then((response) => {
                console.log(response.data)
              this.banner=response.data.banners
            })
              .catch((response) => {
                console.log(response);
              });
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recommend{
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }

</style>
