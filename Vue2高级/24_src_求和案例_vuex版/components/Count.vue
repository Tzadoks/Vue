<template>
  <div class="Count">
    <h2>当前求和为：{{$store.state.sum}}</h2>
    <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementAdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
    export default {
        name:'Count',
        data() {
            return {
                num:1,//用户选择的数字
            }
        },
        methods: {
            increment(){
                // console.log(this)
                this.$store.commit('JIA',this.num)
            },
            decrement(){
                // this.sum -= this.num
                this.$store.commit('JIAN',this.num)
            },
            incrementAdd(){
                this.$store.dispatch('jiaOdd',this.num)
            },
            incrementWait(){
                this.$store.dispatch('jiaWait',this.num)
            }
        },
    }
</script>
<style scoped>
    button{
        margin-left: 10px;
    }
</style>