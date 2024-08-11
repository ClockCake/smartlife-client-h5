<template>
    <div class="container">
       <div class="header">
            <img src="../assets/v.png" alt="vlogo">
            <div class="wrapper">
                <img src="https://robohash.org/test" alt="avatar">
                <div class="content">
                    <div class="row">
                        <h1>一级会员</h1>
                        <div class="level-wrapper">
                            <img src="../assets/member_level.png" alt="level">
                            <div class="level-indicator">LV.1</div>
                        </div>
                    </div>
                    <div class="progress-container">
                        <progress :value="progress" max="1"></progress>                    
                    </div>
                    <div class="next-level-container">
                        <span>还需200积分可升级</span>
                        <span>V.2</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="memberPrivileges">
            <h2>会员特权</h2>
            <div class="privilegesGrid">
                <div v-for="(membership, index) in memberships" :key="index" class="privilegeItem">
                    <img :src="membership.image" :alt="membership.name">
                    <h3>{{ membership.name }}</h3>
                    <p>{{ membership.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'MembershipPage',
    data() {
        return {
            progress: 0.5,
            memberships: [
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '窗纱',
                    desc: '免费更换2扇窗纱',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '维修检测',
                    desc: '免费水电基础维修检测',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '专属活动',
                    desc: '免费领取精美礼品一份',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '敬请期待',
                    desc: '更多权益敬请期待',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '敬请期待',
                    desc: '更多权益敬请期待',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '敬请期待',
                    desc: '更多权益敬请期待',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '敬请期待',
                    desc: '更多权益敬请期待',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '敬请期待',
                    desc: '更多权益敬请期待',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '敬请期待',
                    desc: '更多权益敬请期待',
                },
                {
                    image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '敬请期待',
                    desc: '更多权益敬请期待',
                }
            ]
        }
    },
}
</script>

<style lang="scss">
@import "../assets/styles.scss";
.container {
    display: flex;
    flex-direction: column;
    font-family: pingfang SC, sans-serif;
    overflow-y: auto;
    height: 100vh;
    background: linear-gradient(to right, #191815 0%, #252321 5%, #312925 100%);

}
.header {
    width: 100%;
    height: auto;
    padding-bottom: px2vw(40);
    position: relative;
}
.header > img {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
}
.wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: px2vw(150);
}
.wrapper > img {
    width: px2vw(54);
    height: px2vw(54);
    border-radius: 50%;
    background-color: gold;
    margin-left: px2vw(20);
}
.content {
    margin-left: px2vw(20);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: px2vw(10);
    height: px2vw(20);
}
.row > h1 {
    font-size: px2vw(15);
    font-weight: bold;
    color: white;
}
.level-wrapper {
    position: relative;
    margin-left: px2vw(10);
}
.row .level-wrapper > img {
    width: px2vw(50);
    height: px2vw(20);
}
.level-indicator {
    position: absolute;
    right: px2vw(6);
    top: 40%;
    transform: translateY(-50%);
    font-size: px2vw(11);
    font-weight: bold;
    color: white;
}
.progress-container {
    width: 70vw;
}
.progress-container progress {
    width: 100%;
    height: px2vw(5);
    border-radius: px2vw(2.5);
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    
    &::-webkit-progress-bar {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: px2vw(2.5);
    }
    &::-webkit-progress-value {
        background-color: #FACEA3;
        border-radius: px2vw(2.5);
    }
    &::-moz-progress-bar {
        background-color: #FACEA3;
        border-radius: px2vw(2.5);
    }
}
.next-level-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: px2vw(3);
    width: 100%
}
.next-level-container > span {
    font-size: px2vw(10);
    color: white;
}

// 新增的会员特权样式
.memberPrivileges {
    padding: px2vw(15);
    background-color: white;
    border-radius: 16px 16px 0 0; // 左上角和右上角为16px圆角，右下角和左下角为0

}
.memberPrivileges h2 {
    font-size: px2vw(18);
    font-weight: bold;
}
.privilegesGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: px2vw(15);
}
.privilegeItem {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
    align-items: center;
    text-align: center;
}
.privilegeItem img {
    width: px2vw(80);
    height: px2vw(80);
    
}
.privilegeItem h3 {
    font-size: px2vw(14);
    font-weight: bold;
    margin-bottom: px2vw(5); /* 将此值调整为更小的值以减少间距 */


}
.privilegeItem p {
    font-size: px2vw(12);
    color: #666;
    margin-top: 0px;
    margin-top: px2vw(3); /* 将此值调整为更小的值以减少间距 */

}
</style>