import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import Router from 'vue-router';
import Hello from '@/components/Hello';
import Login from '@/components/Login';

Vue.use(Router);
Vue.use(VueMaterial);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
