<template>
  <div
    class="
      tw-flex tw-flex-row
      sm:tw-flex-row
      tw-m-5 tw-justify-between tw-items-center
    "
  >
    <div>
      <router-link to="/en">
        <div
          class="
            tw-self-center
            tw-text-xl
            tw-font-bold
            tw-cursor-pointer
            tw-pt-0.5
            tw-flex
            tw-flex-row
          "
        >
          <h1 class="tw-text-white">Shibu&nbsp;</h1>
          <h1 class="tw-text-purple-600">Insider🐕🚀🚀</h1>
        </div>
      </router-link>
    </div>
    <div
      className="tw-flex tw-flex-row tw-cursor-pointer tw-space-x-6 tw-mr-8 tw-tracking-widest"
    >
      <router-link to="/">
        <div
          className="tw-flex tw-pt-2 tw-items-center tw-font-medium tw-text-sm"
        >
          <h1
            class="tw-font-poppins tw-pl-1 tw-text-white hover:tw-text-blue-600"
          >
            Home
          </h1>
        </div>
      </router-link>
      <router-link :to="{ name: 'Whales' }">
        <div
          className="tw-flex tw-items-center tw-pt-2 tw-text-white
              hover:tw-text-blue-600 tw-font-medium tw-text-sm"
        >
          <h1 class="tw-font-poppins tw-pl-1">Whale Watch</h1>
        </div>
      </router-link>
      <n-button color="#8a2be2" @click="handleClick">
        <div class="tw-flex">
          <img src="https://img.icons8.com/android/24/ffffff/twitter.png" />
          <h1
            class="
              tw-flex tw-items-center tw-pl-2 tw-font-poppins tw-font-medium
            "
          >
            Get updates on Twitter
          </h1>
        </div>
      </n-button>
    </div>
  </div>
</template>

<script>
import { NButton } from "naive-ui";
export default {
  name: "Header",
  components: { NButton },
  setup() {
    function handleClick() {
      window.open("https://twitter.com/iamlardBendtner", "_blank");
    }
    return { handleClick };
  },
};
</script>