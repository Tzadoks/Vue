<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games">我是默认的一些内容</slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
            return {
                games: ['魔兽世界','穿越火线','QQ飞车','王者荣耀'],
            };
        },
    }
</script>

<style scoped>
    .category{
        width: 200px;
        height: 300px;
        background-color: skyblue;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>