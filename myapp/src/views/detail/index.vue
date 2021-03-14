<template>
    <div>
        <seller-header :seller="seller"></seller-header>
        <van-tabs v-model="active" sticky swipeable animated color="#ffda41">
            <van-tab title="Menu">
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
                <h3>111</h3>
            </van-tab>
            <van-tab title="Rate">Content 2</van-tab>
            <van-tab title="Store">Content 3</van-tab>
        </van-tabs>
    </div>
</template>

<script>
import {getStoreById} from '@/api/detail.js'
import sellerHeader from "./seller-header"
    export default {
        data(){
            return{
                seller:[],
                active:0
            }
        },
        components:{
            sellerHeader
        },
        methods:{
            getStoreMsg(){
                //Request id = this.$route.query.id
                getStoreById({id:this.$route.query.id}).then(res=>{
                    this.seller = res.data;
                })
            }
        },
        created(){
            this.getStoreMsg();
        }
    }
</script>

<style lang="scss" scoped>

</style>