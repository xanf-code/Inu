<template>
  <main
    v-if="!loading"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-2"
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
    const { results, loading, individualAPILoad, route } = individualAPI();
    individualAPILoad();
    return {
      results,
      loading,
      route,
    };
  },
  created() {
    document.title = this.$route.params.id;
  },
};
</script>