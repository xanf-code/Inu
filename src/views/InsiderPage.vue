<template>
  <main
    v-if="!loading"
    class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3 tw-pt-2"
  >
    <!-- <div class="tw-w-auto tw-mx-3 tw-my-3">
      <GraphComponent />
    </div> -->
    <IndividualResult :insider="results" />
  </main>
  <main v-else class="tw-flex tw-h-screen tw-justify-center tw-self-center">
    <Loader />
  </main>
</template>

<script>
import IndividualResult from "@/components/IndividualResult";
import individualAPI from "../store/individualAPI";
import Loader from "../components/Loader";
// import GraphComponent from "@/components/GraphComponent";

export default {
  name: "InsiderPage",

  components: {
    IndividualResult,
    Loader,
    // GraphComponent,
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