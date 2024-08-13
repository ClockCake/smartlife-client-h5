import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/home.vue'; 
import MembershipPage from './components/membership.vue'; 
import InviteUser from './components/invite.vue'; 
import PointDetail from './components/pointDetail.vue';
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
  },
  {
    path: '/point/detail',
    name: 'pointDetail',
    component: PointDetail
  }
];

const router = new Router({
  mode: 'history', // 使用 HTML5 History 模式
  routes
});

export default router;