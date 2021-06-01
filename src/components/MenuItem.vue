<template>
  <div class="tw-flex tw-flex-row tw-justify-between">
    <div class="tw-flex tw-flex-row">
      <div
        class="tw-box-border tw-justify-start tw-px-4 tw-mx-2 tw-mb-3 tw-py-4 first:tw-mt-4"
      >
        <img :src="icon" width="25" />
      </div>
      <div
        class="tw-self-center tw-font-poppins tw-font-medium tw-tracking-wider"
      >
        <h1>{{ text }}</h1>
      </div>
    </div>
    <div class="tw-flex tw-items-center tw-mr-4 tw-text-gray-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="tw-h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: ["icon", "text"],
};
</script>

