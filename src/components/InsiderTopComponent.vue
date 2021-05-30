<template>
  <transition appear tag="div" name="company">
    <div class="tw-flex tw-ml-4 tw-mb-2">
      <img
        width="30"
        :src="`https://www.countryflags.io/${flag.toLowerCase()}/shiny/64.png`"
      />
      <router-link :to="`/company?name=${symbol}`">
        <div
          class="tw-ml-2 tw-self-center tw-box-border tw-bg-gray-900 tw-rounded-md tw-px-1 tw-max-w-md tw-font-medium tw-font-poppins tw-items-center"
        >
          <h1
            class="tw-cursor-pointer tw-capitalize tw-font-poppins tw-font-medium tw-text-white tw-mx-1 tw-my-1 hover:tw-text-blue-600"
          >
            {{ symbol.toLowerCase().replace(/-/g, " ") }}
          </h1>
        </div>
      </router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TopComponent",
  setup() {
    const urlParams = new URLSearchParams(window.location.search);
    let symbol = urlParams.get("symbol");
    let flag = urlParams.get("cc");
    return { symbol, flag };
  },
};
</script>

<style scoped>
.company-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.company-enter-active {
  transition: all 0.4s ease;
}
</style>