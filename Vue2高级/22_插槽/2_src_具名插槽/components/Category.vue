<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽 -->
    <slot name="center">
    		<h2>插槽的默认值，当没有插入内容时将会渲染该元素</h2>
	</slot>
    <slot name="footer">2</slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title']
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