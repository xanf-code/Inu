<template>
  <div
    class="tw-box-border tw-h-32 tw-px-2 tw-py-2 tw-bg-black tw-rounded-md tw-cursor-pointer tw-mr-1.5 tw-ml-1.5 tw-mb-1.5 hover:tw-animate-pulse"
  >
    <h1>{{ results.walletID }}</h1>
  </div>
</template>

<script>
export default {
  props: ["results"],
};
</script>