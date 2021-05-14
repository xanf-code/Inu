<template>
  <main
    v-if="!loading"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-2"
  >
    <div v-if="state.showNavBar">
      <div
        class="relative flex flex-row overflow-x-scroll whitespace-nowrap scrollbar-hide mx-2 my-4"
      >
        <MenuItems text="🏠 Home" />
        <MenuItems text="🐋 Watch" />
        <MenuItems text="📲 Download" />
        <MenuItems text="🔧 About" />
        <MenuItems text="🔧 demo" />
      </div>
      <div
        class="absolute top-0 right-0 bg-gradient-to-l from-gray-900 h-full w-1/2"
      />
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
import MenuItems from "../components/MenuItems";

export default {
  name: "Home",

  components: {
    Result,
    MenuItems,
  },

  setup() {
    const { state } = toggleNavBar();
    const { results, loading, loadAllAPI } = topLevelAPI();

    loadAllAPI();
    return { results, loading, state };
  },
};
</script>
