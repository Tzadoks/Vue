<template>
  <div class="app">
    <h2>我是App组件[祖],{{name}}----{{price}}</h2>
  </div>
</template>

<script>
  import { ref,reactive,toRefs, readonly,isRef,isReadonly,isProxy,isReactive } from "vue";
  export default {
    name:'App',
    setup(props) {
      let car = reactive({
        name:'长虹',
        price:'40W'
      })
      let sum = ref(0)
      let car2 = readonly(car)

      console.log(isReactive(car))
      console.log(isRef(sum))
      console.log(isReadonly(car2))
      console.log(isProxy(car2))
      return {...toRefs(car),sum,car2}
    }
  }
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>