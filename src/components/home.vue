<template>
<div class="content">
    <router-link 
    v-for="(name, index) in names" 
    :key="name" 
    :to="routes[index]"
    >
    {{ name }}
    </router-link>
</div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
        names:["会员等级","邀请用户"],
        routes: ["/membership", "/invite"], // 定义路由路径数组

        }
    }
}
</script>


<style lang="scss">
@import "../assets/styles.scss";
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.content a {
  margin: px2vw(10);
  background-color: gold;
  font-family: pingfang SC, sans-serif;
  font-size: px2vw(14);
  padding: px2vw(10);
  color: white;
  border-radius: px2vw(5);
  text-decoration: none; /* 移除下划线 */
  display: inline-block; /* 使链接表现得像块级元素 */
}
</style>