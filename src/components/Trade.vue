<template>
  <div class="flex justify-end">
    <p class="font-semibold pl-1 pr-1">{{ text }}</p>

    <ChevronUpIcon
      v-if="text.includes('+')"
      class="h-4 self-center pr-1 text-yellow-500"
    />

    <ChevronDownIcon v-else class="h-4 self-center pr-1 text-red-600" />
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
