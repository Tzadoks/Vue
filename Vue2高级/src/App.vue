<template>
    <div class="app">
        <h1>我是Vue2写的效果</h1>
        <Demo msg="你好啊" school="尚硅谷">
            <template slot="test1">
                <span>北京</span>
            </template>
            <template slot="test2">
                <span>成都</span>
            </template>
        </Demo>
  </div>
</template>

<script>
    import Demo from './components/Demo'
    export default {
        name:'App',
        components:{Demo}
    }
</script>
<style>
    .app{
        background-color: gray;
    }
</style>