<template>
  <main v-if="!state.loading">
    <CoinSelect :coins="coinList" @get-coin="getNewData" />
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
    ID: 1,
    Name: "DogeCoin",
  },
  {
    ID: 2,
    Name: "SafeMoon",
  },
  {
    ID: 3,
    Name: "ShibInu",
  },
  {
    ID: 4,
    Name: "Ethereum",
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
      coinName: "safemoon",
    });
    const onNextPage = () => {
      if (state.isNext == false) {
        return;
      }
      stateStore.nextPage++;
      whaleAPILoad(stateStore.coinName, stateStore.nextPage);
    };

    const onLastPage = () => {
      if (state.isLast == false) {
        return;
      }
      stateStore.nextPage--;
      whaleAPILoad(stateStore.coinName, stateStore.nextPage);
    };

    const goToFirstPage = () => {
      if (stateStore.nextPage == 1) {
        return;
      }
      stateStore.nextPage = 1;
      whaleAPILoad(stateStore.coinName, stateStore.nextPage);
    };

    const goToLastPage = () => {
      if (stateStore.nextPage == state.totalPages) {
        return;
      }
      stateStore.nextPage = state.totalPages;
      whaleAPILoad(stateStore.coinName, stateStore.nextPage);
    };

    whaleAPILoad(stateStore.coinName, 1);

    const getNewData = (coin) => {
      stateStore.coinName = coin.Name;
      whaleAPILoad(coin.Name, 1);
    };

    return {
      state,
      onNextPage,
      stateStore,
      onLastPage,
      goToFirstPage,
      goToLastPage,
      coinList,
      getNewData,
    };
  },
  created() {
    document.title = "🐳 Watch";
  },
};
</script>
