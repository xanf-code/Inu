<template>
  <div
    class="tw-flex tw-flex-row sm:tw-flex-row tw-m-5 tw-justify-between tw-items-center"
  >
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
    <div
      className="tw-flex tw-flex-row tw-cursor-pointer tw-space-x-6 tw-mr-8 tw-tracking-widest"
    >
      <router-link to="/">
        <div
          className="tw-flex tw-group tw-items-center tw-font-medium tw-text-sm"
        >
          <HomeIcon class="tw-h-6 group-hover:tw-animate-bounce" />
          <h1 class="tw-font-poppins tw-pl-1 group-hover:tw-animate-bounce">
            Home
          </h1>
        </div>
      </router-link>
      <router-link :to="{ name: 'Whales' }">
        <div
          className="tw-flex tw-group tw-items-center tw-font-medium tw-text-sm"
        >
          <EyeIcon class="tw-h-6 group-hover:tw-animate-bounce" />
          <h1 class="tw-font-poppins tw-pl-1 group-hover:tw-animate-bounce">
            Whales
          </h1>
        </div>
      </router-link>
      <router-link :to="{ name: 'DownloadPage' }">
        <div
          className="tw-flex tw-group tw-items-center tw-font-medium tw-text-sm"
        >
          <DownloadIcon class="tw-h-6 group-hover:tw-animate-bounce" />
          <h1 class="tw-font-poppins tw-pl-1 group-hover:tw-animate-bounce">
            Download
          </h1>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { HomeIcon, DownloadIcon, EyeIcon } from "@heroicons/vue/outline";

export default {
  name: "Header",
  components: {
    HomeIcon,
    DownloadIcon,
    EyeIcon,
  },
};
</script>