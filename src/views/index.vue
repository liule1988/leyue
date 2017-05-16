<template>
    <div class="hello">
        我是主页1
    </div>
</template>

<script>
    export default {
        name: 'index',
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
                    'isFind':true,
                    'title':'',
                    'left':'识别',
                    'right':'正在播放'

                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>