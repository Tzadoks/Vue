<template>
    <div>
      <!-- Vue3组件中的模板结构可以没有根标签 -->
      <h1>一个人的信息</h1>
      姓: <input type="text" placeholder="姓" v-model="person.firstName">
      <br>
      <br>
      名: <input type="text" placeholder="名" v-model="person.lastName">
      <br>
      <br>
      <span>全名:{{person.fullName}}</span>
      <br>
      <br>
      全名:<input type="text" v-model="person.fullName">
    </div>
</template>

<script>
  import { reactive, computed } from "vue";
  export default {
    name: 'Demo',
    //Vue2写法
    /* computed:{
        funllName(){
            return this.person.firstName + '-' + this.person.lastName
        }
    }, */
    setup(props,context) {
      //数据
      let person = reactive({
        firstName:'张',
        lastName:'三',
      })

    //计算属性--简写（没有考虑计算属性被修改的情况）
    /* person.funllName = computed(() =>{
        return person.firstName + '-' + person.lastName
    }) */

    //计算属性--完整写法（没有考虑计算属性被修改的情况）
    person.fullName = computed({
        get(){
            return person.firstName + '-' + person.lastName
        },
        set(value){
            const nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
    })
    
    return{
        person,
      }
    }
  }
</script>

