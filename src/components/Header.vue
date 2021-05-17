<template>
  <div
    class="tw-flex tw-flex-row sm:tw-flex-row tw-m-5 tw-justify-between tw-items-center"
  >
    <div>
      <router-link to="/">
        <span class="tw-text-xl tw-font-bold tw-cursor-pointer tw-pt-0.5">
          Insider Shibu🐕🚀🚀
        </span>
      </router-link>
    </div>
    <div
      className="tw-flex tw-flex-row tw-cursor-pointer tw-w-12 sm:tw-w-20 tw-space-x-6 tw-mr-7 tw-tracking-widest"
    >
      <router-link to="/">
        <HomeIcon class="tw-h-6 hover:tw-animate-bounce" />
      </router-link>
      <router-link :to="{ name: 'DownloadPage' }">
        <DownloadIcon class="tw-h-6 hover:tw-animate-bounce" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { HomeIcon, DownloadIcon } from "@heroicons/vue/outline";

export default {
  name: "Header",
  components: {
    HomeIcon,
    DownloadIcon,
  },
};
</script>