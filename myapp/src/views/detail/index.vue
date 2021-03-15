<template>
    <div class="scrollBox">
        <div>
            <seller-header :seller="seller"></seller-header>
            <van-tabs v-model="active" sticky animated color="#ffda41">
                <van-tab title="Order">
                    <order></order>
                </van-tab>
                <van-tab title="Rate">
                    <comment></comment>
                </van-tab>
                <van-tab title="Store">
                    <seller :seller="seller"></seller>
                </van-tab>
            </van-tabs>
        </div>
        <cart :seller="seller"></cart>
    </div>
</template>

<script>
import {getStoreById} from '@/api/detail.js'
import sellerHeader from "./seller-header"
import order from "./order"
import BScroll from 'better-scroll'
import cart from './cart'
import comment from './../comment'
import seller from './../seller'
    export default {
        data(){
            return{
                seller:[],
                active:0,
                scrollBox:null
            }
        },
        components:{
            sellerHeader,
            order,
            cart,
            comment,
            seller
        },
        methods:{
            getStoreMsg(){
                //Request id = this.$route.query.id
                getStoreById({id:this.$route.query.id}).then(res=>{
                    this.seller = res.data;
                })
            }
        },
        mounted(){
            this.scrollBox = new BScroll('.scrollBox',{
                bounce:false,
                click:true
            })
        },
        created(){
            this.getStoreMsg();
        }
    }
</script>

<style lang="scss" scoped>
    .scrollBox{
        height: 100vh;
    }
</style>