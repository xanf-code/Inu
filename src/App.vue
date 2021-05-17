<template>
  <div class="tw-flex tw-flex-col tw-h-screen">
    <header class="tw-bg-black">
      <Header v-if="!state.mobileView" />
      <MobileHeader v-if="state.mobileView" />
    </header>
    <main class="tw-overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MobileHeader from "@/components/MobileHeader.vue";
import toggleNavBar from "./store/NavStore";
export default {
  setup() {
    const { state, methods } = toggleNavBar();

    return {
      state,
      methods,
    };
  },
  created() {
    this.methods.handleView();
    window.addEventListener("resize", this.methods.handleView);
  },
  components: {
    Header,
    MobileHeader,
  },
  watch: {
    $route(to) {
      document.title = `${to.meta.title}`;
    },
  },
};
</script>