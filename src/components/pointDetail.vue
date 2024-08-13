<template>
<div class="container">
    <div class="header-wrapper">
        <div class="totalPoint">
            <img src="../assets/point_score.png" alt="">
            <div class="point">总积分: {{ totalPoint }}</div>
        </div>
        <h1>当前总积分</h1>
        <img src="../assets/point_modal.png" alt="">
    </div>
</div>
</template>

<script>

export default {
    name: 'PointDetail',
    data() {
        return {
            totalPoint: 1000,
            getPoint: 100,
            usedPoint: 100,
            pointList:[
                {
                    time: '2020-12-12',
                    name: '邀请好友',
                    point: '+100'
                },
                {
                    time: '2020-12-12',
                    name: '兑换商品',
                    point: '+100'
                },
                {
                    time: '2020-12-12',
                    type: '做任务',
                    point: '+100'
                },
                {
                    time: '2020-12-12',
                    type: '下单',
                    point: '+100'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./styles.scss";
.container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: linear-gradient(180deg, #F9EAD6 0%, white 10%);
    overflow-y: auto;
}
.header-wrapper {
    position: relative;
    width: 100%;
    height: px2vw(200);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.header-wrapper h1 {
    font-size: px2vw(12);
    color: #999999;
    text-align: center;
}

</style>