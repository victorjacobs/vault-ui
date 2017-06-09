import axios from 'axios';
import router from '@/router';
import * as types from './mutation-types';

const commitApiError = (commit, e) => {
  // If we get a code in e, it is an connection error from Axios
  if (e.code !== undefined) {
    if (e.code === 'ECONNABORTED') {
      commit(types.API_FAILURE, {
        errors: [
          'Vault not responding',
        ],
      });
    }
  } else {
    console.dir(e);
    if (e.response.status === 403) {
      router.push({ name: 'login' });
    } else {
      commit(types.API_FAILURE, e.response.data);
    }
  }
};

export const login = async ({ commit }, { username, password }) => {
  try {
    const loginResponse = await axios.post(`/auth/userpass/login/${username}`, {
      password,
    });

    commit(types.AUTH_SUCCESS, loginResponse.data.auth);

    router.push({ name: 'home' });
  } catch (e) {
    commitApiError(commit, e);
  }
};

export const getSealStatus = async ({ commit }) => {
  try {
    const sealStatusResponse = await axios.get('/sys/seal-status');

    commit(types.SEAL_STATUS_SUCCESS, sealStatusResponse);
  } catch (e) {
    commitApiError(commit, e);
  }
};

export const getMounts = async ({ commit }) => {
  try {
    const mountsResponse = await axios.get('/sys/mounts');

    console.log(mountsResponse.data);

    commit(types.MOUNTS_SUCCESS, mountsResponse);
  } catch (e) {
    commitApiError(commit, e);
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
    commitApiError(commit, e);
  }
};

export const loginFromLocalStorage = ({ commit }, lsAuth) => {
  const auth = JSON.parse(lsAuth);
  commit(types.AUTH_SUCCESS, auth);
};
