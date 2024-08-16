<template>
<div class="container">
    <div class="header-wrapper">
        <div class="totalPoint">
            <img src="../assets/point_score.png" alt="">
            <div>{{ totalPoint }}</div>
        </div>
        <h1>当前总积分</h1>
        <img src="../assets/point_modal.png" alt="">
    </div>
    <div class="space"></div>
    <div class="scroll">
        <div class="section">
            <h1>积分明细</h1>
            <div class="options">
                <button>本月</button>
                <div>获得 300 使用 100</div>
            </div>
        </div>
        <!-- <div class="list">
            <div class="item" v-for="item in pointList" :key="item.time">
                <div class="time">{{ item.time }}</div>
                <div class="name">{{ item.name }}</div>
                <div class="point">{{ item.point }}</div>
            </div>
        </div> -->
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
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: linear-gradient(180deg, #F9EAD6 0%, white 10%);
    overflow-y: auto;
}
.header-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;

}
.totalPoint {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: auto;
    margin:px2vw(120) px2vw(20) 0 px2vw(20);

}

.totalPoint > img {
    width: px2vw(20);
    height: px2vw(20);
}
.totalPoint > div {
    font-size: px2vw(24);
    font-weight: bold;
    color: #222222;
    margin-left: px2vw(5);
}
.header-wrapper > h1 {
    font-size: px2vw(12);
    color: #999999;
    margin-top: px2vw(5);
    margin-left: px2vw(20);
}
.header-wrapper > img {
    position: absolute;
    right: px2vw(20);
    top: px2vw(20);
    width: px2vw(70);
    height: px2vw(70);
}
.container > .space {
    width: 100%;
    height: px2vw(8);
    background: #F8F8F8;
}
.scroll {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
}
.scroll > .section {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: px2vw(20);
}
.scroll > .section > h1 {
    font-size: px2vw(16);
    font-weight: bold;
    color: #222222;
}
.scroll > .section > .options {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.scroll > .section > .options > button {
    font-size: px2vw(14);
    color: #222222;
    background-color: white;
    border: none;
    outline: none;
}
.scroll > .section > .options > div {
    font-size: px2vw(12);
    color: #999999;
    text-align: right;
    // margin-right: pxw2vw(120);
}

</style>