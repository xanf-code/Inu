<template>
  <div class="tw-mr-4 tw-ml-2 tw-mt-2 tw-mb-2">
    <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
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
const { results, loading, companyAPILoad } = companyAPI();
import { onUnmounted, onMounted, ref } from "vue";
const axios = require("axios");

let dateData = ref([]);
let valueData = ref([]);

export default {
  components: {
    IndividualInsiderCard,
  },
  name: "CompanyDetails",
  setup() {
    const urlParams = new URLSearchParams(window.location.search);
    let company = urlParams.get("name");
    let companyName = company
      .toLowerCase()
      .replace("(", "")
      .replace(")", "")
      .replace(/ /g, "-")
      .replace(".", " ");
    onMounted(() => {
      companyAPILoad(company);
      axios
        .get(`https://intradaystocks.herokuapp.com/api/stocks/${companyName}`, {
          headers: {
            authority: "www.insiderscreener.com",
            accept: "application/json",
            "accept-language": "en-US,en-IN;q=0.9,en-UM;q=0.8,en;q=0.7",
          },
        })
        .then((response) => {
          dateData.value.push(...response.data.date);
          valueData.value.push(...response.data.open);
        });
    });
    onUnmounted(() => {
      valueData.value = [];
      dateData.value = [];
    });
    return {
      company,
      results,
      loading,
      companyAPILoad,
      companyName,
      chartOptions: {
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        title: {
          text: company,
          align: "left",
          style: {
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "Poppins",
            color: "#008ffb",
          },
        },
        dataLabels: {
          enabled: false,
        },
        noData: {
          text: "Loading..",
          align: "center",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Poppins",
            color: "#ffffff",
          },
        },
        tooltip: {
          theme: "dark",
          style: {
            fontSize: "12px",
            fontFamily: "Poppins",
          },
        },
        grid: {
          show: false,
        },
        chart: {
          type: "area",
          stacked: false,
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: false,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: false,
              reset: true,
            },
          },
        },
        xaxis: {
          type: "datetime",
          categories: dateData.value,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              fontSize: "12px",
              fontFamily: "Poppins",
              fontWeight: 400,
              colors: ["#FFFAFA", "#FFFFFF"],
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
      },
      series: [
        {
          name: company,
          data: valueData.value,
        },
      ],
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