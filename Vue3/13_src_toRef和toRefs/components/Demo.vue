<template>
    <div>
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        <h2>薪资:{{job.j1.salary}}</h2>
        <button @click="name+='-'">修改姓名</button>
        <button @click="age++">修改年龄</button>
        <button @click="job.j1.salary+=88">修改薪资</button>
    </div>
</template>

<script>
  import { reactive,toRef, toRefs } from "vue";
  export default {
    name: 'Demo',
    setup() {
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:200000
                }
            }
        })

        // const name1 = person.name
        // console.log('$$$',name1)

        // const name2 = toRef(person,'name')
        // console.log('###',name2)

        // const salary = toRefs(person.job.j1,'salary')
        // console.log(salary)

        const x = toRefs(person)
        console.log('$$$',x)

        return{
            // name:toRef(person,'name'),
            // age:toRef(person,'age'),
            // salary:toRef(person.job.j1,'salary')

            ...toRefs(person)

            }
        }
    }
</script>

