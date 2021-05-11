<template>
  <main
    v-if="!loading"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-2"
  >
    <IndividualResult :insider="results" />
  </main>
  <main v-else class="flex h-screen"><h1 class="m-auto">Loading...</h1></main>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import IndividualResult from "@/components/IndividualResult";

export default {
  name: "InsiderPage",
  components: {
    IndividualResult,
  },
  setup() {
    const results = ref({});
    const loading = ref(true);
    const route = useRoute();
    onBeforeMount(() => {
      fetch(
        `https://insidershibu.herokuapp.com/scrapedata/getInsiderData/${route.params.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          results.value = data.result;
          loading.value = false;
        });
    });
    return {
      results,
    };
  },
  created() {
    document.title = this.$route.params.id;
  },
};
</script>