<template>
  <div>
    <img class="logo" src="./assets/vault.svg">

    <div id="app">
      <div class="alert alert-error" v-if="errors">
        <ul>
          <li v-for="error in errors">
            {{ error }}
          </li>
        </ul>
      </div>

      <router-view></router-view>

      <VaultInfo />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VaultInfo from '@/components/VaultInfo';

export default {
  name: 'app',
  components: {
    VaultInfo,
  },
  computed: {
    ...mapGetters([
      'errors',
    ]),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 60px;
}

.logo {
  height: 100px;
  margin-left: 20px;
  margin-top: 20px;
}
</style>
