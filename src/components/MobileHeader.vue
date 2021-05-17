<template>
  <div class="tw-flex tw-flex-row sm:tw-flex-row tw-m-5 tw-items-center">
    <MenuAlt1Icon
      @click="methods.onMenuClick"
      class="tw-cursor-pointer tw-h-6 tw-pt-0.5 tw-self-center tw-pr-4 tw-text-white"
    />
    <div>
      <router-link to="/">
        <span class="tw-text-xl tw-font-bold tw-cursor-pointer tw-pt-0.5">
          Insider Shibu🐕🚀🚀
        </span>
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