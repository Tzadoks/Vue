<template>
    <div>
        <h4>当前的x的值是:{{sum}}</h4>
        <button @click="sum++">点我x+1</button>
        <hr>
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        <h2>薪资:{{job.j1.salary}}K</h2>
        <h2 v-show="person.car">座驾信息:{{person.car}}</h2>
        <button @click="name+='-'">修改姓名</button>
        <button @click="age++">修改年龄</button>
        <button @click="job.j1.salary+=88">修改薪资</button>
        <button @click="showRawPerson">输出最原始的person</button>
        <button @click="addCar">添加坐骑</button>
        <button v-show="person.car" @click="person.car.name += '!'">换车</button>
        <button v-show="person.car" @click="changePrice">换价格</button>
    </div>
</template>

<script>
  import { reactive,toRefs,ref,toRaw,markRaw } from "vue";
  export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        function showRawPerson() {
            const p = toRaw(person) //toRaw只能处理reactive所提供的的数据
            console.log(p)
        }
        function addCar() {
            let car = {name:'奔驰',price:40}
            person.car = markRaw(car)   //
        }

        function changePrice(params) {
            person.car.price++
            console.log(person.car.price)
        }
        
        return{
            sum,
            person,
            ...toRefs(person),
            showRawPerson,
            addCar,
            changePrice
            }
        }
    }
</script>

