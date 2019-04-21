<template>
  <div class="comment-form mb-5">
    <h5>Add a Comment</h5>
    <div class="form-group">
      <textarea class="form-control" v-model="body" maxlength="1000" rows="5" required></textarea>
      <button class="btn btn-primary mt-3" type="submit" @click="onSubmit">Comment</button>
    </div>
    <div v-if="errors.body">
      <form-error>{{ errors.body[0]}}</form-error>
    </div>
  </div>
</template>

<script>
import FormError from "./FormError";

export default {
  components: {
    FormError
  },
  props: ["errors"],
  data() {
    return {
      body: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.body) {
        this.$emit("submitComment", this.body);
        this.body = "";
      }
    }
  }
};
</script>

<style scoped>
.comment-form {
  margin-top: 1rem;
}
</style>

