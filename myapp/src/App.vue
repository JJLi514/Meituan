<template>
  <div id="app">
    <!-- 美团外卖 -->
    <!-- <router-link to="/home">首页</router-link> -->
    <router-link :to="{name:'home',params:{name:'Jiaju',age:10}}">首页</router-link>
    <!-- <router-link to="/mine">我的</router-link> -->
    <router-link :to="{path:'/mine',query:{name:'Li',age:30}}">我的</router-link>
    <!-- 路径跳转 -->
    <router-link to="/mine/Rebecca/25">我的</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

</style>
