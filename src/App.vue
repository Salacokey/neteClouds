<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view :class="{ dark: isDark }"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.state.audioToggle = false
    this.$store.dispatch("requestHomePageData");
  },
  computed: {
    ...mapState(["isDark", "playToggle"]),
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.8s;
}
/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>

