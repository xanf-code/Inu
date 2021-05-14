<template>
  <div
    class="flex bg-gradient-to-r from-gray-700 via-gray-900 to-black py-0.5 px-0.5 rounded-md"
  >
    <span
      class="self-center font-poppins font-normal subpixel-antialiased tracking-wide"
      >{{ text }}</span
    >
  </div>
  <div class="ml-2 mr-2" />
</template>

<script>
export default {
  name: "MenuItems",
  props: ["text"],
};
</script>
