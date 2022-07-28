<template>
    <div>
        <Test/>
        <Test_过渡效果/>
        <Test_集成第三方库动画 />
    </div>
</template>

<script>
//引入School组件
import Test from './components/Test.vue'
import Test_过渡效果 from './components/Test_过渡效果.vue'
import Test_集成第三方库动画 from './components/Test_集成第三方库动画.vue'

export default {
    name:'App',
    components:{Test,Test_过渡效果,Test_集成第三方库动画 },
}
</script>
