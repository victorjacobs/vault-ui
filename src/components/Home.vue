<template>
  <div>
    <EditSecretDialog ref="editSecretDialog" />

    <div v-for="mount in mounts" md-flex="60">
      <h1>
        {{ mount }}
        <a v-if="canCreateOn(mount)" href="#" @click="openEditDialog(mount)">
          <md-icon>add</md-icon>
        </a>
      </h1>
      <ul>
        <li v-for="key in keys(mount)">
          <a @click="openEditDialog(mount, key)">
            {{ key }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import router from '@/router';
import EditSecretDialog from '@/components/EditSecretDialog';

export default {
  name: 'home',
  components: { EditSecretDialog },
  async created() {
    if (!this.auth) {
      router.push('login');
    }

    await this.getMounts();
    this.mounts.forEach((mountName) => {
      this.listMount({ mount: mountName });
    });
  },
  computed: {
    ...mapGetters([
      'mounts',
      'keys',
      'auth',
      'canCreateOn',
    ]),
  },
  methods: {
    openEditDialog(mount, key) {
      this.$refs.editSecretDialog.open(mount, key);
    },
    ...mapActions([
      'getMounts',
      'listMount',
    ]),
  },
};
</script>

<style scoped>
</style>
