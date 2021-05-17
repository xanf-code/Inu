<template>
  <div class="tw-flex tw-flex-row sm:tw-flex-row tw-m-5 tw-items-center">
    <MenuAlt1Icon
      @click="methods.onMenuClick"
      class="tw-cursor-pointer tw-h-6 tw-pt-0.5 tw-self-center tw-pr-4 tw-text-white"
    />
    <div>
      <router-link to="/">
        <h1
          class="tw-self-center tw-text-xl tw-font-bold tw-cursor-pointer tw-pt-0.5 tw-text-white"
        >
          Insider
          <span class="tw-text-purple-600"> Shibu🐕🚀🚀 </span>
        </h1>
      </router-link>
    </div>
  </div>
</template>

<script>
import { MenuAlt1Icon } from "@heroicons/vue/solid";
import toggleNavBar from "../store/NavStore";
export default {
  name: "MobileHeader",
  setup() {
    const { state, methods } = toggleNavBar();
    return {
      state,
      methods,
    };
  },
  components: {
    MenuAlt1Icon,
  },
};
</script>