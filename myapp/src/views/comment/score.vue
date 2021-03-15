<template>
    <div class="score-box">
        <div class="seller-score">
            <div class="num">{{score}}</div>
            <div class="desc">Store Rate</div>
        </div>
        <div class="pack-score">
            <div class="item">
                <span>Flavor</span>
                <star :score="flavor"></star>
                <span>{{flavor}}</span>
            </div>
            <div class="item">
                <span>Packing</span>
                <star :score="packing"></star>
                <span>{{packing}}</span>
            </div>
        </div>
        <div class="deliver-score">
            <div class="num">{{delivery}}</div>
            <div class="desc">Deliver Rate</div>
        </div>
    </div>
</template>

<script>
import star from '@/components/star'
    export default {
        components:{
            star
        },
        props:["delivery","score","packing","flavor"]
    }
</script>

<style lang="scss" scoped>
    .score-box{
        font-size: 12px;
        display: flex;
        background: #fff;
        padding: 0.3rem;
        .seller-score,.deliver-score{
            width: 1.86rem;
            flex: 0 0 1.86rem;
            text-align: center;
            .num{
                font-size: 0.54rem;
                height: 0.6rem;
                line-height: 0.6rem;
                font-weight: 600;
            }
        }
        .deliver-score{
            border-left: 1px solid #ccc;
            .num{
                color:#999;
            }
        }
        .seller-score{
            .num{
                color:#ffb000;
            }
        }
        .pack-score{
            flex: 1;
            font-size: 0.26rem;
            color:#666;
            .item{
                margin: 0.06rem 0 0.2rem;
            }
        }
    }
</style>