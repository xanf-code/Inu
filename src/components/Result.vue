<template>
  <div
    class="tw-flex tw-flex-col"
    v-for="individual in insider"
    :key="individual._id"
  >
    <transition appear tag="div" name="insider">
      <router-link
        :to="`/info/${
          individual.InsiderName == '' ? 'Anonymous' : individual.InsiderName
        }?symbol=${individual.CompanyName}&cc=${individual.CountryCode}`"
      >
        <InsiderCard :result="individual" />
      </router-link>
    </transition>
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