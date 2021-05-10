<template>
  <div
    class="flex flex-col"
    v-for="individual in insider"
    :key="individual._id"
  >
    <InsiderCard :result="individual" />
  </div>
</template>

<script>
import InsiderCard from "../components/InsiderCard";
export default {
  components: {
    InsiderCard,
  },
  props: ["insider"],
};
</script>