<template>
  <div class="tw-flex tw-flex-col tw-h-screen">
    <!-- Header -->
    <header class="tw-bg-black tw-h-15">
      <div class="tw-flex tw-justify-between">
        <router-link to="/">
          <div
            class="
              tw-self-center
              tw-text-xl
              tw-font-bold
              tw-cursor-pointer
              tw-pl-4
              tw-py-4
              tw-flex
              tw-flex-row
            "
          >
            <h1 class="tw-text-white">Shibu&nbsp;</h1>
            <h1 class="tw-text-purple-600">Insider🐕</h1>
          </div>
        </router-link>
        <div class="tw-self-center">
          <a
            href="https://www.producthunt.com/posts/insider-shibu?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-insider-shibu"
            target="_blank"
            ><img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=300524&theme=dark"
              alt="Insider Shibu - See what's happening now in the insiders market | Product Hunt"
              style="width: 220px; height: 40px"
              width="220"
              height="40"
          /></a>
        </div>
      </div>
    </header>
    <main class="tw-overflow-y-auto">
      <!-- Title content / Browse Transactions -->
      <IntroMainContent />
      <!-- Trending Stonks -->
      <h1 class="tw-ml-4 tw-my-4 tw-font-poppins tw-font-bold tw-text-lg">
        Trending Stonks ⚡🔥
      </h1>
      <div v-if="!state.loading">
        <TrendingComponent :TrendingData="state.results" />
      </div>
    </main>
    <div class="tw-flex tw-justify-center" v-if="state.loading">
      <Loader />
    </div>
    <!-- Footer -->
    <!-- <footer class="tw-bg-black tw-relative tw-bottom-0">
      <div class="tw-pl-4 tw-py-3">Footer</div>
    </footer> -->
  </div>
</template>

<script>
import trendingNow from "../store/trendings";
import TrendingComponent from "../components/TrendingComponent.vue";
import { onMounted } from "vue";
import IntroMainContent from "../components/IntroMainContent";
import Loader from "../components/Loader";

export default {
  name: "IntroView",
  components: {
    TrendingComponent,
    IntroMainContent,
    Loader,
  },
  setup() {
    const { state, trendingAPI } = trendingNow();
    onMounted(() => {
      trendingAPI();
    });
    return { state };
  },
};
</script>