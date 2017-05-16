<template>
    <div class="me">
        我的
    </div>
</template>

<script>
    export default {
        name: 'me',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted () {
            this.play();
        },
        methods:{
            play () {
                this.$store.commit('tabChange', {
                    'isFind':false,
                    'title':'帐号',
                    'left':'',
                    'right':'正在播放'

                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>