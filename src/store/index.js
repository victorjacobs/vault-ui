import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  sealStatus: {},
  auth: {},
  errors: [],
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
