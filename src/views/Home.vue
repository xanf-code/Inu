<template>
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
    <Result :insider="results" />

    <div v-observe-visibility="handleScrollToBottom"></div>
  </main>
  <main v-else class="tw-flex tw-h-screen tw-justify-center tw-self-center">
    <Loader />
  </main>
  <div
    :v-if="loadingData.value == true"
    class="tw-flex tw-justify-center tw-self-center"
  >
    <h1>Loading more data...</h1>
  </div>
</template>

<script>
import Result from "@/components/Result";
import topLevelAPI from "../store/toplevelAPI";
import Loader from "../components/Loader";
import { ref } from "vue";

export default {
  components: {
    Result,
    Loader,
  },
  setup() {
    const page = ref(1);
    const loadingData = ref(false);

    function handleScrollToBottom(isVisible) {
      if (!isVisible) {
        return;
      }
      loadingData.value == true;
      page.value += 1;
      loadAllAPI(page.value);
      loadingData.value == false;
    }
    const { results, loading, loadAllAPI } = topLevelAPI();
    loadAllAPI(page.value);
    return { results, loading, handleScrollToBottom, loadingData };
  },
};
</script>
