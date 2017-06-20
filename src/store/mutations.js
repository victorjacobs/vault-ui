import Vue from 'vue';
import * as types from './mutation-types';

export default {
  [types.AUTH_SUCCESS](state, auth) {
    state.errors = [];
    state.auth = auth;
  },

  [types.UPDATE_SEAL](state, { data }) {
    state.sealStatus = data;
  },

  [types.API_FAILURE](state, { errors }) {
    state.errors = errors.filter(error =>
      // This handled in the VaultInfo component
      error !== 'Vault is sealed',
    );
  },

  [types.SET_MOUNTS](state, mounts) {
    Vue.set(state, 'mounts', {});

    mounts.forEach((mountName) => {
      Vue.set(state.mounts, mountName, {});
    });
  },

  [types.SET_MOUNT](state, { mount, keys }) {
    Vue.set(state.mounts, mount, {});

    keys.forEach((key) => {
      Vue.set(state.mounts[mount], key, {});
    });
  },

  [types.SET_SECRET](state, { mount, key, data }) {
    state.mounts[mount][key] = data;
  },

  [types.UPDATE_SECRET](state, { mount, key, property, value }) {
    const secret = state.mounts[mount][key];
    if (secret === undefined) {
      Vue.set(state.mounts[mount], key, {});
    }
    secret[property] = value;
  },

  [types.SET_CAPABILITIES](state, { mount, capabilities }) {
    Vue.set(state.capabilities, mount, capabilities);
  },

  [types.DELETE_SECRET](state, { mount, key }) {
    Vue.delete(state.mounts[mount], key);
  },
};
