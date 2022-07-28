<template>
    <div>
      <!-- Vue3组件中的模板结构可以没有根标签 -->
      <h1>一个人的信息</h1>
      <h2>姓名:{{person.name}}</h2>
      <h2>年龄:{{person.age}}</h2>
      <h3>工作种类:{{person.job.type}}</h3>
      <h3>工作薪水:{{person.job.salary}}</h3>
      <h3>爱好:{{person.hobby}}</h3>
      <!-- <h3>c的值是:{{person.job.a.b.c}}</h3> -->
      <button @click="changeInfo">修改人的信息</button>
    </div>
</template>

<script>
  import { reactive, ref } from "vue";
  export default {
    name: 'App',

    setup() {
      //数据
      let person = reactive({
        name:'张三',
        age:16,
        hobby:['抽烟','烫头','喝酒'],
        job:({
          type:'前端工程师',
          salary:'50k'
        })
      })

      //方法
      function changeInfo() {
        person.name = '李四',
        person.age = 39,
        person.job.type = 'CEO',
        person.job.salary = '50k'
        person.job.type = 'ceo'
        person.job.salary = '50k'
        person.hobby[0] = '学习'
      }
      //返回一个对象（常用）
      return{
        person,
        changeInfo,
      }
    }
  }
</script>

