<template>
  <div
    class="
      tw-box-border
      tw-border
      tw-border-black
      tw-h-32
      tw-px-2
      tw-py-2
      tw-bg-black
      tw-rounded-md
      tw-cursor-pointer
      tw-mr-1.5
      tw-ml-1.5
      tw-mb-1.5
      hover:tw-border-blue-600
    "
  >
    <div class="tw-flex tw-justify-between">
      <div class="tw-flex tw-justify-start">
        <TickerBox
          :text="result.Ticker == '' ? 'Anonymous' : result.Ticker"
          color="tw-text-purple-800"
        />
        <h1
          class="
            tw-text-purple-800
            tw-max-w-md
            tw-font-semibold
            tw-text-sm
            tw-self-center
            tw-font-poppins
            tw-pl-1
            tw-pr-1
          "
        >
          {{
            truncate(
              result.CompanyName == "" ? "Anonymous" : result.CompanyName,
              15,
              "..."
            )
          }}
        </h1>
      </div>
      <h1
        class="
          tw-text-gray-600
          tw-font-medium
          tw-font-poppins
          tw-truncate
          tw-text-sm
          tw-pt-0.5
          tw-pr-2
        "
      >
        {{ getDate(result.NotificationDate) }}
      </h1>
    </div>
    <div class="tw-flex tw-justify-between">
      <div>
        <h1
          class="
            tw-capitalize
            tw-font-semibold
            tw-font-poppins
            tw-pt-2
            tw-pl-1
            tw-text-white
          "
        >
          {{
            truncate(
              result.InsiderName == ""
                ? "Anonymous"
                : result.InsiderName.toLowerCase(),
              20,
              "..."
            )
          }}
        </h1>
        <p
          class="
            tw-text-purple-600
            tw-font-semibold
            tw-font-poppins
            tw-pt-1
            tw-pl-1
            tw-pb-1.5
          "
        >
          {{
            truncate(
              result.InsiderTitle == "" ? "Anonymous" : result.InsiderTitle,
              20,
              "..."
            )
          }}
        </p>
      </div>
      <div class="tw-pt-1">
        <div
          :class="`tw-flex tw-justify-end ${
            result.QuantityShares.includes('+')
              ? 'tw-text-yellow-500'
              : 'tw-text-red-600'
          }`"
        >
          <BriefcaseIcon
            :class="`tw-h-4 tw-self-center tw-pr-1 tw-pt-0.5 ${
              result.Value.includes('+')
                ? 'tw-text-yellow-500'
                : 'tw-text-red-600'
            }`"
          />
          <Trade
            :text="result.QuantityShares == '' ? '-' : result.QuantityShares"
          />
        </div>
        <div
          :class="`tw-flex tw-justify-end ${
            result.Percentage.includes('+')
              ? 'tw-text-yellow-500'
              : 'tw-text-red-600'
          }`"
        >
          <TrendingUpIcon
            v-if="result.Percentage.includes('+')"
            class="tw-h-4 tw-self-center tw-pr-1 tw-text-yellow-500"
          />

          <TrendingDownIcon
            v-else
            class="tw-h-4 tw-self-center tw-pr-1 tw-text-red-600"
          />
          <Trade :text="result.Percentage == '' ? '-' : result.Percentage" />
        </div>
      </div>
    </div>
    <div class="tw-flex tw-justify-between">
      <div class="tw-flex">
        <TickerBox
          :text="
            result.TradeType == 'Planned purchase' ||
            result.TradeType == 'Planned sale'
              ? 'Planned'
              : result.TradeType
          "
          color="tw-text-purple-800"
        />
        <h1
          class="
            tw-truncate
            tw-text-white
            tw-max-w-md
            tw-font-medium
            tw-font-poppins
            tw-pl-1.5
            tw-self-center
          "
        >
          {{
            result.Price == ""
              ? "-"
              : result.CurrencyCode + " " + result.Price.split(".")[0]
          }}
        </h1>
      </div>
      <div class="tw-flex">
        <CurrencyDollarIcon
          :class="`tw-h-6 tw-pr-0.5 tw-pt-0.5 hover:tw-animate-spin ${
            result.Value.includes('+')
              ? 'tw-text-yellow-500'
              : 'tw-text-red-600'
          }`"
        />
        <AmountTickerBox
          :text="result.Value == '' ? 'Anonymous' : result.Value"
          :color="`${
            result.Value.includes('+') ? 'tw-text-white' : 'tw-text-red-600'
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
  setup() {
    function truncate(text, length, clamp) {
      clamp = clamp || "...";
      var node = document.createElement("div");
      node.innerHTML = text;
      var content = node.textContent;
      return content.length > length
        ? content.slice(0, length) + clamp
        : content;
    }

    function getDate(date) {
      var relativeTime = require("dayjs/plugin/relativeTime");
      dayjs.extend(relativeTime);
      return dayjs().to(dayjs(date));
    }
    return {
      getDate,
      truncate,
    };
  },
};
</script>