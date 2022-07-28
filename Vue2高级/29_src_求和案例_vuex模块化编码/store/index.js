//创建vuex中的核心Store

import Vue from 'vue'
//引入vuex
import Vuex from 'vuex';
import countOptions from './count'
import personOptions from './person'
//使用Vuex
Vue.use(Vuex)

//创建并暴露store
export default  new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
});
