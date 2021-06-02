<template>
  <!-- <div class="md:tw-ml-8 md:tw-mr-8 tw-mr-4">
    <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
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
// import VueApexCharts from "vue3-apexcharts";
// import StockData from "../store/stockData";

export default {
  components: {
    IndividualInsiderCard,
    // apexchart: VueApexCharts
  },
  name: "CompanyDetails",
  setup() {
    // const { loadingStockData, stockResult, stockDataAPI } = StockData();
    const { results, loading, companyAPILoad } = companyAPI();
    const urlParams = new URLSearchParams(window.location.search);
    let company = urlParams.get("name");
    // let companyName = company
    //   .toLowerCase()
    //   .replace("(", "")
    //   .replace(")", "")
    //   .replace(/ /g, "-");
    // stockDataAPI(companyName);
    companyAPILoad(company);
    return {
      // loadingStockData,
      // stockResult,
      // stockDataAPI,
      company,
      results,
      loading,
      companyAPILoad,
      // chartOptions: {
      //   noData: {
      //     text: "Data not available :(",
      //     align: "center",
      //   },
      //   tooltip: {
      //     theme: "dark",
      //   },
      //   grid: {
      //     show: false,
      //     type: "gradient",
      //     gradient: {
      //       shadeIntensity: 1,
      //       inverseColors: false,
      //       opacityFrom: 0.5,
      //       opacityTo: 0,
      //       stops: [0, 90, 100],
      //     },
      //   },
      //   chart: {
      //     type: "area",
      //     stacked: false,
      //     toolbar: {
      //       show: true,
      //       tools: {
      //         download: false,
      //         selection: false,
      //         zoom: true,
      //         zoomin: true,
      //         zoomout: true,
      //         pan: false,
      //         reset: true,
      //       },
      //     },
      //   },
      //   xaxis: {
      //     type: "string",
      //     categories: stockResult.value.date,
      //     labels: {
      //       show: false,
      //     },
      //     axisBorder: {
      //       show: false,
      //     },
      //     axisTicks: {
      //       show: false,
      //     },
      //   },
      //   yaxis: {
      //     labels: {
      //       style: {
      //         colors: ["#FFFAFA", "#FFFFFF"],
      //       },
      //     },
      //     axisBorder: {
      //       show: false,
      //     },
      //     axisTicks: {
      //       show: false,
      //     },
      //   },
      // },
      // series: [
      //   {
      //     name: company,
      //     data: stockResult.value.open,
      //   },
      // ],
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