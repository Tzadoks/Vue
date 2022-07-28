<template>
    <div>
      <!-- Vue3组件中的模板结构可以没有根标签 -->
      <h1>一个人的信息</h1>
      <h2>姓名:{{person.name}}</h2>
      <h2>年龄:{{person.age}}</h2>
      <button @click="test">测试触发一下Demo组件的Hello事件</button>
    </div>
</template>

<script>
  import { reactive, ref } from "vue";
  export default {
    name: 'Demo',
    props:['msg'],
    emits:['hello'],
    setup(props,context) {
        // console.log('-----------setup-------',props)
        // console.log('-----------setup-------',context)   
        //console.log('-----------setup-------',attrs)  //详单与Vue2中的$attrs
        //console.log('-----------setup-------',emit)     //触发自定义事件
        console.log('-----------setup-------',context.slots)    //插槽
      //数据
      let person = reactive({
        name:'张三',
        age:16,
      })

      function test() {
        context.emit('hello',666)
      }
      //返回一个对象（常用）
      return{
        person,
        test
      }
    }
  }
</script>

