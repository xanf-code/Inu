<template>
  <div>
    <JSCharting :options="chartOptions"></JSCharting>
  </div>
</template>

<script >
import StockData from "../store/stockData";
import { computed } from "vue";

const { stockDataAPI, state } = StockData();
import JSCharting from "jscharting-vue";

export default {
  components: {
    JSCharting,
  },
  setup() {
    const urlParams = new URLSearchParams(window.location.search);
    let params = urlParams.get("ticker");
    stockDataAPI(params);

    const chartOptions = computed(() => {
      return {
        type: "spline",
        legend: {
          template: "%icon %name",
          position: "inside top left",
        },
        yAxis_formatString: "c",
        xAxis_crosshair_enabled: true,
        defaultPoint_marker_type: "none",
        series: [
          {
            points: state.results,
          },
        ],
      };
    });
    return {
      chartOptions,
    };
  },
};
</script>


