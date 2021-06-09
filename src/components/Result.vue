<template>
  <div
    class="tw-flex tw-flex-col"
    v-for="individual in insider"
    :key="individual._id"
    :id="individual._id"
  >
    <router-link
      :to="`/info/${
        individual.InsiderName == '' ? 'Anonymous' : individual.InsiderName
      }?symbol=${individual.CompanyName}&cc=${individual.CountryCode}`"
      @click="navigationStarts(individual._id)"
    >
      <transition appear tag="div" name="insider">
        <InsiderCard :result="individual" />
      </transition>
    </router-link>
  </div>
</template>

<script>
import InsiderCard from "@/components/InsiderCard";
import topLevelAPI from "../store/toplevelAPI";
import { onActivated, ref } from "vue";

const navID = ref("null");

export default {
  props: ["insider"],
  components: {
    InsiderCard,
  },
  setup() {
    const { state } = topLevelAPI();

    function navigationStarts(id) {
      navID.value = id;
    }

    function scrollIntoView(id) {
      if (id === "null") {
        return;
      }
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    onActivated(() => {
      if (state.results.length > 0) {
        scrollIntoView(navID.value);
        navID.value = "null";
      } else {
        return;
      }
    });

    return { navigationStarts };
  },
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