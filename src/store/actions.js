import axios from 'axios';
import router from '@/router';
import * as types from './mutation-types';

export const login = async ({ commit }, { username, password }) => {
  try {
    const loginResponse = await axios.post(`/auth/userpass/login/${username}`, {
      password,
    });

    commit(types.AUTH_SUCCESS, loginResponse.data.auth);

    router.push({ name: 'home' });
  } catch (e) {
    // TODO unpacken van errors van API generic maken
    commit(types.API_FAILURE, e.response.data);
  }
};

export const getSealStatus = async ({ commit }) => {
  try {
    const sealStatusResponse = await axios.get('/sys/seal-status');

    commit(types.SEAL_STATUS_SUCCESS, sealStatusResponse);
  } catch (e) {
    // TODO unpacken van errors van API generic maken
    commit(types.API_FAILURE, e.response.data);
  }
};

export const getMounts = async ({ commit }) => {
  try {
    const mountsResponse = await axios.get('/sys/mounts');

    console.log(mountsResponse.data);

    commit(types.MOUNTS_SUCCESS, mountsResponse);
  } catch (e) {
    commit(types.API_FAILURE, e.response.data);
  }
};

export const listMount = async ({ commit }, path) => {
  try {
    const listMountResponse = await axios.request({
      url: path,
      method: 'list',
    });

    commit(types.LIST_MOUNT_SUCCESS, {
      mount: path,
      keys: listMountResponse.data.data.keys,
    });
  } catch (e) {
    commit(types.API_FAILURE, e.response.data);
  }
};

export const loginFromLocalStorage = ({ commit }, lsAuth) => {
  const auth = JSON.parse(lsAuth);
  commit(types.AUTH_SUCCESS, auth);
};
