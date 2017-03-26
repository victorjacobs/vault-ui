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

  [types.MOUNTS_SUCCESS](state, { data }) {
    state.mounts = data;
  },
};
