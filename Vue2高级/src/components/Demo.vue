<template>
    <div class="demo">
        <h2>我是Demo组件</h2>
        <slot/>
        <!-- {{msg}},{{school}} -->
    </div>
</template>

<script>
    export default {
        name:'demo',
        props:['msg','school'],
        mounted() {
            console.log(this)
        },
    }
</script>

<style>
    .demo{
        background-color: orange;
        padding: 10px;
    }
</style>