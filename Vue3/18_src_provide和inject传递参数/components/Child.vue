<template>
  <div class="Child">
    <h2>我是Child组件[子]{{car}}</h2>
    <Son/>
  </div>
</template>

<script>
import Son from './Son'
import { inject } from "vue";

export default {
  name:'Child',
  /* setup(props) {
    let car = inject('car')
    return {car}
  }, */

  components:{Son}

}
</script>

<style>
  .Child{
    background-color: skyblue;
    padding: 10px;
  }
</style>