<template>
  <div>{{ company }}</div>
</template>

<script>
export default {
  name: "CompanyDetails",
  setup() {
    const urlParams = new URLSearchParams(window.location.search);
    let company = urlParams.get("name");
    return { company };
  },
  created() {
    document.title = `${this.company.toUpperCase().replace(/-/g, " ")}`;
  },
};
</script>
