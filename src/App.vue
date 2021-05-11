<template>
  <div class="flex flex-col h-screen">
    <header class="bg-black">
      <Header />
    </header>
    <main class="overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  watch: {
    $route(to) {
      document.title = `${to.meta.title}`;
    },
  },
};
</script>