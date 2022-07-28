<template>
    <div>
        <h4>当前的x的值是:{{sum}}</h4>
        <button @click="sum++">点我x+1</button>
        <hr>
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        <h2>薪资:{{job.j1.salary}}</h2>
        <button @click="name+='-'">修改姓名</button>
        <button @click="age++">修改年龄</button>
        <button @click="job.j1.salary+=88">修改薪资</button>
    </div>
</template>

<script>
  import { reactive,toRefs,ref,readonly,shallowReadonly } from "vue";
  export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:200000
                }
            }
        })

        // person = readonly(person)    //全部数据被保护
        person = shallowReadonly(person)    //只考虑第一层数据
        
        return{
            sum,
            ...toRefs(person)
            }
        }
    }
</script>

