<template>
  <!-- <div class="tw-w-screen">
    <vue-highcharts
      type="stockChart"
      :options="chartData"
      :animateOnUpdate="true"
      @rendered="onRender"
      @destroy="onDestroy"
    />
  </div> -->
  <main
    v-if="!loading"
    class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3 tw-pt-2"
  >
    <div
      class="tw-flex tw-flex-col"
      v-for="result in results"
      :key="result._id"
    >
      <transition appear tag="div" name="insider">
        <IndividualInsiderCard :result="result" />
      </transition>
    </div>
  </main>
</template>

<script>
import companyAPI from "../store/companyAPI";
import IndividualInsiderCard from "../components/IndividualInsiderCard";
// import StockData from "../store/stockData";
// import VueHighcharts from "vue3-highcharts";
// import HighCharts from "highcharts";
// import StockCharts from "highcharts/modules/stock";
// import { computed } from "vue";
// const { store, stockDataAPI } = StockData();
const { results, loading, companyAPILoad } = companyAPI();

// StockCharts(HighCharts);

export default {
  components: {
    IndividualInsiderCard,
    // VueHighcharts,
  },
  name: "CompanyDetails",
  setup() {
    const urlParams = new URLSearchParams(window.location.search);
    let company = urlParams.get("name");
    let companyName = company
      .toLowerCase()
      .replace("(", "")
      .replace(")", "")
      .replace(/ /g, "-");
    // stockDataAPI(companyName);
    companyAPILoad(company);
    // const onRender = () => {
    //   const urlParams = new URLSearchParams(window.location.search);
    //   let company = urlParams.get("name");
    //   let companyName = company
    //     .toLowerCase()
    //     .replace("(", "")
    //     .replace(")", "")
    //     .replace(/ /g, "-");
    //   stockDataAPI(companyName);
    // };
    // const chartData = computed(() => {
    //   return {
    //     series: [
    //       {
    //         data: store.stockResult,
    //       },
    //     ],
    //   };
    // });
    // const onDestroy = () => {
    //   stockDataAPI("");
    // };
    return {
      // store,
      // stockDataAPI,
      company,
      results,
      loading,
      companyAPILoad,
      companyName,
      // chartData,
      // onRender,
      // onDestroy,
    };
  },
  created() {
    document.title = `${this.company.toUpperCase().replace(/-/g, " ")}`;
  },
};
</script>

<style scoped>
.insider-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.insider-enter-active {
  transition: all 0.4s ease;
}
</style>