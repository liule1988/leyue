<template>
  <div class="recommend">

    <div class="recommend-swp">
      <mt-swipe>
        <mt-swipe-item v-for="(item, index) in banner " :key="index"><img :src="item.pic" style="width: 100%"></mt-swipe-item>
      </mt-swipe>
    </div>
<div class="recommend-list">
  <div class="title">推荐歌单</div>
  <div class="playLists-area">
    <ul>
      <li v-for="data in reMusicList">
        {{data.id}}
      </li>
    </ul>
  </div>
</div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);  import api from '../../api/index'
  export default {
    name: 'le-recommend',
    data () {
      return {
        banner:[]
      }
    },
    props:{
      reMusicList:{
          type:Array
      }
    },
    components: {

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
        },

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
.recommend-swp{
  height: 150px;
}
  .recommend-list{
    background-color: #fff;
  }
  .recommend-list .title{
    padding-top :15px;
    font-size :14px;
    color :#282c2b
  }
  .recommend-list .title:before{
    content: '|';
    color: #ce3d3e;
    font-size :20px;
    padding-right: 5px;
  }

  .recommend-list .title:after{
    content: '>';
    color: #848a88;
    font-size: 15px;
    padding-left: 5px;
  }

</style>
