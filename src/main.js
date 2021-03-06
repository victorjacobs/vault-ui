// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VAULT_URL;
axios.defaults.timeout = 2000;

Vue.use(VueMaterial);

// TODO extract to function
if (localStorage.auth) {
  store.dispatch('loginFromLocalStorage', localStorage.auth);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
