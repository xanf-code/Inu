<template>
  <div class="flex flex-col h-screen">
    <header class="bg-black">
      <Header v-if="!mobileView" />
      <MobileHeader v-if="mobileView" />
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
    const { mobileView, handleView } = toggleNavBar();

    return {
      mobileView,

      handleView,
    };
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
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