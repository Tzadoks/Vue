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
  import { ref,reactive, watch } from "vue";
  export default {
    name: 'Demo',
    //Vue2Watch写法
    /* watch: {
        //简写
        sum(newValue,oldValue){
           console.log('sum的值变化了',newValue,oldValue) 
        }，
        //完整写法
        sum:{
            immediate:true,
            deep:true,
            hanlder(newValue,oldValue){
                console.log('sum的值变化了',newValue,oldValue)
            }
        }
    }, */

    setup(props,context) {
      //数据
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = ref({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:200000
                }
            }
        })

        //基本类型不能.value
        watch(sum,(newValue,oldValue)=>{
            console.log('sum的值变化了',newValue,oldValue)
        })

        //两种方式 
        //一、检测person对象的value值，
        watch(person.value,(newValue,oldValue)=>{
            console.log('person的值变化了',newValue,oldValue)
        })

        //二、开启深度监视
        watch(person,(newValue,oldValue)=>{
            console.log('person的值变化了',newValue,oldValue)
        },{deep:true})

        return{
            sum,
            msg,
            person
            }
        }
    }
</script>

