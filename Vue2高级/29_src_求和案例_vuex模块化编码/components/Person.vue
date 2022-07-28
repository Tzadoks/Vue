<template>
  <div class="person">
    <h1>人员列表</h1>
    <h3 style="color:yellow">Count组件的求和为:{{sum}}</h3>
    <h3>列表中第一个名字是:{{firestPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addPerson">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人</button>
    <ul v-for="person in personList" :key="person.id">
        <li>姓名:{{person.name}} 年龄:{{person.age}}</li>
    </ul>
  </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    import {nanoid} from 'nanoid'
    export default {
        name:'Person',
        data() {
            return {
                name: '',
            };
        },
        computed:{
            personList(){
                return this.$store.state.personOptions.personList
            },
            // ...mapState('personOptions',['personList']),
            sum(){
                return this.$store.state.countOptions.sum
            },
            firestPersonName(){
                return this.$store.getters['personOptions/firestPersonName']
            }

        },
        methods: {
            addPerson(){
                const personObj = {id:nanoid(),name:this.name,age:Math.floor(Math.random() * (100 - 1)) + 1}
                // console.log(personObj)
                this.$store.commit('personOptions/ADD_PERSON',personObj)
                this.name = ''
                // console.log(this.$store)
            },
            addWang(){
                const personObj = {id:nanoid(),name:this.name,age:Math.floor(Math.random() * (100 - 1)) + 1}
                this.$store.dispatch('personOptions/addPersonWang',personObj)
                this.name = ''
            },
            addPersonServer(){
                this.$store.dispatch('personOptions/addPersonServer')
                this.name = ''
            }
        },
    }
</script>

<style>
    .person{
        background-color: skyblue;
    }
</style>