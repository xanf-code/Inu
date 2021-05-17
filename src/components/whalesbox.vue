<template>
  <div class="tw-mx-5 tw-my-5">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in results.result" :key="d._id">
          <td class="tw-text-white">{{ d.rank }}</td>
          <td class="tw-text-white">{{ d.quantityInitial }}</td>
          <td class="tw-text-white">{{ d.quantityCurrent }}</td>
          <td class="tw-text-white">{{ d.quantityChanges }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["results"],
};
</script>