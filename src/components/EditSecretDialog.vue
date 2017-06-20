<template>
  <md-dialog ref='dialog'>
    <md-dialog-title>{{ mount }}</md-dialog-title>

    <md-dialog-content>
      <md-input-container class="input">
        <label>Key</label>
        <md-input v-model="key"></md-input>
      </md-input-container>
      <md-input-container class="input">
        <label>Username</label>
        <md-input :value="secret.username" @input="updateSecret('username', $event)"></md-input>
      </md-input-container>
      <md-input-container class="input">
        <label>Password</label>
        <md-input :value="secret.password" @input="updateSecret('password', $event)"></md-input>
      </md-input-container>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click.native="close()">Cancel</md-button>
      <md-button class="md-primary" @click.native="saveSecret()">Save</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import * as types from '@/store/mutation-types';

export default {
  data: () => ({
    createMode: false,
    mount: null,
    key: null,
    secret: {},
  }),
  methods: {
    async open(mount, key) {
      this.mount = mount;
      this.key = key;
      this.createMode = !key;

      if (key !== undefined) {
        await this.getSecretFromAPI();
      }

      this.secret = this.secretFromState(this.mount, this.key);

      this.$refs.dialog.open();
    },
    close() {
      this.$refs.dialog.close();
      // Rollback potential updates that weren't saved
      this.getSecretFromAPI();
    },
    updateSecret(property, value) {
      this.updateSecretInState({
        mount: this.mount,
        key: this.key,
        property,
        value,
      });
    },
    getSecretFromAPI() {
      return this.getSecret({
        mount: this.mount,
        key: this.key,
      });
    },
    ...mapMutations({
      updateSecretInState: types.UPDATE_SECRET,
    }),
    ...mapActions([
      'saveSecret',
      'getSecret',
    ]),
  },
  computed: {
    ...mapGetters({
      secretFromState: 'secret',
    }),
  },
};
</script>

<style scoped>

</style>
