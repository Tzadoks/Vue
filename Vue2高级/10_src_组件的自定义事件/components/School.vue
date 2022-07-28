<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学生地址：{{address}}</h2>
    <button @click="sendSchoolName">把学校名给app</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'尚硅谷',
            address:'北京朝阳'
        };
    },
    props:['getSchoolName'],
    methods: {
      sendSchoolName(){
        this.getSchoolName(this.name)
      }
    },
}
</script>

<style>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>