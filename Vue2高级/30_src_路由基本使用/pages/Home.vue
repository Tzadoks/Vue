<template>
    <div>
        <h2>Home组件内容</h2>
    </div>
</template>

<script>
    export default {
        name:'Home',
        /* beforeDestroy() {
            console.log('我是Home组件,我要走了')
        }, */
        mounted() {
            console.log('Home组件挂载完毕',this)
            window.homeRoute = this.$route
            window.homeRouter = this.$router
        },
    }
</script>
