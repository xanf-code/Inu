<template>
  <main
    v-if="!loading"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-2"
  >
    <Result :insider="result" />
  </main>
  <main v-else class="flex h-screen"><h1 class="m-auto">Loading...</h1></main>
</template>

<script>
import Result from "@/components/Result";
export default {
  name: "Home",
  components: {
    Result,
  },
  data() {
    return {
      loading: true,
      result: [],
    };
  },
  methods: {
    async fetchInsiderData() {
      const res = await fetch(
        "https://insidershibu.herokuapp.com/scrapedata/getInsiderData?limit=30"
      );
      const data = await res.json();
      return data;
    },
  },
  async created() {
    const data = await this.fetchInsiderData();
    this.result = data.result;
    this.loading = false;
  },
};
</script>
