<template>
  <div
    class="tw-flex tw-flex-col"
    v-for="individual in insider"
    :key="individual._id"
  >
    <router-link :to="'/info/' + individual.insiderName">
      <InsiderCard :result="individual" />
    </router-link>
  </div>
</template>

<script>
import InsiderCard from "@/components/InsiderCard";
export default {
  components: {
    InsiderCard,
  },
  props: ["insider"],
};
</script>