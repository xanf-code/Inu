<template>
  <div class="tw-flex tw-flex-col">
    <div
      class="
        tw-self-center tw-font-poppins tw-text-xl tw-font-semibold
        md:tw-pb-4 md:tw-pt-2
        tw-pl-4 tw-pb-4 tw-pt-2
      "
    >
      See what’s happening now in the markets!
    </div>
    <router-link to="/en">
      <div class="tw-flex tw-pl-4 md:tw-justify-center">
        <n-button color="#151441">
          <div class="tw-flex">
            <h1
              class="
                tw-flex tw-items-center tw-pr-2 tw-font-poppins tw-font-medium
              "
            >
              Browse Recent Transactions
            </h1>
            <img
              src="https://img.icons8.com/small/16/ffffff/circled-right.png"
            />
          </div>
        </n-button>
      </div>
    </router-link>
  </div>
</template>

<script>
import { NButton } from "naive-ui";

export default {
  name: "IntroMainContent",
  components: {
    NButton,
  },
};
</script>