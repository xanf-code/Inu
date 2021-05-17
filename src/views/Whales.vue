<template>
  <main v-if="!loading">
    <div>
      <whalesBox :results="results" />
    </div>
  </main>
  <main v-else class="tw-flex tw-h-screen">
    <h1 class="tw-m-auto">Loading...</h1>
  </main>
</template>

<script>
import whaleWatch from "../store/whaleWatch";
import whalesBox from "../components/whalesbox";
export default {
  name: "Whales",
  setup() {
    const { whaleAPILoad, results, loading } = whaleWatch();

    whaleAPILoad();

    return {
      results,
      loading,
    };
  },
  created() {
    document.title = "🐳 Watch";
  },
  components: { whalesBox },
};
</script>
