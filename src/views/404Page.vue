<template>
  <div class="tw-flex tw-h-3/2 tw-justify-center tw-mb-4 tw-mt-4">
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FDGrIBb99B574A%2Fgiphy.gif&f=1&nofb=1"
      alt="404"
    />
  </div>
  <div class="tw-flex tw-justify-center">
    <div>
      <h1 class="tw-text-white tw-font-poppins tw-font-medium tw-text-3xl">
        404 Not Found
      </h1>
      <h2
        class="
          tw-mt-2
          tw-flex
          tw-text-white
          tw-font-poppins
          tw-text-xs
          tw-justify-center
        "
      >
        You know life is always ridiculous.
      </h2>
    </div>
  </div>
  <div class="tw-flex tw-justify-center tw-mt-4">
    <n-button @click="handleClick">
      <span class="tw-text-white tw-font-poppins"
        >Hmm, Truly Sad, Isn't It?
      </span>
    </n-button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ErrorPage",
  setup() {
    const router = useRouter();
    function handleClick() {
      router.push("/");
    }
    return { handleClick };
  },
};
</script>