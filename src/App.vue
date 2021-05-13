<template>
  <div class="flex flex-col h-screen">
    <header class="bg-black">
      <Header v-if="!state.mobileView" />
      <MobileHeader v-if="state.mobileView" />
    </header>
    <main class="overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MobileHeader from "@/components/MobileHeader.vue";
import toggleNavBar from "./store/NavBarToggle";
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