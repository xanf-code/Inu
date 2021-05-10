<template>
  <div class="flex flex-col h-screen">
    <header class="bg-black">
      <Header />
    </header>
    <main class="overflow-y-auto">
      <Home />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "@/views/Home";

export default {
  components: {
    Header,
    Home,
  },
  watch: {
    $route(to) {
      document.title = `${to.meta.title}`;
    },
  },
};
</script>