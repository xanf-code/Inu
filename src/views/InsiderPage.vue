<template>
  <main
    v-if="!loading"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-2"
  >
    <IndividualResult :insider="results" />
  </main>
  <main v-else class="flex h-screen"><h1 class="m-auto">Loading...</h1></main>
</template>

<script>
import IndividualResult from "@/components/IndividualResult";
import individualAPI from "../store/individualAPI";

export default {
  name: "InsiderPage",

  components: {
    IndividualResult,
  },

  setup() {
    const { results, loading, individualAPILoad } = individualAPI();
    individualAPILoad();
    return {
      results,
      loading,
    };
  },
};
</script>