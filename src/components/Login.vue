<template>
<md-layout md-gutter md-row>
  <md-layout md-flex="33" md-flex-offset="33">
    <!-- TODO die vault.png naar een juiste plaats zetten -->
    <img class="logo" src="../assets/vault.svg">
  </md-layout>

  <md-layout md-flex="33" md-flex-offset="33">
    <div class="warning" v-if="sealed">
      Warning: Vault sealed
    </div>
  </md-layout>

  <md-layout md-flex="33" md-flex-offset="33">
    <div v-for="error in errors">
      {{ error }}
    </div>
    <md-input-container>
      <label>Username</label>
      <md-input v-model="username"></md-input>
    </md-input-container>
    <md-input-container>
      <label>Password</label>
      <md-input type="password" v-model="password"></md-input>
    </md-input-container>

    <md-button @click.native="login({ username, password })" class="md-raised md-primary">Login</md-button>
  </md-layout>
</md-layout>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters([
      'errors',
      'sealed',
    ]),
  },
  methods: {
    ...mapActions([
      'login',
    ]),
  },
};
</script>


<style scoped>
.logo {
  height: 100px;
}
</style>
