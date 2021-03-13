<template>
    <div>
        <button @click="$router.go(-1)">返回</button>
        <button @click="go()">按钮</button>
        我是首页{{$route.params.name}} {{$route.params.age}}
        <router-link to="/home/test1">Test1</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods:{
            go(){
                // this.$router.push('/mine')
                this.$router.push({path:'/mine',query:{name:'Jiaju'}})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>