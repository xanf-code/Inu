<template>
  <div
    class="tw-box-border tw-px-2 tw-py-2 tw-bg-black tw-rounded-md tw-cursor-pointer tw-mr-1.5 tw-ml-1.5 tw-mb-1.5"
  >
    <!-- Row-1 [RANK, NAME, CONTRACT] -->
    <div class="tw-flex tw-flex-row tw-justify-between">
      <div class="tw-flex tw-flex-row">
        <div class="tw-pt-1">
          <TickerBox :text="`# ${results.rank}`" color="tw-text-white" />
        </div>
        <div class="tw-pt-0.5 tw-self-center">
          <h1 class="tw-font-poppins tw-ml-1 tw-text-white tw-font-medium">
            {{ results.tag }}
          </h1>
        </div>
      </div>
      <div
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        :title="`${results.contract === true ? 'Contract' : 'No Contract'}`"
      >
        <svg
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          :title="`${results.contract === true ? 'Contract' : 'No Contract'}`"
          xmlns="http://www.w3.org/2000/svg"
          :class="`${
            results.contract === true ? 'tw-text-green-700' : 'tw-text-red-600'
          }`"
          class="tw-h-5 tw-mr-1.5 tw-mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
    </div>
    <!-- Row-1 Ends -->
    <!-- Row-2 Quantity -->
    <div class="tw-mt-2">
      <div class="tw-flex tw-flex-row tw-justify-start">
        <h1
          class="tw-font-poppins tw-ml-2 tw-font-bold tw-text-blue-600 tw-self-center tw-mr-2.5"
        >
          Current Quantity
        </h1>
        <div
          class="tw-flex tw-box-border tw-bg-gray-900 tw-rounded-md tw-px-1 tw-font-semibold tw-font-poppins tw-self-center tw-py-1.5"
        >
          <div
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Current Quantity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tw-h-5 tw-mr-1.5 tw-ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          </div>
          <h1 class="tw-font-poppins tw-font-semibold tw-self-center tw-mr-2">
            {{ results.quantityCurrent }}
          </h1>
        </div>
      </div>
    </div>
    <!-- Row-2 Ends -->
    <!-- Row-3 Quantity -->
    <div class="tw-mt-2">
      <div class="tw-flex tw-flex-row tw-justify-start">
        <h1
          class="tw-font-poppins tw-ml-2 tw-font-bold tw-text-blue-600 tw-self-center tw-mr-2.5"
        >
          Quantity Change
        </h1>
        <div
          class="tw-flex tw-box-border tw-bg-gray-900 tw-rounded-md tw-px-1 tw-font-semibold tw-font-poppins tw-self-center tw-py-1.5"
        >
          <TrendingDownIcon
            v-if="results.quantityChanges.includes('-')"
            class="tw-h-4 tw-self-center tw-pr-1 tw-text-red-600"
          />

          <TrendingUpIcon
            v-else
            class="tw-h-4 tw-self-center tw-pr-1 tw-text-yellow-500"
          />
          <h1
            class="tw-font-poppins tw-font-semibold tw-self-center tw-mr-2"
            :class="`${
              results.quantityChanges.includes('-')
                ? 'tw-text-red-600'
                : 'tw-text-yellow-400'
            }`"
          >
            {{ results.quantityChanges }}
          </h1>
        </div>
      </div>
    </div>
    <!-- Row-3 Ends -->
    <!-- Row-4 Percentage -->
    <div class="tw-mt-2 tw-mb-2">
      <div class="tw-flex tw-flex-row tw-justify-start">
        <h1
          class="tw-font-poppins tw-ml-2 tw-font-bold tw-text-blue-600 tw-self-center tw-mr-2.5"
        >
          % Change
        </h1>
        <div
          class="tw-flex tw-px-1 tw-font-semibold tw-font-poppins tw-self-center tw-py-1.5"
        >
          <ChevronDownIcon
            v-if="results.percentageChange.includes('-')"
            class="tw-h-4 tw-self-center tw-pr-1 tw-text-red-600"
          />

          <ChevronUpIcon
            v-else
            class="tw-h-4 tw-self-center tw-pr-1 tw-text-yellow-500"
          />
          <h1
            class="tw-font-poppins tw-font-semibold tw-self-center tw-mr-2"
            :class="`${
              results.percentageChange.includes('-')
                ? 'tw-text-red-600'
                : 'tw-text-yellow-400'
            }`"
          >
            {{ parseFloat(this.results.percentageChange).toFixed(4) }} %
          </h1>
        </div>
      </div>
    </div>
    <!-- Row-4 Ends -->
  </div>
</template>

<script>
import TickerBox from "@/components/TickerBox";
import {
  TrendingUpIcon,
  TrendingDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/outline";

export default {
  props: ["results"],
  components: {
    TickerBox,
    TrendingUpIcon,
    TrendingDownIcon,
    ChevronDownIcon,
    ChevronUpIcon,
  },
};
</script>