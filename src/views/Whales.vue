<template>
  <main v-if="!state.loading">
    <div v-for="result in state.results" :key="result._id">
      <h1>{{ result.walletID }}</h1>
    </div>
    <div class="tw-flex tw-felx-row tw-ml-4 tw-mr-4">
      <button class="tw-pr-1" @click="onLastPage">prev</button>
      <p>page {{ stateStore.nextPage }} of {{ state.totalPages }}</p>
      <p>
        <button class="tw-pl-1" @click="onNextPage">next</button>
      </p>
    </div>
  </main>
  <main v-else class="tw-flex tw-h-screen">
    <h1 class="tw-m-auto">Loading...</h1>
  </main>
</template>

<script>
import whaleWatch from "../store/whaleWatch";

const { whaleAPILoad, state } = whaleWatch();
import { reactive } from "vue";
//import whalesBox from "../components/whalesbox";
export default {
  name: "Whales",
  setup() {
    const stateStore = reactive({
      nextPage: 1,
    });
    function onNextPage() {
      if (state.isNext == false) {
        return;
      }
      stateStore.nextPage++;
      whaleAPILoad(params.get("crypto"), stateStore.nextPage);
    }

    function onLastPage() {
      if (state.isLast == false) {
        return;
      }
      stateStore.nextPage--;
      whaleAPILoad(params.get("crypto"), stateStore.nextPage);
    }

    const params = new URLSearchParams(window.location.search);

    whaleAPILoad(params.get("crypto"), 1);

    return {
      state,
      onNextPage,
      stateStore,
      onLastPage,
    };
  },
  created() {
    document.title = "🐳 Watch";
  },
  components: {
    //whalesBox
  },
};
</script>
