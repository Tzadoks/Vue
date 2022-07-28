<template>
  <div class="app">
    <h2>我是App组件</h2>

    <Suspense>
      <template v-slot:default>
        <div>
          <Child />
        </div>
      </template>
      <template v-slot:fallback>
        <div>
          <h3>稍等,加载中</h3>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from './components/Child'   //静态引入
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import('./components/Child'))  //异步引入
export default {
  name:'App',
  components:{
    Child,
  },
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>