<template>
    <div class="container">     
        <Category title="美食">
            <template v-slot:center>
                <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="烧烤图片">
            </template>
            <template v-slot:footer>
                <a href="http://wwww.baidu.com">更多美食</a>
            </template>
        </Category>
        
        <Category title="游戏" >
            <ul slot="center">
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="http://wwww.baidu.com">单机游戏</a>
                <a href="http://wwww.baidu.com">网络游戏</a>
            </div>
        </Category>

        <Category title="小说" >
            <template  v-slot:center>
                <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>     
            </template>
            <template v-slot:footer>
                <div class="foot" >
                    <a href="http://wwww.baidu.com">经典</a>
                    <a href="http://wwww.baidu.com">热门</a>
                    <a href="http://wwww.baidu.com">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category'
    export default {
        name:'App',
        components:{Category},
        data() {
            return {
                foods: ['火锅','烧烤','小龙虾','牛排'],
                games: ['魔兽世界','穿越火线','QQ飞车','王者荣耀'],
                films: ['《活着》','《小时代》','《人间》','《价值》'],
            };
        },
    }
</script>
<style scoped>
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
    h4{
        text-align: center;
    }
</style>