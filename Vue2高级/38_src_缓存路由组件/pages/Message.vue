<template>
    <div>
        <ul >
            <li v-for=" message in messageList" :key="message.id">
                <!-- 跳转路由并携带参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp; -->
                
                <!-- 跳转路由并携带params参数，to的对象写法  -->
                <router-link :to="{
                    //path:'/home/message/detail', 
                    name:'xiangqing',
                    query: {
                        id: message.id,
                        title: message.title
                    },
                }">
                    {{message.title}}
                </router-link>
                <button @click="pushShow(message)">push查看</button>
                <button @click="repaleShow(message)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:'Message',
        data() {
            return {
                messageList:[
                    {id:nanoid(),title:'消息001'},
                    {id:nanoid(),title:'消息002'},
                    {id:nanoid(),title:'消息003'},
                    // console.log(this)
                ]
            };
        },
        methods: {
            pushShow(message){
                this.$router.push({
                    name:'xiangqing',
                    query: {
                        id: message.id,
                        title: message.title
                    }
                })
            },
            repaleShow(message){
                this.$router.replace({
                    name:'xiangqing',
                    query: {
                        id: message.id,
                        title: message.title
                    }
                })
            },
        },
        beforeDestroy() {
            console.log('Message组件即将被销毁了')
        },
    }
</script>