<template>
  <h1>{{ keyValue }}</h1>
  <h1>{{ value.value }}</h1>
</template>


<script>
export default {
  name: "WhalesBox",
  props: ["keyValue", "value"],
};
</script>
