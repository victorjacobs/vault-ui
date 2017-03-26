import axios from 'axios';
import * as types from './mutation-types';

export default (store) => {
  // TODO dit kan ook wel wat generieker
  store.subscribe((mutation) => {
    switch (mutation.type) {
      case types.AUTH_SUCCESS:
        localStorage.setItem('auth', JSON.stringify(mutation.payload));
        axios.defaults.headers.common['X-Vault-Token'] = mutation.payload.client_token;
        break;
      default:
        break;
    }
  });
};
