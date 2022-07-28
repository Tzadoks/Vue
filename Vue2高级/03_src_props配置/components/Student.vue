<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge+1}}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            msg:'我是一个尚硅谷的学生',
            myAge:this.age
        };
    },
    methods: {
      updateAge(){
        this.myAge++
      }
    },
    //第一种
    props:['name','sex','age']

    //第二种：接收的同时对数据进行类型限制
    /* props:{
      name:String,
      age:Number,
      sex:String
    } */

    //第三种
    //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
    /* props:{
      name:{
        type:String,  //name的类型
        required:true   //name是必要的
      },
      age:{
        type:Number,
        default:99  //默认值
      },
      sex:{
        type:String,
        required:true   //sex是必要的
      }
    } */

}
</script>