<template>
    <div class="friends">
        朋友
    </div>
</template>

<script>
    export default {
        name: 'friends',
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
                    'title':'朋友圈',
                    'left':'添加',
                    'right':'正在播放'

                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>