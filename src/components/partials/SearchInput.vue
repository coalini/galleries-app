<template>
  <form class="form-inline text-center" @submit.prevent="onSearch">
    <input
      class="form-control"
      type="search"
      placeholder="Enter Keyword"
      aria-label="Search"
      v-model="term"
    >
    <button class="btn btn-primary" type="submit">Filter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      term: ""
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.term);
    }
  }
};
</script>

<style scoped>
.form-inline {
  margin: 20px 0;
  display: block !important;
}

.btn {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.form-control {
  border-right: none;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
</style>
