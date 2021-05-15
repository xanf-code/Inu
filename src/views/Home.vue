<template>
  <main
    v-if="!loading"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-2"
  >
    <div v-if="state.showNavBar">
      <div
        class="flex flex-row overflow-x-scroll whitespace-nowrap scrollbar-hide mx-2 my-4 last:pr-6"
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
  </main>
  <main v-else class="flex h-screen">
    <h1 class="m-auto">Loading...</h1>
  </main>
</template>

<script>
import Result from "@/components/Result";
import topLevelAPI from "../store/toplevelAPI";
import toggleNavBar from "../store/NavStore";
//import MenuItems from "../components/MenuItems";

export default {
  name: "Home",

  components: {
    Result,
    //MenuItems,
  },

  setup() {
    const { state } = toggleNavBar();
    const { results, loading, loadAllAPI } = topLevelAPI();
    loadAllAPI();
    return { results, loading, state };
  },
};
</script>
