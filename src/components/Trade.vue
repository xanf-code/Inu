<template>
  <div class="tw-flex tw-justify-end">
    <p class="tw-font-normal tw-font-poppins tw-pl-1 tw-pr-1">{{ text }}</p>

    <ChevronUpIcon
      v-if="text.includes('+')"
      class="tw-h-4 tw-self-center tw-pr-1 tw-text-yellow-500"
    />

    <ChevronDownIcon
      v-else
      class="tw-h-4 tw-self-center tw-pr-1 tw-text-red-600"
    />
  </div>
</template>

<script>
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/solid";

export default {
  name: "Trade",
  props: ["text"],
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
  },
};
</script>
