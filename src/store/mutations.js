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

  [types.SET_MOUNTS](state, { data }) {
    Vue.set(state, 'mounts', {});

    Object.entries(data).forEach((property) => {
      const propertyName = property[0];
      const propertyValue = property[1];
      if (propertyName.includes('/') && propertyValue.type === 'generic') {
        Vue.set(state.mounts, propertyName.replace('/', ''), {});
      }
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
};
