<template>
    <ul class="todo-main">
        <transition-group name="todo" appear>
            <MyItem 
                v-for="todoObj in todos" 
                :key="todoObj.id" 
                :todo="todoObj" 
            />
        </transition-group>
    </ul>
</template>

<script>
    import MyItem from './MyItem.vue'
    export default {
        name:'MyList',
        components:{MyItem},
        //声明接收app传递过来的数据
        props:['todos']
    }
</script>

<style>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }

    /* 动画效果 */
    .todo-enter-active{
        animation: atguigu 0.5s linear;
    }

    .todo-leave-active{
        animation:atguigu 0.5s linear reverse;
    }

    @keyframes atguigu {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>