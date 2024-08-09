import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/home.vue'; // 假设你有一个首页组件
import MembershipPage from './components/membership.vue'; // 使用与组件定义一致的名字
import InviteUser from './components/invite.vue'; // 使用与组件定义一致的名字
Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/membership',
    name: 'membershipPage',
    component: MembershipPage
  },
  {
    path: '/invite',
    name: 'inviteUser',
    component: InviteUser
  }
];

const router = new Router({
  mode: 'history', // 使用 HTML5 History 模式
  routes
});

export default router;