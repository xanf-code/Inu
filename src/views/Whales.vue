<template>
  <main v-if="!state.loading">
    <CoinSelect :coins="coinList" />
    <div v-for="result in state.results" :key="result._id">
      <h1>{{ result.walletID }}</h1>
    </div>
    <Pagination
      :goToFirstPage="goToFirstPage"
      :onLastPage="onLastPage"
      :onNextPage="onNextPage"
      :goToLastPage="goToLastPage"
      :nextPageNumber="stateStore.nextPage"
      :lastPageNumber="state.totalPages"
    />
  </main>
  <main v-else class="tw-flex tw-h-screen">
    <h1 class="tw-m-auto">Loading...</h1>
  </main>
</template>

<script>
import whaleWatch from "../store/whaleWatch";
import Pagination from "../components/Pagination";
import CoinSelect from "../components/CoinSelect";
const { whaleAPILoad, state } = whaleWatch();
import { reactive } from "vue";
const coinList = [
  {
    id: 1,
    name: "DogeCoin",
  },
  {
    id: 2,
    name: "SafeMoon",
  },
  {
    id: 3,
    name: "ShibInu",
  },
  {
    id: 4,
    name: "Ethereum",
  },
];
export default {
  components: {
    Pagination,
    CoinSelect,
  },
  setup() {
    const stateStore = reactive({
      nextPage: 1,
    });
    const onNextPage = () => {
      if (state.isNext == false) {
        return;
      }
      stateStore.nextPage++;
      whaleAPILoad(params.get("crypto"), stateStore.nextPage);
    };

    const onLastPage = () => {
      if (state.isLast == false) {
        return;
      }
      stateStore.nextPage--;
      whaleAPILoad(params.get("crypto"), stateStore.nextPage);
    };

    const goToFirstPage = () => {
      if (stateStore.nextPage == 1) {
        return;
      }
      stateStore.nextPage = 1;
      whaleAPILoad(params.get("crypto"), stateStore.nextPage);
    };

    const goToLastPage = () => {
      if (stateStore.nextPage == state.totalPages) {
        return;
      }
      stateStore.nextPage = state.totalPages;
      whaleAPILoad(params.get("crypto"), stateStore.nextPage);
    };
    const params = new URLSearchParams(window.location.search);

    whaleAPILoad(params.get("crypto"), 1);

    return {
      state,
      onNextPage,
      stateStore,
      onLastPage,
      goToFirstPage,
      goToLastPage,
      coinList,
    };
  },
  created() {
    document.title = "🐳 Watch";
  },
};
</script>
