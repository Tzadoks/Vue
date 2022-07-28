<template>
  <div class="son">
    <h2>我是son组件[孙]{{car}}</h2>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name:'Son',

  setup(props) {
    let car = inject('car')
    return {car}
  }
}
</script>

<style>
  .son{
    background-color: orange;
    padding: 10px;
  }
</style>