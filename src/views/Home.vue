<template>
  <!-- Back To Top Widget -->
  <n-back-top :right="25" :bottom="20" />
  <!-- Selector Country -->
  <div class="tw-mx-4 tw-my-2">
    <n-select
      @update:value="getNewData"
      placeholder="Select Country"
      :options="options"
      style="background-color: rgb(0 0 0)"
    />
  </div>
  <!-- Main -->
  <main
    v-if="!state.loading"
    class="
      tw-grid tw-grid-cols-1
      md:tw-grid-cols-2
      lg:tw-grid-cols-3
      xl:tw-grid-cols-3
      tw-pt-2
    "
  >
    <!-- Insider Results -->
    <Result :insider="state.results" />
  </main>
  <!-- Middle Loader -->
  <main v-else class="tw-flex tw-h-screen tw-justify-center tw-self-center">
    <Loader />
  </main>
  <!-- Pagination -->
  <div class="tw-mb-6">
    <HomePagination
      class="tw-justify-center"
      :goToFirstPage="goToFirstPage"
      :onLastPage="onLastPage"
      :onNextPage="onNextPage"
      :goToLastPage="goToLastPage"
      :nextPageNumber="stateStore.nextPage"
      :lastPageNumber="state.totalPages"
    />
  </div>
</template>

<script>
import Result from "@/components/Result";
import topLevelAPI from "../store/toplevelAPI";
import Loader from "../components/Loader";
import { reactive } from "vue";
import HomePagination from "../components/HomePagination";
const stateStore = reactive({
  nextPage: 1,
  selectedValue: "US",
});

export default {
  components: {
    Result,
    Loader,
    HomePagination,
  },
  setup() {
    const { state, loadAllAPI } = topLevelAPI();

    loadAllAPI(stateStore.nextPage, stateStore.selectedValue);

    const onNextPage = () => {
      if (state.isNext == false) {
        return;
      }
      state.loading = true;
      stateStore.nextPage++;
      loadAllAPI(stateStore.nextPage, stateStore.selectedValue);
    };

    const onLastPage = () => {
      if (state.isLast == false) {
        return;
      }
      state.loading = true;
      stateStore.nextPage--;
      loadAllAPI(stateStore.nextPage, stateStore.selectedValue);
    };

    const goToFirstPage = () => {
      if (stateStore.nextPage == 1) {
        return;
      }
      state.loading = true;
      stateStore.nextPage = 1;
      loadAllAPI(stateStore.nextPage, stateStore.selectedValue);
    };

    const goToLastPage = () => {
      if (stateStore.nextPage == state.totalPages) {
        return;
      }
      state.loading = true;
      stateStore.nextPage = state.totalPages;
      loadAllAPI(stateStore.nextPage, stateStore.selectedValue);
    };

    const getNewData = (value) => {
      if (value == stateStore.selectedValue) {
        return;
      }
      state.loading = true;
      stateStore.nextPage = 1;
      stateStore.selectedValue = value;
      loadAllAPI(stateStore.nextPage, stateStore.selectedValue);
    };

    return {
      getNewData,
      stateStore,
      state,
      onNextPage,
      onLastPage,
      goToFirstPage,
      goToLastPage,
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
          label: "Rest of the world",
          disabled: true,
        },
        {
          label: "India",
          value: "IN",
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
      ],
    };
  },
};
</script>
