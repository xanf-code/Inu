<template>
  <div
    class="tw-flex tw-box-border tw-justify-center tw-bg-gray-800 tw-rounded-md tw-px-4 tw-mx-2 tw-mb-3 tw-py-4 first:tw-mt-4"
  >
    <img :src="icon" width="25" />
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: ["icon"],
};
</script>

