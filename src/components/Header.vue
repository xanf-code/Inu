<template>
  <div class="flex flex-row sm:flex-row m-5 justify-between items-center">
    <div>
      <router-link to="/">
        <h1 class="self-center text-xl font-bold cursor-pointer">
          Insider
          <span class="text-purple-600"> Shibu🐕🚀🚀 </span>
        </h1>
      </router-link>
    </div>
    <div
      className="flex flex-row cursor-pointer w-12 sm:w-20 space-x-6 mr-7 tracking-widest"
    >
      <router-link to="/">
        <HomeIcon class="h-6 hover:animate-bounce" />
      </router-link>
      <router-link :to="{ name: 'DownloadPage' }">
        <DownloadIcon class="h-6 hover:animate-bounce" />
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