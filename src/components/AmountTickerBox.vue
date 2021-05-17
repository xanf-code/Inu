<template>
  <div
    class="tw-box-border tw-mx-0.5 tw-bg-gray-900 tw-rounded-md tw-px-1 tw-max-w-md tw-font-medium tw-font-poppins tw-mr-1.5 tw-self-center tw-items-center"
    :class="`${color}`"
  >
    <span> {{ text }} </span>
  </div>
</template>

<script>
export default {
  name: "AmountTickerBox",
  props: ["text", "color"],
};
</script>
