<template>
  <div v-if="!loading">
    <InsiderTopComponent />
  </div>
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
import InsiderTopComponent from "../components/InsiderTopComponent";
// import StockData from "../store/stockData";

export default {
  name: "InsiderPage",

  components: {
    IndividualResult,
    Loader,
    InsiderTopComponent,
    // GraphComponent,
  },

  setup() {
    // const urlParams = new URLSearchParams(window.location.search);
    // let company = urlParams.get("symbol");
    // let companyName = company.toLowerCase().replace(/ /g, "-");
    const { results, loading, individualAPILoad, route } = individualAPI();
    // const { stockDataAPI } = StockData();
    // stockDataAPI(companyName);
    individualAPILoad();
    return {
      results,
      loading,
      route,
      // stockDataAPI,
    };
  },
  created() {
    document.title = this.$route.params.id;
  },
};
</script>