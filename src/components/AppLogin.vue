<template>
  <div class="form">
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Email" v-model="user.email" required>
      </div>

      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="user.password"
          required
        >
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>

    <form-error v-if="errors">{{ errors }}</form-error>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FormError from "@/components/partials/FormError";

export default {
  components: {
    FormError
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit() {
      this.login(this.user);
    }
  },
  computed: {
    ...mapGetters({
      errors: "getErrors"
    })
  }
};
</script>

<style scoped>
.form {
  max-width: 600px;
}
</style>
