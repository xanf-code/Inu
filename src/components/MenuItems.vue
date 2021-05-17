<template>
  <div
    class="tw-flex tw-bg-gradient-to-r tw-from-gray-700 tw-via-gray-900 tw-to-black tw-py-0.5 tw-px-0.5 tw-rounded-md"
  >
    <span
      class="tw-self-center tw-font-poppins tw-font-normal tw-subpixel-antialiased tw-tracking-wide"
      >{{ text }}</span
    >
  </div>
  <div class="tw-ml-2 tw-mr-2" />
</template>

<script>
export default {
  name: "MenuItems",
  props: ["text"],
};
</script>
