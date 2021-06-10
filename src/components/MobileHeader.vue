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
      <div class="tw-justify-start tw-px-4 tw-mx-2 tw-mb-3 tw-py-4">
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
  </transition>
</template>

<script>
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/solid";
import NavStore from "../store/NavStore";
import Icon from "../components/MenuItem";
import { NButton } from "naive-ui";

export default {
  name: "MobileHeader",
  components: {
    MenuAlt1Icon,
    XIcon,
    Icon,
    NButton,
  },
  setup() {
    const { state } = NavStore();
    function handleClick() {
      window.open("https://twitter.com/iamlardBendtner", "_blank");
    }
    return {
      handleClick,
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
