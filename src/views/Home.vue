<template>
  <main
    v-if="!loading"
    class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3 tw-pt-2"
  >
    <Result :insider="results" />
    <div v-observe-visibility="handleScrollToBottom"></div>
  </main>
  <main v-else class="tw-flex tw-h-screen tw-justify-center tw-self-center">
    <Loader />
  </main>
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
    const page = ref(20);

    function handleScrollToBottom(isVisible) {
      if (!isVisible) {
        return;
      }
      page.value += 10;
      loadAllAPI(page.value);
    }

    const { results, loading, loadAllAPI } = topLevelAPI();
    loadAllAPI(page.value);
    return { results, loading, handleScrollToBottom };
  },
};
</script>
