<template>
  <div v-if="!loading">
    <InsiderTopComponent />
  </div>

  <main
    v-if="!loading"
    class="
      tw-grid tw-grid-cols-1
      md:tw-grid-cols-2
      lg:tw-grid-cols-3
      xl:tw-grid-cols-3
      tw-pt-2
    "
  >
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
import InsiderTopComponent from "../components/InsiderTopComponent";

export default {
  name: "InsiderPage",

  components: {
    IndividualResult,
    Loader,
    InsiderTopComponent,
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