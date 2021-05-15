<template>
  <h1>{{ keyValue }}</h1>
  <h1>{{ value.value }}</h1>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";

export default {
  name: "WhalesBox",
  props: ["keyValue", "value"],
};
</script>
