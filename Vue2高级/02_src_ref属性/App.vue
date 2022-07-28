<template>
  <div>
    <h1 v-text="msg" ref="title"/>
    <button ref="btn" @click="showDom">点我输出上方的dom元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
//引入School组件
import School from './components/School'
export default {
    name:'App',
    components:{
        School
    },
    data() {
        return {
            msg: '欢迎学习Vue',
        };
    },
    methods: {
        showDom(){
            console.log(this.$refs.title)   //真实的Dom元素
            console.log(this.$refs.btn) //真实的Dom元素
            console.log(this.$refs.sch) //School组件的实例对象（vc）
        }
    },
    
}
</script>
