<template>
  <div class="tw-relative tw-inline-flex">
    <svg
      class="tw-w-2 tw-h-2 tw-absolute tw-top-0 tw-right-0 tw-m-4 tw-pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 412 232"
    >
      <path
        d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
        fill="#648299"
        fill-rule="nonzero"
      />
    </svg>

    <select
      v-model="selected"
      class="tw-border tw-border-gray-300 tw-rounded-lg tw-text-gray-600 tw-h-10 tw-pl-5 tw-pr-10 tw-bg-white hover:tw-border-gray-400 focus:tw-outline-none tw-appearance-none tw-font-poppins tw-text-sm"
      @change="onChange()"
    >
      <option
        class="tw-text-black tw-font-poppins tw-text-sm"
        v-for="coin in coins"
        :key="coin.ID"
        :value="coin.ID"
      >
        {{ coin.Name }}
      </option>
    </select>
  </div>
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