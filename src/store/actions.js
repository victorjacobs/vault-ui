import axios from 'axios';
import * as types from './mutation-types';

// TODO create constants file somewhere to move this to
const vaultEndpoint = 'http://10.211.55.17/v1';

export const login = async ({ commit }, { username, password }) => {
  try {
    const loginResponse = await axios.post(`${vaultEndpoint}/auth/userpass/login/${username}`, {
      password: password,
    });

    commit(types.AUTH_SUCCESS, loginResponse);
  } catch (e) {
    // TODO unpacken van errors van API generic maken
    commit(types.API_FAILURE, e.response.data);
  }
};

export const getSealStatus = async ({ commit }) => {
  try {
    const sealStatusResponse = await axios.get(`${vaultEndpoint}/sys/seal-status`);

    commit(types.SEAL_STATUS_SUCCESS, sealStatusResponse);
  } catch (e) {
    // TODO unpacken van errors van API generic maken
    commit(types.API_FAILURE, e.response.data);
  }
}
