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
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementAdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>

<script>
    import { mapState,mapGetters,mapMutations,mapActions } from "vuex";
    export default {
        name:'Count',
        data() {
            return {
                num:1,//用户选择的数字
            }
        },
        computed:{
            //借助mapstate生成计算属性，从state中读取数据。（对象写法）
            // ...mapState({sum:'sum',school:'school',subject:'subject'}),

            //借助mapstate生成计算属性，从state中读取数据。(数组写法)
            ...mapState(['sum','school','subject']),

            /* ********************************************************************** */

            //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
            // ...mapGetters({bigSum:'bigSum'})

            //借助mapGetters生成计算属性，从getters中读取数据。(数组写法)
            ...mapGetters(['bigSum'])
        },
        methods: {
            // increment(){
            //     // console.log(this)
            //     this.$store.commit('JIA',this.num)
            // },
            // decrement(){
            //     // this.sum -= this.num
            //     this.$store.commit('JIAN',this.num)
            // },

            //借助mapMutations生成对应的方法，方法中会调用mutations（对象写法）
            ...mapMutations({increment:'JIA',decrement:'JIAN'}),

            //借助mapMutations生成对应的方法，方法中会调用mutations（数组写法）
            // ...mapMutations(['JIA','JIAN']),


            /* ********************************************************************** */

            /* incrementAdd(){
                this.$store.dispatch('jiaOdd',this.num)
            },
            incrementWait(){
                this.$store.dispatch('jiaWait',this.num)
            }, */

            //借助mapActions生成对应的方法，方法中会调用dispatch（对象写法）
            ...mapActions({incrementAdd:'jiaOdd',incrementWait:'jiaWait'})

            //借助mapActions生成对应的方法，方法中会调用dispatch（数组写法）
            // ...mapActions(['jiaOdd','jiaWait'])

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