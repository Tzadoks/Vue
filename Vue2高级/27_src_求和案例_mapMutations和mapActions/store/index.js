//创建vuex中的核心Store

import Vue from 'vue'
//引入vuex
import Vuex from 'vuex';

//使用Vuex
Vue.use(Vuex)


//创建actios--响应组件中动作
const actions = {
    /* jia(context,value) {
        // console.log('actions调用了',context)
        context.commit('JIA',value)
    },
    jian(context,value){
        context.commit('JIAN',value)
    }, */
    jiaOdd(context,value) {
        if (context.state.sum % 2) {
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value) {
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    },
}

//创建mutations--用于操作数据(state)
const mutations = {
    JIA(state,value){
        console.log('$$$$$$$$$$',value)
        console.log('mutations调用了')
        state.sum += value
    },
    JIAN(context,value){
        state.sum -= value
    }
}

//创建state--用于存储数
const state = {
    sum:0,//当前的和
    school:'尚硅谷',
    subject:'前端'
}

//准备getters--用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//创建并暴露store
export default  new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});
