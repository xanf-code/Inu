<template>
  <div class="flex justify-end">
    <p class="font-semibold pl-1 pr-1">{{ text }}</p>

    <!-- <Icon class="h-4 self-center pr-1" color="{{colour}}" /> -->
  </div>
</template>

<script>
export default {
  name: "Trade",
  props: ["text", "colour"],
};
</script>
