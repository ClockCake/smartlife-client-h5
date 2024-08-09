<template>
<div class="container">
   <div>
    <img src="../assets/v.png" alt="vlogo">
    <div class="warpper">
        <img src="https://robohash.org/test" alt="avatar">
        <div class="content">
            <h1>一级会员</h1>
            <img src="../assets/member_level.png" alt="level">
        </div>
    </div>
   </div>

</div>
</template>

<script>
export default {
    name: 'MembershipPage'
}

</script>



<style lang="scss">
@import "../assets/styles.scss";
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: pingfang SC, sans-serif;
    overflow-y: auto;

}
.container > div {
    background: linear-gradient(to right, #191815 0%, #252321 5%, #312925 100%);
    width: 100vw;
    height: px2vw(300);
    position: relative;

}
.container > div > img {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
}
.container .warpper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    top: px2vw(150);


}
.container .warpper > img {
  width: px2vw(54);
  height: px2vw(54);
  border-radius: 50%;
  background-color: gold;
  margin-left: px2vw(20);
}
.warpper .content {
    margin-left: px2vw(20);
    position: relative;  // 添加相对定位
    height: px2vw(70);   // 设置与头像相同的高度
    min-width: px2vw(150); // 根据需要调整这个值

}
.content h1 {
    font-size: px2vw(15);
    font-weight: bold;
    color: white;
    position: absolute;  // 设置绝对定位
    top: 0;              // 将 h1 移到顶部
    left: 0;             // 将 h1 移到左侧
    transform: translateY(-50%);  // 微调位置，使文本视觉上与头像顶部对齐
    white-space: nowrap; // 防止文本换行

}
.content img {
    position: absolute;
    top: 50%;
    left: calc(100% + px2vw(10)); // 放置在 h1 右侧，并留出一些间距
    transform: translateY(-50%); // 垂直居中
    width: px2vw(50);
    height: px2vw(20);
}
</style>