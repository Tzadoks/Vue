<template>
    <div>
      <input type="text" v-model="keyWord">
      <h3>{{keyWord}}</h3>
    </div>
</template>

<script>
  import { ref,customRef } from "vue";
  export default {
    name: 'App',
    setup() {
      //自定义ref
      function myRef(params,delay) {
        let timer
        return customRef((track,trigger)=>{
          return {
            get() {
                track() //通知Vue追踪value的变化， 
                return params //两次读取 
            },
            set(newValue){
              clearTimeout(timer)
              timer = setTimeout(() => {
                params = newValue
                trigger() //通知vue重新解析模板
              }, delay);
            }
          }
        })

      }
      // let keyWord = ref('hello')  //使用vue提供的内置ref
      let keyWord = myRef('hello',500)
      return {keyWord,myRef}
    }
  }
</script>

