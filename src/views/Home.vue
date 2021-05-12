<template>
  <main
    v-if="!loading"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-2"
  >
    <Result :insider="results" />
  </main>
  <main v-else class="flex h-screen"><h1 class="m-auto">Loading...</h1></main>
</template>

<script>
import Result from "@/components/Result";
import topLevelAPI from "../store/toplevelAPI";

export default {
  name: "Home",

  components: {
    Result,
  },

  setup() {
    const { results, loading, loadAllAPI } = topLevelAPI();
    loadAllAPI();
    return {
      results,
      loading,
    };
  },
};
</script>
