<template>
    <div class="myMusic">
        我的音乐
    </div>
</template>

<script>
    export default {
        name: 'myMusic',
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
                    'title':'我的音乐',
                    'left':'更多',
                    'right':'正在播放'

                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>