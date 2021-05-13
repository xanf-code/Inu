<template>
  <main
    v-if="!loading"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-2"
  >
    <!-- <div v-if="state.showNavBar">
      <h1>This is responsive nav</h1>
    </div> -->
    <Result :insider="results" />
  </main>
  <main v-else class="flex h-screen"><h1 class="m-auto">Loading...</h1></main>
</template>

<script>
import Result from "@/components/Result";
import topLevelAPI from "../store/toplevelAPI";
import toggleNavBar from "../store/NavBarToggle";

export default {
  name: "Home",

  components: {
    Result,
  },

  setup() {
    const { methods, state } = toggleNavBar();
    const { results, loading, loadAllAPI } = topLevelAPI();

    loadAllAPI();
    return { methods, results, loading, state };
  },
};
</script>
