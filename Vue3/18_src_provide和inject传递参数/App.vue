<template>
  <div class="app">
    <h2>我是App组件[祖],{{name}}----{{price}}</h2>
    <Child />
  </div>
</template>

<script>
import Child from './components/Child.vue'
import { reactive,toRefs,provide } from "vue";
export default {
  name:'App',
  components:{
    Child,
  },
  setup(props) {
    let car = reactive({
      name:'长虹',
      price:'40W'
    })

   provide ('car',car)  //传递数据
    return {...toRefs(car)}
  }
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>