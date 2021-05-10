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
      <!-- <h1 class="text-gray-600 font-semibold font-sans truncate text-sm">
        {moment.utc(result.date).local().startOf('seconds').fromNow()}
      </h1> -->
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
      <!-- <div class="pt-1">
        <div class="flex">
          <BriefcaseIcon class="h-4 self-center pr-1"
          :color= result.tradeQuantity.includes("+") ? "green" : "red"} /> <Trade
          :text= result.tradeQuantity Icon={result.tradeQuantity.includes("+") ?
          ChevronUpIcon : ChevronDownIcon}
          color={result.tradeQuantity.includes("+") ? "green" : "red"} />
        </div>
        <div class="flex justify-end">
          {result.tradeQuantity.includes("+") ?
          <TrendingUpIcon class="h-4 self-center pr-1" color="green" /> :
          <TrendingDownIcon class="h-4 self-center pr-1" color="red" />} <Trade
          text={result.stockPercent} Icon={result.tradeQuantity.includes("+") ?
          ChevronUpIcon : ChevronDownIcon}
          color={result.tradeQuantity.includes("+") ? "green" : "red"} />
        </div>
      </div> -->
    </div>
    <!-- <div class="flex justify-between">
      <div class="flex">
        <TickerBox text="{result.tradeType}" />
        <h1 class="truncate text-white max-w-md font-medium font-sans pl-1.5">
          {result.tradePrice}
        </h1>
      </div>
      <div class="flex">
        <CurrencyDollarIcon class="h-6 pr-0.5 hover:animate-spin"
        color={result.value.includes('+') ? "green" : "red"} />
        <TickerBox text="{result.value}" />
      </div>
    </div> -->
  </div>
</template>

<script>
import TickerBox from "../components/TickerBox";
export default {
  name: "InsiderCard",
  props: ["result"],
  components: {
    TickerBox,
  },
};
</script>