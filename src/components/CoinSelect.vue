<template>
  <select
    v-model="selected"
    class="tw-form-select tw-text-black tw-mt-10 tw-block tw-w-full tw-border tw-p-3 tw-rounded"
    @change="onChange()"
  >
    <option
      class="tw-text-black"
      v-for="coin in coins"
      :key="coin.ID"
      :value="coin.ID"
    >
      {{ coin.Name }}
    </option>
  </select>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CoinSelect",
  props: ["coins"],
  setup(coins, { emit }) {
    const selected = ref(2);
    return {
      selected,
      onChange() {
        const coin = coins.coins.find((item) => item.ID === selected.value);
        emit("get-coin", coin);
      },
    };
  },
};
</script>