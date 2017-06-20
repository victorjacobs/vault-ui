export const auth = state => state.auth;

export const vaultVersion = state => state.sealStatus.version;

export const vaultSealed = state => state.sealStatus.sealed;

export const errors = state => state.errors;

export const mounts = state => Object.keys(state.mounts);

export const keys = state => mount => Object.keys(state.mounts[mount]);

export const secret = state => (mount, key) => {
  if (!mount) {
    return {};
  }

  return state.mounts[mount][key];
};

export const capabilities = state => mount => state.capabilities[mount];

export const canDeleteOn = state => (mount) => {
  if (capabilities(state)(mount) === undefined) {
    return false;
  }

  return capabilities(state)(mount).includes('delete');
};

export const canUpdateOn = state => (mount) => {
  if (capabilities(state)(mount) === undefined) {
    return false;
  }

  // According to Vault documentation, for most things create and update capabilities are the same
  return capabilities(state)(mount).includes('update')
    || capabilities(state)(mount).includes('create');
};

export const canCreateOn = state => mount => canUpdateOn(state)(mount);
