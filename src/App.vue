<template >
  <div class="tw-flex tw-flex-col tw-h-screen">
    <header class="tw-bg-black">
      <Header v-if="!navState.navigation && !state.mobileView" />
      <MobileHeader v-if="!navState.navigation && state.mobileView" />
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
import { reactive } from "vue";
export default {
  setup() {
    const navState = reactive({
      navigation: null,
    });

    function checkRoute() {
      if (
        this.$route.name === "errorpage" ||
        this.$route.name === "IntroView"
      ) {
        navState.navigation = true;
        return;
      }
      navState.navigation = false;
    }

    const { state, methods } = toggleNavBar();

    return {
      state,
      methods,
      navState,
      checkRoute,
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
      this.checkRoute();
      document.title = `${to.meta.title}`;
    },
  },
};
</script>