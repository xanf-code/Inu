<template>
  <div v-if="state.error === true"></div>
  <div v-else>
    <vue-highcharts
      type="stockChart"
      :options="chartData"
      :animateOnUpdate="true"
      @rendered="onRender"
      @destroy="onDestroy"
    />
  </div>
</template>

<script >
import VueHighcharts from "vue3-highcharts";
import HighCharts from "highcharts";
import StockCharts from "highcharts/modules/stock";
StockCharts(HighCharts);
import StockData from "../store/stockData";
import { computed } from "vue";

const { stockDataAPI, state } = StockData();

export default {
  components: {
    VueHighcharts,
  },
  setup() {
    const chartData = computed(() => {
      return {
        series: [
          {
            data: state.results,
          },
        ],
      };
    });
    const onRender = () => {
      const urlParams = new URLSearchParams(window.location.search);
      let params = urlParams.get("ticker");
      stockDataAPI(params);
    };
    const onDestroy = () => {
      stockDataAPI("");
    };
    return {
      chartData,
      onRender,
      onDestroy,
      stockDataAPI,
      state,
    };
  },
};
</script>