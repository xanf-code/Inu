<template>
  <div class="tw-flex tw-felx-row tw-ml-4 tw-mr-2 tw-mt-3">
    <n-button
      circle
      text
      color="#ff69b4"
      class="tw-mr-2"
      @click="goToFirstPage"
    >
      <svg
        class="tw-text-gray-600 tw-h-4 tw-justify-center"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>
    </n-button>
    <n-button circle text color="#ff69b4" class="tw-mr-2" @click="onLastPage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="tw-text-gray-600 tw-h-4 tw-justify-center"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </n-button>
    <div class="sm"></div>
    <h1 class="tw-self-center tw-font-poppins tw-mr-1 tw-ml-1 tw-text-gray-100">
      {{ nextPageNumber }}
    </h1>
    <n-button circle text color="#ff69b4" class="tw-ml-2" @click="onNextPage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="tw-text-gray-600 tw-h-4 tw-justify-center"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </n-button>
    <n-button circle text color="#ff69b4" class="tw-ml-2" @click="goToLastPage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="tw-text-gray-600 tw-h-4 tw-justify-center"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </n-button>
  </div>
</template>

<script>
import { NButton } from "naive-ui";
export default {
  components: { NButton },
  props: [
    "goToFirstPage",
    "onLastPage",
    "onNextPage",
    "goToLastPage",
    "nextPageNumber",
    "lastPageNumber",
  ],
};
</script>
