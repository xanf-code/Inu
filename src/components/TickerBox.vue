<template>
  <div
    :class="`tw-box-border tw-mx-0.5 tw-bg-gray-900 tw-rounded-md tw-px-1 ${color} tw-max-w-md tw-font-semibold tw-font-poppins tw-mr-1.5 tw-self-center`"
  >
    <span> {{ text }} </span>
  </div>
</template>

<script>
export default {
  name: "TickerBox",
  props: ["text", "color"],
};
</script>
