<template>
  <md-dialog ref='dialog'>
    <md-dialog-title>Title</md-dialog-title>

    <md-dialog-content>
      <md-input-container class="input">
        <label>Key</label>
        <md-input v-model="key"></md-input>
      </md-input-container>
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
      <md-button class="md-primary" @click.native="saveSecret()">Save</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    secret: {},
    mount: null,
    key: null,
  }),
  methods: {
    async open(mount, key) {
      this.mount = mount;
      this.key = key;
      if (mount !== undefined) {
        await this.getSecret({ mount, key });
        this.secret = this.secretFromState(this.mount, this.key);
      }

      this.$refs.dialog.open();
    },
    close() {
      this.$refs.dialog.close();
    },
    saveSecret() {
      console.log(this.username);
    },
    ...mapActions([
      // 'saveSecret',
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
