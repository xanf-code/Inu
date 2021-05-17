<template>
  <div
    class="tw-box-border tw-h-32 tw-px-2 tw-py-2 tw-bg-black tw-rounded-md tw-cursor-pointer tw-mr-1.5 tw-ml-1.5 tw-mb-1.5 hover:tw-animate-pulse"
  >
    <div class="tw-flex tw-justify-between">
      <div class="tw-flex tw-justify-start">
        <TickerBox :text="result.ticker" color="tw-text-purple-800" />
        <h1
          class="tw-truncate tw-text-purple-800 tw-max-w-md tw-font-semibold tw-text-sm tw-self-center tw-font-poppins tw-pl-1 tw-pr-1"
        >
          {{ result.companyName }}
        </h1>
      </div>
      <h1
        class="tw-text-gray-600 tw-font-medium tw-font-poppins tw-truncate tw-text-sm tw-pt-0.5 tw-pr-2"
      >
        {{ getHumanDate(result.date) }}
      </h1>
    </div>
    <div class="tw-flex tw-justify-between">
      <div>
        <h1
          class="tw-truncate tw-max-w-md tw-font-bold tw-font-poppins tw-pt-2 tw-pl-1 tw-text-white"
        >
          {{ result.insiderName }}
        </h1>
        <p
          class="tw-truncate tw-text-purple-600 tw-font-semibold tw-font-poppins tw-pt-1 tw-pl-1 tw-pb-1.5"
        >
          {{ result.insiderTitle }}
        </p>
      </div>
      <div class="tw-pt-1">
        <div
          :class="`tw-flex tw-justify-end ${
            result.tradeQuantity.includes('+')
              ? 'tw-text-yellow-500'
              : 'tw-text-red-600'
          }`"
        >
          <BriefcaseIcon
            :class="`tw-h-4 tw-self-center tw-pr-1 tw-pt-0.5 ${
              result.value.includes('+')
                ? 'tw-text-yellow-500'
                : 'tw-text-red-600'
            }`"
          />
          <Trade :text="result.tradeQuantity" />
        </div>
        <div
          :class="`tw-flex tw-justify-end ${
            result.stockPercent.includes('+') ||
            result.stockPercent.includes('New')
              ? 'tw-text-yellow-500'
              : 'tw-text-red-600'
          }`"
        >
          <TrendingUpIcon
            v-if="result.stockPercent.includes('+')"
            class="tw-h-4 tw-self-center tw-pr-1 tw-text-yellow-500"
          />

          <TrendingDownIcon
            v-else
            class="tw-h-4 tw-self-center tw-pr-1 tw-text-red-600"
          />
          <Trade :text="result.stockPercent" />
        </div>
      </div>
    </div>
    <div class="tw-flex tw-justify-between">
      <div class="tw-flex">
        <TickerBox :text="result.tradeType" color="tw-text-purple-800" />
        <h1
          class="tw-truncate tw-text-white tw-max-w-md tw-font-medium tw-font-poppins tw-pl-1.5 tw-self-center"
        >
          {{ result.tradePrice }}
        </h1>
      </div>
      <div class="tw-flex">
        <CurrencyDollarIcon
          :class="`tw-h-6 tw-pr-0.5 tw-pt-0.5 hover:tw-animate-spin ${
            result.value.includes('+')
              ? 'tw-text-yellow-500'
              : 'tw-text-red-600'
          }`"
        />
        <AmountTickerBox
          :text="result.value"
          :color="`${
            result.value.includes('+') ? 'tw-text-white' : 'tw-text-red-600'
          }`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TickerBox from "@/components/TickerBox";
import AmountTickerBox from "../components/AmountTickerBox";
import Trade from "@/components/Trade";
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
import {
  CurrencyDollarIcon,
  BriefcaseIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from "@heroicons/vue/outline";

export default {
  name: "InsiderCard",
  props: ["result"],
  components: {
    TickerBox,
    Trade,
    CurrencyDollarIcon,
    BriefcaseIcon,
    TrendingUpIcon,
    TrendingDownIcon,
    AmountTickerBox,
  },
  methods: {
    getHumanDate: function (date) {
      return dayjs().to(dayjs(date));
    },
  },
};
</script>