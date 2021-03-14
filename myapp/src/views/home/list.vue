<template>
    <div>
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="You got the bottom"
        @load="getData"
        >
        <ul class="list-container">
            <li class="shop-list" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
                <div class="img-box">
                    <img :src="item.img" alt />
                </div>
                <div class="info-box">
                    <div class="title">{{item.name}}</div>
                    <div class="rate-box">
                        <div>
                            <star :score="item.score"></star>
                            <span class="rate">{{item.score}}</span>
                            <span>Sold: {{item.num}}</span>
                        </div>
                        <div>
                            <span>{{item.minute}}mins</span>
                            <span class="left-line">{{item.distance}}</span>
                        </div>
                    </div>
                    <div class="distribution-box">
                        <span>MinFee ${{item.per_capita}}</span>
                        <span class="left-line">Fee ${{item.fee}}</span>
                        <span class="left-line">Average ${{item.price}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </van-list>
    </div>
</template>

<script>
import star from './../../components/star'
import {getStore} from '@/api/home'
    export default {
        data(){
            return {
                current:0,
                size:10,
                list:[],
                loading:false,
                finished:false,
                total:0
            }
        },
        components:{
            star
        },
        methods:{
            //Get List of Stores
            getData(){
                getStore({
                    current:this.current,
                    size:this.size
                }).then(res=>{
                    this.list = this.list.concat(res.data.list);
                    this.loading = false;
                    this.current++;
                    this.total = res.data.total;
                    if(this.list.length >= this.total){
                        this.finished = true
                    }
                });
            },
            goDetail(id){
                this.$router.push({path:'/detail',query:{id}})
            }
        },
        // created(){
        //     this.getData();
        // }
    };
</script>

<style lang="scss" scoped>
    .list-container{
        padding: 0 0.2rem;
        font-size: 16px;
        .shop-list{
            margin:0.2rem 0 0.5rem 0;
            display: flex;
            .img-box{
                width:1.52rem;
                height: 1.14rem;
                margin-right: 0.16rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .info-box{
                flex: 1;
                .title{
                    font-size: 0.32rem;
                    color:#333;
                    line-height: 1.4;
                    font-weight: 600;
                }
                .rate-box,.distribution-box{
                    display: flex;
                    color: #333;
                    line-height: 1.4;
                    font-family: mtsi-font;
                    font-size: 11px;
                }
                .rate-box{
                       justify-content: space-between;
                }
                .rate{
                    margin-right: 0.2rem;
                }
                .left-line::before{
                    content: "";
                    display: inline-block;
                    width: 1px;
                    height: 9px;
                    margin: 0 3px;
                    background: #ccc;
                }
            }
        }
    }
</style>