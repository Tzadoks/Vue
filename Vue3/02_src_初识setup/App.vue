<template>
    <div>
      <!-- Vue3组件中的模板结构可以没有根标签 -->
      <h1>一个人的信息</h1>
      <h2>姓名:{{name}}</h2>
      <h2>年龄:{{age}}</h2>
      <h2>性别:{{sex}}</h2>
      <h2>a:{{a}}</h2>
      <button @click="sayHello">说话(Vue3所配置的--seyHello)</button>
      <br>
      <br>
      <button @click="seyWelcome">说话(Vue2所配置的--seyWelcome)</button>
      <br>
      <br>
      <button @click="test1">在vue2中读取vue3的数据</button>
      <br>
      <br>
      <button @click="test2">在vue3中读取vue2的数据</button>
    </div>
</template>

<script>
  //引入渲染函数
  // import {h} from 'vue'
  export default {
    name: 'App',
    data() {
      return {
        sex: '男',
        a:100
      };
    },
    methods: {
      seyWelcome(){
        alert('欢迎来到尚硅谷学习')
      },
      test1(){
        console.log('----------Vue2--------')
        console.log(this.sex)
        console.log(this.name)
        console.log(this.age)
        console.log(this.sayHello)
      }
    },
    //测试setup
    setup() {
      //数据
      let name = '张三'
      let age = 18
      let a = 200

      //方法
      function sayHello() {
        alert(`我叫${name},${age}岁了,你好啊!`)
      }

      function test2(){
        console.log('----------Vue3--------')
        console.log(name)
        console.log(age)
        console.log(sayHello)
        console.log(this.sex)
        
      }

      //返回一个对象（常用）
      return{
        name,
        age,
        sayHello,
        a
      }

      //返回一个函数（渲染函数）
      // return ()=> { return h('h1','尚硅谷')}
    }
  }
</script>

