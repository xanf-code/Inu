<template>
  <div
    class="box-border h-32 px-2 py-2 bg-black rounded-md cursor-pointer mr-1.5 ml-1.5 mb-1.5 hover:animate-pulse"
  >
    <div class="flex justify-between">
      <div class="flex justify-start">
        <TickerBox :text="result.ticker" />
        <h1
          class="truncate text-purple-800 max-w-md font-medium font-sans pl-1"
        >
          {{ result.companyName }}
        </h1>
      </div>
      <h1 class="text-gray-600 font-semibold font-sans truncate text-sm pt-0.5">
        {{ getHumanDate(result.date) }}
      </h1>
    </div>
    <div class="flex justify-between">
      <div>
        <h1 class="truncate max-w-md font-bold font-sans pt-1 pl-1">
          {{ result.insiderName }}
        </h1>
        <p class="truncate font-sans text-purple-600 font-semibold pl-1 pb-1.5">
          {{ result.insiderTitle }}
        </p>
      </div>
      <div class="pt-1">
        <div
          :class="`flex justify-end ${
            result.tradeQuantity.includes('+')
              ? 'text-yellow-500'
              : 'text-red-600'
          }`"
        >
          <BriefcaseIcon
            :class="`h-4 self-center pr-1 pt-0.5 ${
              result.value.includes('+') ? 'text-yellow-500' : 'text-red-600'
            }`"
          />
          <Trade :text="result.tradeQuantity" />
        </div>
        <div
          :class="`flex justify-end ${
            result.stockPercent.includes('+') ||
            result.stockPercent.includes('New')
              ? 'text-yellow-500'
              : 'text-red-600'
          }`"
        >
          <TrendingUpIcon
            v-if="result.stockPercent.includes('+')"
            class="h-4 self-center pr-1 text-yellow-500"
          />

          <TrendingDownIcon v-else class="h-4 self-center pr-1 text-red-600" />
          <Trade :text="result.stockPercent" />
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex">
        <TickerBox :text="result.tradeType" />
        <h1 class="truncate text-white max-w-md font-medium font-sans pl-1.5">
          {{ result.tradePrice }}
        </h1>
      </div>
      <div class="flex">
        <CurrencyDollarIcon
          :class="`h-6 pr-0.5 pt-0.5 hover:animate-spin ${
            result.value.includes('+') ? 'text-yellow-500' : 'text-red-600'
          }`"
        />
        <TickerBox :text="result.value" />
      </div>
    </div>
  </div>
</template>

<script>
import TickerBox from "@/components/TickerBox";
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
  name: "IndividualInsiderCard",
  props: ["result"],
  components: {
    TickerBox,
    Trade,
    CurrencyDollarIcon,
    BriefcaseIcon,
    TrendingUpIcon,
    TrendingDownIcon,
  },
  methods: {
    getHumanDate: function (date) {
      return dayjs().to(dayjs(date));
    },
  },
};
</script>