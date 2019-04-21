<template>
  <div class="text-center">
    <button class="btn btn-info btn-lg my-5" @click="load">Load More</button>
  </div>
</template>

<script>
export default {
  methods: {
    load() {
      this.$emit("loadMore");
    }
  }
};
</script>
