<template>
  <div class="tw-flex tw-felx-row tw-ml-4 tw-mr-2 tw-mt-3">
    <button
      class="btn tw-text-gray-900 hover:tw-border-blue-700 tw-mr-2"
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
    </button>
    <button
      class="btn tw-text-gray-900 hover:tw-border-blue-700 tw-mr-2"
      @click="onLastPage"
    >
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
    </button>
    <div class="sm"></div>
    <h1 class="tw-self-center tw-font-poppins tw-mr-1 tw-ml-1 tw-text-gray-100">
      {{ nextPageNumber }}
    </h1>
    <button
      class="btn tw-text-gray-900 hover:tw-border-blue-700 tw-ml-2"
      @click="onNextPage"
    >
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
    </button>
    <button
      class="btn tw-text-gray-900 hover:tw-border-blue-700 tw-ml-2"
      @click="goToLastPage"
    >
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
    </button>
  </div>
</template>

<script>
export default {
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
