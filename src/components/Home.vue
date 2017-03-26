<template>
  <div>
    <div v-for="(mount, mountName) in mounts" :key="mountName" md-flex="60">
      <h1>
        {{ mountName }}
        <a href="#">
          <md-icon>add</md-icon>
        </a>
      </h1>
      <ul>
        <li v-for="key in mount.keys">
          <a @click="showSecret(mountName, key)">
            {{ key }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
import router from '@/router';

export default {
  name: 'home',
  created() {
    if (!this.$store.state.auth) {
      router.push('login');
    }

    // this.$store.dispatch('getMounts');
    this.$store.dispatch('listMount', 'secret');
  },
  computed: {
    ...mapGetters([
      'mounts',
    ]),
  },
  methods: {
    async showSecret(mount, key) {
      const secretGetResult = await axios.get(`${mount}/${key}`);
      const username = secretGetResult.data.data.username;
      const password = secretGetResult.data.data.password;
      alert(`Username: ${username}, password: ${password}`);
    },
    ...mapActions([
      'createSecret',
    ]),
  },
};
</script>

<style scoped>
</style>
