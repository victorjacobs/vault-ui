<template>
  <div>
    <EditSecretDialog
      ref="editSecretDialog" />

    <div v-for="(mount, mountName) in mounts" :key="mountName" md-flex="60">
      <h1>
        {{ mountName }}
        <a href="#" @click="openEditDialog()">
          <md-icon>add</md-icon>
        </a>
      </h1>
      <ul>
        <li v-for="key in mount.keys">
          <a @click="openEditDialog(mountName, key)">
            {{ key }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from '@/router';
import EditSecretDialog from '@/components/EditSecretDialog';

export default {
  name: 'home',
  components: { EditSecretDialog },
  created() {
    if (!this.$store.state.auth) {
      router.push('login');
    }

    // TODO werken met verschillende mounts
    // this.$store.dispatch('getMounts');
    this.$store.dispatch('listMount', 'secret');
  },
  computed: {
    ...mapGetters([
      'mounts',
    ]),
  },
  methods: {
    openEditDialog(mount, key) {
      this.$refs.editSecretDialog.open(mount, key);
    },
  },
};
</script>

<style scoped>
</style>
