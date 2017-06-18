import Vue from 'vue';
import * as types from './mutation-types';

export default {
  [types.AUTH_SUCCESS](state, auth) {
    state.errors = [];
    state.auth = auth;
  },

  [types.SEAL_STATUS_SUCCESS](state, { data }) {
    state.sealStatus = data;
  },

  [types.API_FAILURE](state, { errors }) {
    state.errors = errors;
  },

  [types.LIST_MOUNT_SUCCESS](state, { mount, keys }) {
    Vue.set(state.mounts, mount, {});

    keys.forEach((key) => {
      Vue.set(state.mounts[mount], key, {});
    });
  },

  [types.GET_SECRET_SUCCESS](state, { mount, key, data }) {
    state.mounts[mount][key] = data;
  },
};
