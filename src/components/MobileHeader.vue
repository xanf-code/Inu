<template>
  <div
    class="
      tw-flex tw-flex-row
      sm:tw-flex-row
      tw-m-5 tw-items-center tw-bg-opacity-20 tw-relative
    "
  >
    <MenuAlt1Icon
      v-if="state.dropdown === false"
      @click="state.dropdown = !state.dropdown"
      class="
        tw-cursor-pointer tw-h-6 tw-pt-1 tw-self-center tw-pr-4 tw-text-white
      "
    />
    <XIcon
      v-else
      @click="state.dropdown = !state.dropdown"
      class="
        tw-cursor-pointer tw-h-6 tw-pt-1 tw-self-center tw-pr-4 tw-text-white
      "
    />
    <div>
      <router-link to="/">
        <transition name="title" appear>
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
        </transition>
      </router-link>
    </div>
  </div>
  <transition name="header">
    <div
      v-if="state.dropdown === true"
      class="
        tw-bg-black tw-absolute tw-flex-col tw-h-screen tw-w-screen tw-z-50
      "
    >
      <router-link to="/">
        <div @click="state.dropdown = false">
          <Icon
            icon="https://img.icons8.com/fluent-systems-regular/50/ffffff/home.png"
            text="Home"
          />
        </div>
      </router-link>
      <router-link to="/whalewatch?type=crypto">
        <div @click="state.dropdown = false">
          <Icon
            icon="https://img.icons8.com/ios-filled/50/ffffff/tail-of-whale.png"
            text="Whale Watch"
          />
        </div>
      </router-link>
      <router-link to="#">
        <div @click="state.dropdown = false">
          <Icon
            icon="https://img.icons8.com/material/50/ffffff/feedback--v2.png"
            text="Feedback"
          />
        </div>
      </router-link>
      <router-link to="#">
        <div @click="state.dropdown = false">
          <Icon
            icon="https://img.icons8.com/material-sharp/24/ffffff/privacy-policy.png"
            text="Privacy Policy"
          />
        </div>
      </router-link>
    </div>
  </transition>
</template>

<script>
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/solid";
import NavStore from "../store/NavStore";
import Icon from "../components/MenuItem";

export default {
  name: "MobileHeader",
  components: {
    MenuAlt1Icon,
    XIcon,
    Icon,
  },
  setup() {
    const { state } = NavStore();
    return {
      state,
    };
  },
};
</script>

<style scoped>
/* enter classes */
.header-enter-from {
  transform: translateX(-400px);
}
.header-enter-active {
  transition: all 0.2s ease-in;
}
/* Leave Classes */
.header-leave-to {
  opacity: 1;
  transform: translateX(-400px);
}
.header-leave-active {
  transition: all 0.3s ease-in-out;
}
.title-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.title-enter-active {
  transition: all 0.3s ease;
}
</style>
