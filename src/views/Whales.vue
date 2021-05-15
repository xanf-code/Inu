<template>
  <main v-if="!loading">
    <div v-for="(value, key) in results" :key="key">
      <whalesBox :keyValue="key" :value="value" />
    </div>
  </main>
  <main v-else class="flex h-screen">
    <h1 class="m-auto">Loading...</h1>
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
