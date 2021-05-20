<template>
  <main
    v-if="!loading"
    class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3 tw-pt-2"
  >
    <div v-if="state.showNavBar">
      <div
        class="tw-flex tw-flex-row tw-overflow-x-scroll tw-whitespace-nowrap tw-scrollbar-hide"
      >
        <nav class="nav flex-column">
          <router-link to="/whalewatch?type=crypto">
            <span class="nav-link">🐋 Watch</span>
          </router-link>
          <router-link to="/whalewatch?type=crypto">
            <span class="nav-link">📲 Download</span>
          </router-link>
          <router-link to="/whalewatch?type=crypto">
            <span class="nav-link">🔧 About</span>
          </router-link>
        </nav>
        <!-- <MenuItems text="🏠 Home" />
        <MenuItems text="🐋 Watch" />
        <MenuItems text="📲 Download" />
        <MenuItems text="🔧 About" /> -->
      </div>
    </div>
    <Result :insider="results" />
    <div v-observe-visibility="handleScrollToBottom"></div>
  </main>
  <main v-else class="tw-flex tw-h-screen tw-justify-center tw-self-center">
    <Loader />
  </main>
</template>

<script>
import Result from "@/components/Result";
import topLevelAPI from "../store/toplevelAPI";
import toggleNavBar from "../store/NavStore";
import Loader from "../components/Loader";
//import MenuItems from "../components/MenuItems";
import { ref } from "vue";

export default {
  components: {
    Result,
    Loader,
    //MenuItems,
  },
  setup() {
    const page = ref(20);

    function handleScrollToBottom(isVisible) {
      if (!isVisible) {
        return;
      }
      page.value += 10;
      loadAllAPI(page.value);
    }

    const { state } = toggleNavBar();
    const { results, loading, loadAllAPI } = topLevelAPI();
    loadAllAPI(page.value);
    return { results, loading, state, handleScrollToBottom };
  },
};
</script>
