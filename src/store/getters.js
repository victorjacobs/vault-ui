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
