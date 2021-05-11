<template>
  <main
    v-if="!loading"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-2"
  >
    <Result :insider="result" />
  </main>
  <main v-else class="flex h-screen"><h1 class="m-auto">Loading...</h1></main>
</template>

<script>
import Result from "@/components/Result";
import { ref } from "vue";

export default {
  setup() {
    const result = ref([]);
    const loading = ref(true);

    const InsiderAPI = () => {
      fetch(
        "https://insidershibu.herokuapp.com/scrapedata/getInsiderData?limit=30"
      )
        .then((res) => res.json())
        .then((data) => {
          result.value = data.result;
          loading.value = false;
        });
    };
    return {
      result,
      loading,
      InsiderAPI,
    };
  },
  created() {
    this.InsiderAPI();
  },
  name: "Home",
  components: {
    Result,
  },
};
</script>
