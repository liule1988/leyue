<template>
    <div class="footer">
        <router-link to="/find" class="item">
            发现音乐
        </router-link>

        <router-link to="/myMusic" class="item" >
            我的音乐
        </router-link>

        <router-link to="/friends" class="item">
            朋友
        </router-link>

        <router-link to="/me" class="item">
            账号
        </router-link>

    </div>
</template>

<script>
    export default {
        name: 'le-footer',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footer {
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        align-content: center;
        z-index: 999;


    .item {
        flex: 1;
        align-items: center;
        align-self: center;
        padding: 10px 0;
        font-size: 10px;
    }

    }
</style>