<template>
  <main
    v-if="!loading"
    class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3 tw-pt-2"
  >
    <div v-if="state.showNavBar">
      <div
        class="tw-flex tw-flex-row tw-overflow-x-scroll tw-whitespace-nowrap tw-scrollbar-hide tw-mx-2 tw-my-4 last:tw-pr-6"
      >
        <router-link to="/whaleWatch">
          <span>MENU ITEMS HERE</span>
        </router-link>
        <!-- <MenuItems text="🏠 Home" />
        <MenuItems text="🐋 Watch" />
        <MenuItems text="📲 Download" />
        <MenuItems text="🔧 About" /> -->
      </div>
    </div>
    <Result :insider="results" />
    <div v-observe-visibility="handleScrollToBottom"></div>
  </main>
  <main v-else class="tw-flex tw-h-screen">
    <h1 class="tw-m-auto">Loading...</h1>
  </main>
</template>

<script>
import Result from "@/components/Result";
import topLevelAPI from "../store/toplevelAPI";
import toggleNavBar from "../store/NavStore";
//import MenuItems from "../components/MenuItems";
const { loadAllAPI } = topLevelAPI();

import { ref } from "vue";

const page = ref(20);
export default {
  name: "Home",

  components: {
    Result,
    //MenuItems,
  },

  methods: {
    handleScrollToBottom(isVisible) {
      if (!isVisible) {
        return;
      }

      page.value += 10;
      loadAllAPI(page.value);
    },
  },

  setup() {
    const { state } = toggleNavBar();
    const { results, loading, loadAllAPI } = topLevelAPI();
    loadAllAPI(page.value);
    return { results, loading, state };
  },
};
</script>
