<template>
    <div>
        <ul >
            <li v-for=" message in messageList" :key="message.id">
                <!-- 跳转路由并携带参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp; -->
                
                <!-- 跳转路由并携带params参数，to的对象写法  -->
                <router-link :to="{
                    name:'xiangqing',
                    params:{
                        id:message.id,
                        title:message.title
                    }
                }">
                    {{message.title}}
                </router-link>
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
    }
</script>