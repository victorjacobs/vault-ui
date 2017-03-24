<template>
<md-layout md-gutter md-row>
  <md-layout md-flex="33" md-flex-offset="33">
    <!-- TODO die vault.png naar een juiste plaats zetten -->
    <img class="logo" src="../assets/vault.png">
    {{ test }}
  </md-layout>

  <md-layout md-flex="33" md-flex-offset="33">
    <md-input-container>
      <label>Username</label>
      <md-input v-model="username"></md-input>
    </md-input-container>
    <md-input-container>
      <label>Regular Password</label>
      <md-input type="password"></md-input>
    </md-input-container>

    <md-button @click.native="login" class="md-raised md-primary">Login</md-button>
  </md-layout>
</md-layout>
</template>


<script>
// import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      test: '',
    };
  },
  methods: {
    login() {
      console.log('test');
      this.test = 'test';
    },
  },
};
</script>


<style scoped>
.logo {
  height: 100px;
}

md-layout {
  margin: auto;
}
</style>
