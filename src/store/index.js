import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';
import registerSubscribers from './subscribers';

Vue.use(Vuex);

const state = {
  sealStatus: {},
  auth: {},
  errors: [],
  mounts: {},
  capabilities: {},
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations,
});

registerSubscribers(store);

export default store;
