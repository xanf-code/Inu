<template>
  <div class="flex flex-row sm:flex-row m-5 items-center">
    <MenuAlt1Icon
      @click="onMenuClick()"
      class="cursor-pointer h-6 pt-0.5 self-center pr-2 text-white"
    />
    <div>
      <router-link to="/">
        <h1 class="self-center text-xl font-bold cursor-pointer">
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
    const { showNavBar, onMenuClick } = toggleNavBar();
    return {
      showNavBar,
      onMenuClick,
    };
  },
  components: {
    MenuAlt1Icon,
  },
};
</script>
