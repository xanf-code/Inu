<template>
  <main v-if="!state.loading">
    <div v-for="result in state.results" :key="result._id">
      <h1>{{ result.walletID }}</h1>
    </div>
    <div>
      <VueTailwindPagination
        :current="currentPage"
        :total="1000"
        @page-changed="onPageClick($event)"
      >
      </VueTailwindPagination>
      <!-- <whalesBox :results="state.results" /> -->
    </div>
  </main>
  <main v-else class="tw-flex tw-h-screen">
    <h1 class="tw-m-auto">Loading...</h1>
  </main>
</template>

<script>
import whaleWatch from "../store/whaleWatch";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
const params = new URLSearchParams(window.location.search);
import { ref } from "vue";
const { whaleAPILoad, state } = whaleWatch();
//import whalesBox from "../components/whalesbox";
export default {
  name: "Whales",
  // methods: {
  //   onPageClick(event) {
  //     this.currentPage = event;
  //     whaleAPILoad(params.get("crypto"), this.currentPage);
  //   },
  // },
  setup() {
    const currentPage = ref(1);
    const onPageClick = (event) => {
      this.currentPage.value = event;
      whaleAPILoad(params.get("crypto"), this.currentPage.value);
    };

    whaleAPILoad(params.get("crypto"), 1);
    return {
      state,
      onPageClick,
      currentPage,
    };
  },
  created() {
    document.title = "🐳 Watch";
  },
  components: {
    //whalesBox
    VueTailwindPagination,
  },
};
</script>
