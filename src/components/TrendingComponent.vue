<template>
  <div
    class="
      tw-mx-4 tw-my-2 tw-flex tw-flex-col tw-gap-4
      lg:tw-grid lg:tw-grid-rows-4 lg:tw-grid-flow-col
      md:tw-grid md:tw-grid-rows-5 md:tw-grid-flow-col
    "
  >
    <div v-for="data in TrendingData" :key="data.Ticker">
      <div
        class="
          tw-py-4
          tw-px-2
          tw-box-border
          tw-border
          tw-border-black
          tw-bg-black
          tw-rounded-md
          tw-cursor-pointer
          hover:tw-border-blue-600
        "
      >
        <div class="tw-ml-2 tw-flex">
          <div class="tw-self-center tw-mr-4">
            <img
              width="30"
              :src="`https://www.countryflags.io/${data.CountryCode.toLowerCase()}/shiny/64.png`"
            />
          </div>
          <div>
            <h1 class="tw-text-white tw-font-poppins tw-font-medium">
              {{ truncate(data.InsiderName, 20, "...") }}
            </h1>
            <span
              class="tw-text-xs tw-font-poppins tw-font-medium tw-text-blue-600"
              >{{ data.Ticker == "" ? "-" : data.Ticker }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trending",
  props: ["TrendingData"],
  setup() {
    function truncate(text, length, clamp) {
      clamp = clamp || "...";
      var node = document.createElement("div");
      node.innerHTML = text;
      var content = node.textContent;
      return content.length > length
        ? content.slice(0, length) + clamp
        : content;
    }
    return { truncate };
  },
};
</script>