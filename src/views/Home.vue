<template>
  <!-- Back To Top Widget -->
  <n-back-top :right="25" :bottom="20" />
  <!-- Selector Country -->
  <div class="tw-mx-4 tw-my-2">
    <n-select
      @update:value="getNewData"
      placeholder="Select Country"
      :options="options"
    />
  </div>
  <!-- Main -->
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
    <!-- Insider Results -->
    <Result :insider="results" />
    <!-- Check Visibility -->
    <div v-observe-visibility="handleScrollToBottom"></div>
  </main>
  <!-- Middle Loader -->
  <main v-else class="tw-flex tw-h-screen tw-justify-center tw-self-center">
    <Loader />
  </main>
  <!-- Spinner -->
  <div
    :v-if="loadingData.value == true"
    class="tw-flex tw-justify-center tw-self-center"
  >
    <div class="tw-my-4">
      <n-spin size="medium" />
    </div>
  </div>
</template>

<script>
import Result from "@/components/Result";
import topLevelAPI from "../store/toplevelAPI";
import Loader from "../components/Loader";
import { ref, onBeforeMount } from "vue";
const selectedValue = ref("US");
const page = ref(1);
const loadingData = ref(false);

export default {
  components: {
    Result,
    Loader,
  },
  setup() {
    const { results, loading, loadAllAPI } = topLevelAPI();
    function handleScrollToBottom(isVisible) {
      if (!isVisible) {
        return;
      }
      loadingData.value = true;
      page.value += 1;
      loadAllAPI(page.value, selectedValue.value);
      loadingData.value = false;
    }
    onBeforeMount(() => {
      loadAllAPI(page.value, selectedValue.value);
    });
    const getNewData = (value) => {
      if (value == selectedValue.value) {
        return;
      }
      results.value = [];
      page.value = 1;
      selectedValue.value = value;
      loadAllAPI(page.value, selectedValue.value);
    };
    return {
      getNewData,
      selectedValue,
      results,
      loading,
      handleScrollToBottom,
      loadingData,
      options: [
        {
          label: "Western Market",
          disabled: true,
        },
        {
          label: "United States",
          value: "US",
        },
        {
          label: "European Market",
          disabled: true,
        },
        {
          label: "Germany",
          value: "DE",
        },
        {
          label: "France",
          value: "FR",
        },
        {
          label: "Spain",
          value: "ES",
        },
        {
          label: "Italy",
          value: "IT",
        },
        {
          label: "Switzerland",
          value: "CH",
        },
        {
          label: "Belgium",
          value: "BE",
        },
        {
          label: "Netherlands",
          value: "NL",
        },
        {
          label: "Sweden",
          value: "SE",
        },
        {
          label: "Greece",
          value: "GR",
        },
        {
          label: "Asian Market",
          disabled: true,
        },
        {
          label: "India",
          value: "IN",
        },
      ],
    };
  },
};
</script>
