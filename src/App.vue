<template>
  <div id="app">
    <SiteNav v-if="showNav"></SiteNav>
    <router-view />
  </div>
</template>

<script>
import SiteNav from "./views/SiteNav";
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
      console.log(this.userProfile);
      return Object.keys(this.userProfile).length > 1;
    }
  }
};
</script>
