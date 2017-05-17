<template>
    <div class="header">
        <div class="header-left">{{header.left}}</div>

        <div class="header-content">
            <div class="header-search" v-show="header.isFind">
                <input type="text" placeholder="搜索音乐、歌手">
            </div>
            <div class="header-title" v-show="!header.isFind">
                {{header.title}}
            </div>
        </div>

        <div class="header-right">
            正在播放
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: {
            ...mapGetters([
                'header',
                'audio'
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    .header{
        display: flex;
        position: fixed;
        top:0;
        height: 45px;
        background-color: skyblue;
        width: 100%;
        align-items: center;
        color: white;
    }
    .header-left,.header-right{
        flex:15;
    }
    .header-content{
        flex:70;
    }

</style>
