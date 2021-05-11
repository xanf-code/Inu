<template>
  <div
    class="flex flex-col"
    v-for="individual in insider"
    :key="individual._id"
  >
    <IndividualInsiderCard :result="individual" />
  </div>
</template>

<script>
import IndividualInsiderCard from "@/components/IndividualInsiderCard";
export default {
  components: {
    IndividualInsiderCard,
  },
  props: ["insider"],
};
</script>