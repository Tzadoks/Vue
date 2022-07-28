<template>
  <div class="Count">
    <h2>当前求和为：{{sum}}</h2>
    <h2>当前求和放大10倍:{{bigSum}}</h2>
    <h3>我在{{school}},学习{{subject}}</h3>
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
    import { mapState } from "vuex";
    import { mapGetters } from "vuex";
    export default {
        name:'Count',
        data() {
            return {
                num:1,//用户选择的数字
            }
        },
        computed:{
            //靠程序员自己亲自去写计算属性
            /* sum(){
                return this.$store.state.sum
            },
            school(){
                return this.$store.state.school
            },
            subject(){
                return this.$store.state.subject
            },*/

            //借助mapstate生成计算属性，从state中读取数据。（对象写法）
            // ...mapState({sum:'sum',school:'school',subject:'subject'}),

            //借助mapstate生成计算属性，从state中读取数据。(数组写法)
            ...mapState(['sum','school','subject']),

            /* ********************************************************************** */
            
            /* bigSum(){
                return this.$store.getters.bigSum
            }  */

            //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
            // ...mapGetters({bigSum:'bigSum'})

            //借助mapGetters生成计算属性，从getters中读取数据。(数组写法)
            ...mapGetters(['bigSum'])
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
        mounted() {
            const x = mapState({
                sum:'sum',
                school:'school',
                subject:'subject'
            })
            console.log(x)
        },
    }
</script>
<style scoped>
    button{
        margin-left: 10px;
    }
</style>