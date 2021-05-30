<template>
  <div
    class="tw-flex tw-flex-col"
    v-for="individual in insider"
    :key="individual._id"
  >
    <router-link
      :to="`/info/${
        individual.InsiderName
      }?symbol=${individual.CompanyName.toLowerCase().replace(/ /g, '-')}`"
    >
      <transition appear tag="div" name="insider">
        <InsiderCard :result="individual" />
      </transition>
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

<style scoped>
.insider-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.insider-enter-active {
  transition: all 0.4s ease;
}
</style>