<template>
    <div>
        <!-- Vue3组件中的模板结构可以没有根标签 -->
        <h2>当前求和为{{sum}}</h2>
        <button @click="sum++">点我+1</button>
        <hr>
        <h2>当前的信息为：{{msg}}</h2>
        <button @click="msg+='!'">修改信息</button>
        <hr>
        <h2>姓名:{{person.name}}</h2>
        <h2>年龄:{{person.age}}</h2>
        <h2>薪资:{{person.job.j1.salary}}</h2>
        <button @click="person.name+='-'">修改姓名</button>
        <button @click="person.age++">修改年龄</button>
        <button @click="person.job.j1.salary+=88">修改薪资</button>
    </div>
</template>

<script>
  import { ref,reactive, watch, watchEffect } from "vue";
  export default {
    name: 'Demo',
    setup(props,context) {
      //数据
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:200000
                }
            }
        })

        //基本类型不能.value
        /* watch(sum,(newValue,oldValue)=>{
            console.log('sum的值变化了',newValue,oldValue)
        },{immediate:true}) */

        //函数体中用到谁就监视谁
        watchEffect(()=>{
            const x1 = sum.value
            const x2 = person.job.j1.salary
            console.log('watchEffect所指定的回调执行了')
        })

        return{
            sum,
            msg,
            person
            }
        }
    }
</script>

