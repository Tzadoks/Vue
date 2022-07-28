
import axios from 'axios'
import {nanoid} from 'nanoid'
//人员管理功能相关的配置
export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context){
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response =>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data,age:Math.floor(Math.random() * (100 - 1)) + 1})
                },
                error =>{
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了')
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三',age:18},
            {id:'002',name:'李四',age:45},
            {id:'003',name:'王五',age:67},
        ]
    },
    getters:{
        firestPersonName(state){
            return state.personList[0].name
        }
    }
}
