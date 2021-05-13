<template>
  <div class="flex flex-row sm:flex-row m-5 items-center">
    <MenuAlt1Icon
      @click="methods.onMenuClick"
      class="cursor-pointer h-6 pt-0.5 self-center pr-4 text-white"
    />
    <div>
      <router-link to="/">
        <h1 class="self-center text-xl font-bold cursor-pointer pt-0.5">
          Insider
          <span class="text-purple-600"> Shibu🐕🚀🚀 </span>
        </h1>
      </router-link>
    </div>
  </div>
</template>

<script>
import { MenuAlt1Icon } from "@heroicons/vue/solid";
import toggleNavBar from "../store/NavBarToggle";

export default {
  name: "MobileHeader",

  setup() {
    const { showNavBar, methods } = toggleNavBar();
    return {
      showNavBar,
      methods,
    };
  },

  components: {
    MenuAlt1Icon,
  },
};
</script>
