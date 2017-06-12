<template>
  <mt-tabbar v-model="selected"  @click.native="goto" class="footer">
    <mt-tab-item id="find">
      <img slot="icon" src="../assets/logo.png">
      发现音乐
    </mt-tab-item>
    <mt-tab-item id="myMusic">
      <img slot="icon" src="">
      我的音乐
    </mt-tab-item>
    <mt-tab-item id="friends">
      <img slot="icon" src="">
      朋友
    </mt-tab-item>
    <mt-tab-item id="me">
      <img slot="icon" src="">
      帐号
    </mt-tab-item>
  </mt-tabbar>



</template>

<script>
  import Vue from 'vue'
  import { Tabbar, TabItem } from 'mint-ui';

  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);
    export default {
        name: 'le-footer',
        data () {
            return {
              selected:''
            }
        },
        methods:{
            goto () {
              console.log(this.selected)
              // 命名的路由
              this.$router.push({ name: this.selected})
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    .footer {
        background-color: rgba(0,0,0,0.8);
    }
    .mint-tabbar > .mint-tab-item.is-selected{
      background-color: rgba(0,0,0,0);
    }
</style>
