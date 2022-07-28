//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';
//关闭Vue的生产提示
Vue.config.productionTip = false

//不推荐使用vc形式安装全局事件
/* const Demo = Vue.extend({})
const d = new Demo() */

//创建vm
new Vue({
    el: '#app',
    render: (h) => h(App),
});