<template>
<div class="container">
    <div class="header-wrapper">
        <div class="total-point">
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
                <MonthSelector @month-selected="handleMonthSelection" />
                <div class="points-summary">
                    <span class="points-gained">获得 <strong>{{ pointsGained }}</strong></span>
                    <span class="points-used">使用 <strong>{{ pointsUsed }}</strong></span>
                </div>
            </div>
        </div>
        <div class="list">
            <PointItem v-for="item in pointList" :key="item.time" :item="item" />
        </div>
    </div>
</div>
</template>
    
<script>
import MonthSelector from './MonthSelector.vue'
import PointItem from './PointItem.vue'

export default {
    name: 'PointDetail',
    components: {
        MonthSelector,
        PointItem
    },
    data() {
        return {
            totalPoint: 1000,
            pointsGained: 300,
            pointsUsed: 100,
            pointList: [
                { time: '2020-11-12', name: '邀请好友', point: '-100' },
                { time: '2020-01-12', name: '兑换商品', point: '+100' },
                { time: '2020-12-13', name: '做任务', point: '+50' },
                { time: '2020-12-14', name: '下单', point: '+30' },
                { time: '2020-12-15', name: '邀请好友', point: '-100' },
                { time: '2020-12-16', name: '兑换商品', point: '+100' },
                { time: '2020-12-17', name: '做任务', point: '+50' },
                { time: '2020-12-18', name: '下单', point: '+30' },
                { time: '2020-12-19', name: '邀请好友', point: '-100' },
                { time: '2020-12-12', name: '兑换商品', point: '+100' },
                { time: '2020-12-20', name: '做任务', point: '+50' },
                { time: '2020-12-25', name: '下单', point: '+30' },
                { time: '2020-12-21', name: '邀请好友', point: '-100' },
                { time: '2020-12-22', name: '兑换商品', point: '+100' },
                { time: '2020-12-31', name: '做任务', point: '+50' }
            ]
        };
    },
    methods: {
        handleMonthSelection(selectedMonth) {
            // 根据选择的月份更新数据
            console.log('Selected month:', selectedMonth);
            // 这里可以添加逻辑来更新 pointsGained 和 pointsUsed
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
}

.total-point {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: px2vw(120);
    margin-left: px2vw(20);
}

.total-point > img {
    width: px2vw(20);
    height: px2vw(20);
}

.total-point > div {
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

.space {
    width: 100%;
    height: px2vw(8);
    background: #F8F8F8;
}

.scroll {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
}

.section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.section > h1 {
    font-size: px2vw(16);
    font-weight: bold;
    color: #222222;
    margin-left: px2vw(20);
}

.options {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.options .month-selector {
    margin-left: px2vw(20);
}

.points-summary {
    font-size: px2vw(12);
    color: #999999;
    display: flex;
    align-items: center;
    margin-right: px2vw(20);
}

.points-summary .points-gained,
.points-summary .points-used {
    display: inline-flex;
    align-items: center;
}

.points-summary .points-gained {
    margin-right: px2vw(10);
}

.points-summary strong {
    color: #CE9253; 
    font-weight: bold;
    margin: 0 px2vw(4);
}

.list {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: px2vw(20);
}
</style>