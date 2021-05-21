<template>
  <div
    class="tw-flex tw-flex-row sm:tw-flex-row tw-m-5 tw-items-center tw-bg-opacity-20 tw-relative"
  >
    <MenuAlt1Icon
      v-if="state.dropdown === false"
      @click="state.dropdown = !state.dropdown"
      class="tw-cursor-pointer tw-h-6 tw-pt-1 tw-self-center tw-pr-4 tw-text-white"
    />
    <XIcon
      v-else
      @click="state.dropdown = !state.dropdown"
      class="tw-cursor-pointer tw-h-6 tw-pt-1 tw-self-center tw-pr-4 tw-text-white"
    />
    <div>
      <router-link to="/">
        <div
          class="tw-self-center tw-text-xl tw-font-bold tw-cursor-pointer tw-pt-0.5 tw-flex tw-flex-row"
        >
          <h1 class="tw-text-white">Shibu&nbsp;</h1>
          <h1 class="tw-text-purple-600">Insider🐕🚀🚀</h1>
        </div>
      </router-link>
    </div>
  </div>
  <div v-if="state.dropdown === true" class="tw-absolute tw-flex tw-flex-col">
    <router-link to="/">
      <button
        @click="state.dropdown = false"
        class="tw-w-full focus:tw-outline-none tw-bg-gray-800 tw-py-4 px-4 tw-text-sm tw-border-bottom tw-text-white"
      >
        <h1 class="tw-font-poppins tw-font-bold">Home</h1>
      </button>
    </router-link>
    <router-link to="/whalewatch?type=crypto">
      <button
        @click="state.dropdown = false"
        class="tw-w-full focus:tw-outline-none tw-bg-gray-800 tw-py-4 px-4 tw-text-sm tw-border-bottom tw-text-white"
      >
        <h1 class="tw-font-poppins tw-font-bold">Whale Watch</h1>
      </button>
    </router-link>
  </div>
</template>

<script>
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/solid";
import { reactive } from "vue";
const state = reactive({
  dropdown: false,
});

export default {
  name: "MobileHeader",
  components: {
    MenuAlt1Icon,
    XIcon,
  },
  setup() {
    return {
      state,
    };
  },
};
</script>
