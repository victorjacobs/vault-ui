<template>
  <div>
    <div v-for="mount in mounts">
      {{ mount }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from '@/router';

export default {
  name: 'home',
  created() {
    if (!this.$store.state.auth) {
      router.push('login');
    }

    this.$store.dispatch('getMounts');
  },
  computed: {
    ...mapGetters([
      'mounts',
    ]),
  },
};
</script>

<style scoped>
</style>
