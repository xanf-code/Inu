<template>
  <!-- GRAPH HERE -->
  <main
    v-if="!loading"
    class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3 tw-pt-2"
  >
    <div
      class="tw-flex tw-flex-col"
      v-for="result in results"
      :key="result._id"
    >
      <transition appear tag="div" name="insider">
        <IndividualInsiderCard :result="result" />
      </transition>
    </div>
  </main>
</template>

<script>
import companyAPI from "../store/companyAPI";
import IndividualInsiderCard from "../components/IndividualInsiderCard";

export default {
  components: { IndividualInsiderCard },
  name: "CompanyDetails",
  setup() {
    const { results, loading, companyAPILoad } = companyAPI();
    const urlParams = new URLSearchParams(window.location.search);
    let company = urlParams.get("name");
    companyAPILoad(company);
    return {
      company,
      results,
      loading,
      companyAPILoad,
    };
  },
  created() {
    document.title = `${this.company.toUpperCase().replace(/-/g, " ")}`;
  },
};
</script>

<style scoped>
.insider-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.insider-enter-active {
  transition: all 0.4s ease;
}
</style>