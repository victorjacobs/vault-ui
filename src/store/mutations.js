import * as types from './mutation-types';

export default {
  [types.AUTH_SUCCESS](state, { data }) {
    state.errors = [];
    state.auth = data.auth;
  },

  [types.SEAL_STATUS_SUCCESS](state, { data }) {
    state.sealStatus = data;
  },

  [types.API_FAILURE](state, { errors }) {
    state.errors = errors;
  },
};
