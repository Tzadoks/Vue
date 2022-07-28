export default {
    install(Vue){

        //全局过滤器
        Vue.filter('mySlice',function(value){       //全局过滤器
            return value.slice(0,4)
        })

        // 全局的自定义指令
        Vue.directive('fbind',{ 
            //指令与元素成功绑定时被调用
            bind(element,binding){
            console.log('big',this)//注意此处的this是window，而不是vm实例
            element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
            //指令所在的模板被重新解析时
            update(element,binding){
                element.value = binding.value
            }
        })

        //定义混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                };
            },
        })

        //给Vue原型上添加一个方法（vm和vc都能用）
        Vue.prototype.hello = () =>{alert('你好啊')}
    }

}

