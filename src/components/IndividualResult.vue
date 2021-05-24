<template>
  <div
    class="tw-flex tw-flex-col"
    v-for="individual in insider"
    :key="individual._id"
  >
    <transition appear tag="div" name="insider">
      <IndividualInsiderCard :result="individual" />
    </transition>
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

<style scoped>
.insider-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.insider-enter-active {
  transition: all 0.4s ease;
}
.image-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.image-enter-active {
  transition: all 0.4s ease;
}
</style>