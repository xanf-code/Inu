<template>
  <div class="tw-flex tw-felx-row tw-ml-4 tw-mr-4">
    <button class="btn btn-light tw-pr-1" @click="goToFirstPage">first</button>
    <button class="btn btn-light tw-pr-1" @click="onLastPage">prev</button>
    <p>page {{ nextPageNumber }} of {{ lastPageNumber }}</p>
    <p>
      <button class="btn btn-light tw-pl-1" @click="onNextPage">next</button>
      <button class="btn btn-light tw-pl-1" @click="goToLastPage">last</button>
    </p>
  </div>
</template>

<script>
export default {
  props: [
    "goToFirstPage",
    "onLastPage",
    "onNextPage",
    "goToLastPage",
    "nextPageNumber",
    "lastPageNumber",
  ],
};
</script>
