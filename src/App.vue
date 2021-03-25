<template>
  <div id="app">
    <SiteNav v-if="showNav"></SiteNav>
    <router-view />
  </div>
</template>

<script>
import SiteNav from "./views/SiteNav";
import WatcherExample from "./views/watcher/WatcherExample";
import { mapState } from "vuex";
export default {
  components: {
    SiteNav
  },
  data() {
  },
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    }
  }
};
</script>
