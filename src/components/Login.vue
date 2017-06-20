<template>
  <div>
    <md-input-container class="input">
      <label>Username</label>
      <md-input v-model="username"></md-input>
    </md-input-container>
    <md-input-container class="input">
      <label>Password</label>
      <md-input type="password" v-model="password"></md-input>
    </md-input-container>

    <md-button @click.native="login({ username, password })" class="md-raised md-primary">Login</md-button>
  </div>
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
.input {
  width: 200px;
}
</style>
