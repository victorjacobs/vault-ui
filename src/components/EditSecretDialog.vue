<template>
  <md-dialog ref='dialog'>
    <md-dialog-title>Title</md-dialog-title>

    <md-dialog-content>
      <md-input-container class="input">
        <label>Username</label>
        <md-input v-model="secret.username"></md-input>
      </md-input-container>
      <md-input-container class="input">
        <label>Password</label>
        <md-input v-model="secret.password"></md-input>
      </md-input-container>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click.native="close()">Cancel</md-button>
      <md-button class="md-primary" @click.native="save()">Save</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  data: () => ({
    secret: { },
    mount: null,
    key: null,
  }),
  methods: {
    async open(mount, key) {
      this.mount = mount;
      this.key = key;

      if (mount === undefined) {
        this.secret = {};
      } else {
        // TODO error handling
        // TODO also put the following GET in vuex?
        const secretGetResult = await axios.get(`${mount}/${key}`);
        this.secret = secretGetResult.data.data;
      }
      this.$refs.dialog.open();
    },
    close() {
      this.$refs.dialog.close();
    },
    ...mapActions([
      'saveSecret',
    ]),
  },
};
</script>

<style scoped>

</style>
