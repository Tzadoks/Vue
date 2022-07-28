<template>
    <div>
      <Demo @hello="showHelloMsg" msg="你好">
        <template v-slot:test>
          <span>尚硅谷</span>
        </template>
      </Demo>
    </div>
</template>

<script>
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components:{
      Demo,
    },
    setup() {
      
      function showHelloMsg(value){
        alert( `你好啊,你触发了hello事件,我收到的参数时:${value}!`)
      }
      return{
        showHelloMsg,
      }
    }
  }
</script>

