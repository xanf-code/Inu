<template>
  <div
    class="box-border mx-0.5 bg-gray-900 rounded-md px-1 text-purple-800 max-w-md font-medium mr-1.5"
  >
    <span> {{ text }} </span>
  </div>
</template>

<script>
export default {
  name: "TickerBox",
  props: ["text"],
};
</script>
