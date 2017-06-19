<template>
  <div id="vault-info">
    <md-snackbar :md-position="'top center'" ref="snackbar" :md-duration="1000000000">
      <span>Vault sealed.</span>
      <md-button class="md-accent" md-theme="light-blue" @click.native="trySealStatus()">Retry</md-button>
    </md-snackbar>
    <div>
      Vault v{{ vaultVersion }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    snackbarOpen: false,
  }),
  created() {
    this.trySealStatus();
  },
  methods: {
    async trySealStatus() {
      await this.getSealStatus();
      const snackbar = this.$refs.snackbar;

      if (this.vaultSealed && !this.snackbarOpen) {
        snackbar.open();
        this.snackbarOpen = true;
      } else if (!this.vaultSealed && this.snackbarOpen) {
        location.reload();
      }
    },
    ...mapActions([
      'getSealStatus',
    ]),
  },
  computed: {
    ...mapGetters([
      'vaultSealed',
      'vaultVersion',
    ]),
  },
};
</script>

<style scoped>
#vault-info {
  padding-top: 40px;
}
</style>
