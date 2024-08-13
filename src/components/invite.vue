<template>
    <div class="container">
        <div class="header-wrapper">
            <img class="header" src="../assets/invite_bg.png" alt="">
            <img class="header_title" src="../assets/invite_title.png" alt="">
            <div class="packet-wrapper">
                <img class="header_packet" src="../assets/invite_packet.png" alt="">
                <div class="small">每邀请1名极家汇新用户注册登录您得</div>
                <div class="score">344</div>
                <div class="unit">极家汇积分</div>
                <button>立即邀请</button>
            </div>
            <img class="left_goldcoin" src="../assets/invite_left_goldcoin.png" alt="">
            <img class="right_goldcoin" src="../assets/invite_right_goldcoin.png" alt="">
            <img class="figer" src="../assets/invite_ finger.png" alt="">
        </div>
        <div class="middle-wrapper">
            <h1>玩法攻略</h1>
            <div class="middle-steps">
                <template v-for="(item, index) in steps">
                <div v-if="item.name" :key="index" class="step">
                    <div class="image-container">
                    <img :src="getImageUrl(item.image)" :alt="item.name">
                    </div>
                    <div class="text-container">
                    <div class="row-name">
                        <div class="indexDot">{{ item.index }}</div>
                        <div class="name">{{ item.name }}</div>
                    </div>
                    <div class="desc">{{ item.desc }}</div>
                    </div>
                </div>
                <div v-else :key="'arrow-'+index" class="arrow-container">
                    <img :src="getImageUrl(item.image)" class="arrow" alt="箭头">
                </div>
                </template>
            </div>
        </div>
        <div class="bottom-wrapper">
            <h1>已邀请好友</h1>
            <div class="invite-list">
                <div v-for="(item, index) in inviteList" :key="index" class="invite-item">
                    <img :src="item.avatar" alt="avatar">
                    <div class="text-item">
                        <div class="name">{{ item.name }}</div>
                        <div class="time">{{ item.time }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InviteUser',
    data() {
        return {
            steps: [
                {
                    image: 'invite_step1.png',
                    name: '邀请好友',
                    desc: '分享活动页给好友',
                    index: 1
                },
                {
                    image: 'invite_arrow.png'
                },
                {
                    image: 'invite_step2.png',
                    name: '好友完成',
                    desc: '好友注册登录APP',
                    index: 2
                },
                {
                    image: 'invite_arrow.png'
                },
                {
                    image: 'invite_step3.png',
                    name: '领取奖励',
                    desc: 'APP查看获得积分',
                    index: 3
                },
            ],
            inviteList:[
                {
                    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '小明',
                    time: '2020-12-12',
                },
                {
                    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '小红',
                    time: '2020-12-12',
                },
                {
                    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '小刚',
                    time: '2020-12-12',
                },
                {
                    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '小李',
                    time: '2020-12-12',
                },
                {
                    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
                    name: '李XXX',
                    time: '2020-12-12',
                },
            ]
        }
    },
    methods: {
    getImageUrl(name) {
      return require(`../assets/${name}`);
    }
  }
    
}
</script>

<style lang="scss" scoped>
@import "./styles.scss";
.container {
    min-height: 100%;
    overflow-y: auto;
    background-color: #FFF1F1;
    display: flex;
    flex-direction: column;
}

.header-wrapper {
    position: relative;
    width: 100%;

}

.header {
    width: 100%;
    height: auto;
    display: block;
}

.header_title {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: auto;
}
.packet-wrapper {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    text-align: center;
}

.header_packet {
    width: 100%;
    height: px2vw(300);
}

.small {
    position: absolute;
    top: 6%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    color: #631814;
    font-size: pw2vw(14);
    font-weight: bold;
    text-align: center;
}
 .score {
    position: absolute;
    top: 13%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    color: #631814;
    font-size: px2vw(70);
    color: #F1223F;
    text-align: center;
}
.unit {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    color: #631814;
    font-size: px2vw(14);
    font-weight: bold;
    text-align: center;
}
.packet-wrapper button {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: px2vw(48);
    background: linear-gradient(to right, #FFFCE3 30%,  #FFF49E 70%);
    color: #F12222;
    font-size: px2vw(18);
    font-weight: bold;
    border-radius: px2vw(24);
    border: none;
    border-radius: px2vw(20);
}

.left_goldcoin {
    position: absolute;
    bottom: 5%;
    left: 0;
    width: px2vw(40);
    height: px2vw(70);
}

.right_goldcoin {
    position: absolute;
    top: 70%;
    right: 0;
    width: px2vw(40);
    height: px2vw(40);
}
.figer {
    position: absolute;
    bottom: 0;
    right: 10%;
    width: px2vw(60);
    height: px2vw(60);
}
.middle-wrapper {
    margin-top: px2vw(16);
    margin-left: px2vw(16);
    margin-right: px2vw(16);
    height: auto;
    border-radius: px2vw(16);
    background: linear-gradient(to bottom, #FFE0DC 10%, #FFFFFF 70%);
}

.middle-wrapper h1 {
    font-size: px2vw(18);
    font-weight: bold;
    color: #631814;
    margin-top: px2vw(16);
}
.middle-steps {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: px2vw(16);
  margin-left: px2vw(16);
  margin-right: px2vw(16);
  height: px2vw(100);
}

.middle-steps .step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: px2vw(80);
}

.middle-steps .image-container {
  height: px2vw(40);
  display: flex;
  align-items: center;
}

.middle-steps .image-container img {
  width: px2vw(40);
  height: px2vw(40);
}

.middle-steps .text-container {
  text-align: center;
}

.middle-steps .arrow-container {
  display: flex;
  align-items: center;
  height: px2vw(40);
}

.middle-steps .arrow {
  width: px2vw(12);
  height: px2vw(10);
  margin: 0 px2vw(10);
}

.middle-steps .row-name {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: px2vw(8);
}
.middle-steps .row-name .indexDot {
  font-size: px2vw(10);
  font-weight: bold;
  color: white;
  width: px2vw(14);
  height: px2vw(14);
  border-radius: 50%;
  background-color: #631814;
  text-align: center;

}
.middle-steps .step .name {
  font-size: px2vw(12);
  font-weight: bold;
  color: #631814;
  margin-left: px2vw(4);
}

.middle-steps .step .desc {
  font-size: px2vw(10);
  color: #967775;
  margin-top: px2vw(4);
}
.bottom-wrapper {
    margin-top: px2vw(16);
    margin-left: px2vw(16);
    margin-right: px2vw(16);
    margin-bottom: px2vw(16);
    height: auto;
    border-radius: px2vw(16);
    background: linear-gradient(to bottom, #FFE0DC 10%, #FFFFFF 25%);
    
}
.bottom-wrapper h1 {
    font-size: px2vw(18);
    font-weight: bold;
    color: #631814;
    margin-top: px2vw(16);
}
.bottom-wrapper .invite-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: px2vw(16);
    height: auto;
}
.bottom-wrapper .invite-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: px2vw(10);
    margin-bottom: px2vw(10);
    height: px2vw(40);
}
.bottom-wrapper .invite-item img {
    width: px2vw(40);
    height: px2vw(40);
    border-radius: 50%;
}
.bottom-wrapper .text-item {
    margin-left: px2vw(10);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.bottom-wrapper .text-item .name {
    font-size: px2vw(14);
    font-weight: bold;
    color: #631814;
}
.bottom-wrapper .text-item .time {
    font-size: px2vw(10);
    color: #967775;
}

</style>