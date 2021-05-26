<template >
  <div class="tw-flex tw-flex-row tw-justify-between">
    <transition name="coins" appear>
      <div v-if="!state.loading">
        <CoinSelect :coins="coinList" @get-coin="getNewData" />
      </div>
    </transition>
    <div v-if="!state.loading" class="tw-mt-1">
      <transition name="pagination" appear>
        <Pagination
          class="tw-justify-center"
          :goToFirstPage="goToFirstPage"
          :onLastPage="onLastPage"
          :onNextPage="onNextPage"
          :goToLastPage="goToLastPage"
          :nextPageNumber="stateStore.nextPage"
          :lastPageNumber="state.totalPages"
        />
      </transition>
    </div>
  </div>
  <main
    class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-pt-2"
    v-if="!state.loading"
  >
    <div v-for="result in state.results" :key="result._id">
      <transition appear tag="div" name="whales">
        <Whalesbox :results="result" />
      </transition>
    </div>
  </main>
  <main v-else class="tw-flex tw-h-screen tw-justify-center tw-self-center">
    <Loader />
  </main>
</template>

<script>
import whaleWatch from "../store/whaleWatch";
import Pagination from "../components/Pagination";
import CoinSelect from "../components/CoinSelect";
import Whalesbox from "../components/whalesbox";
import Loader from "../components/Loader";

const { whaleAPILoad, state } = whaleWatch();
import { reactive } from "vue";
const coinList = [
  {
    ID: 2,
    Name: "SafeMoon",
  },
  {
    ID: 1,
    Name: "DogeCoin",
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
    Loader,
    CoinSelect,
    Whalesbox,
  },
  setup() {
    const stateStore = reactive({
      nextPage: 1,
      coinName: "dogecoin",
    });
    const onNextPage = () => {
      if (state.isNext == false) {
        return;
      }
      state.loading = true;
      stateStore.nextPage++;
      whaleAPILoad(stateStore.coinName, stateStore.nextPage);
    };

    const onLastPage = () => {
      if (state.isLast == false) {
        return;
      }
      state.loading = true;
      stateStore.nextPage--;
      whaleAPILoad(stateStore.coinName, stateStore.nextPage);
    };

    const goToFirstPage = () => {
      if (stateStore.nextPage == 1) {
        return;
      }
      state.loading = true;
      stateStore.nextPage = 1;
      whaleAPILoad(stateStore.coinName, stateStore.nextPage);
    };

    const goToLastPage = () => {
      if (stateStore.nextPage == state.totalPages) {
        return;
      }
      state.loading = true;
      stateStore.nextPage = state.totalPages;
      whaleAPILoad(stateStore.coinName, stateStore.nextPage);
    };

    whaleAPILoad(stateStore.coinName, 1);

    const getNewData = (coin) => {
      // state.loading = true;
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

<style scoped>
/* enter classes */
.coins-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.coins-enter-active {
  transition: all 0.3s ease;
}
/* Leave Classes */
.coins-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}
.coins-leave-active {
  transition: all 0.3s ease;
}
/* enter classes */
.pagination-enter-from {
  opacity: 0;
  transform: translateX(60px);
}
.pagination-enter-active {
  transition: all 0.3s ease;
}
/* Leave Classes */
.pagination-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
.pagination-leave-active {
  transition: all 0.3s ease;
}
.whales-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.whales-enter-active {
  transition: all 0.5s ease;
}
</style>