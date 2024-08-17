<template>
<div class="point-item">
    <div class="name-time">
    <div class="name">{{ item.name }}</div>
    <div class="time">{{ item.time }}</div>
    </div>
    <div class="point">{{ item.point }}</div>
</div>
</template>
  
<script>
export default {
name: 'PointItem',
props: {
    item: {
    type: Object,
    required: true
    }
}
}
</script>


<style lang="scss" scoped>
@import "./styles.scss";
.point-item {
    height: auto;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: px2vw(10);
    .name-time {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .name {
        font-size: px2vw(14);
        color: #222222;
        margin-left: px2vw(20);
        }

        .time {
        font-size: px2vw(12);
        color: #999999;
        margin-left: px2vw(20);
        }
    }

    .point {
        font-size: px2vw(14);
        color: #999999;
        margin-right: px2vw(20);
    }
}
  </style>