<template>
  <div class="Count">
    <h2>当前求和为：{{sum}}</h2>
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
                sum:0,//当前的和
            }
        },
        methods: {
            increment(){
                this.sum += this.num
                console.log(typeof this.num)
            },
            decrement(){
                this.sum -= this.num
            },
            incrementAdd(){
                if (this.sum % 2) {
                this.sum += this.num
                    
                }
            },
            incrementWait(){
                setTimeout(() => {
                this.sum += this.num
                }, 500);
            }
        },
    }
</script>
<style scoped>
    button{
        margin-left: 10px;
    }
</style>