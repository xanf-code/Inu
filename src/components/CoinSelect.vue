<template>
  <select
    v-model="selected"
    class="tw-form-select tw-text-black tw-mt-10 tw-block tw-w-full tw-border tw-p-3 tw-rounded"
    @change="onChange()"
  >
    <option class="tw-text-black" value="0">Select Coin Here</option>
    <option
      class="tw-text-black"
      v-for="coin in coins"
      :key="coin.id"
      :value="coin.id"
    >
      {{ coin.name }}
    </option>
  </select>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CoinSelect",
  props: ["coins"],
  setup(coins, { emit }) {
    const selected = ref(0);
    return {
      selected,
      onChange() {
        const coin = coins.find((item) => item.id === selected.value);
        console.log(coin);
        emit("get-coin", coin);
      },
    };
  },
};
</script>