<template>
  <div class="flex">
    <span class="self-center font-normal subpixel-antialiased tracking-wide">{{
      text
    }}</span>
    <div class="ml-2 mr-2" />
  </div>
</template>

<script>
export default {
  name: "MenuItems",
  props: ["text"],
};
</script>
