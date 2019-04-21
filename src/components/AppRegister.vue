<template>
  <div class="form">
    <h1>Register</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="First Name" v-model="user.first_name">
        <div v-if="errors">
          <form-error v-if="errors.first_name">{{ errors.first_name[0] }}</form-error>
        </div>
      </div>

      <div class="form-group">
        <input type="text" class="form-control" placeholder="Last Name" v-model="user.last_name">
        <div v-if="errors">
          <form-error v-if="errors.last_name">{{ errors.last_name[0] }}</form-error>
        </div>
      </div>

      <div class="form-group">
        <input type="email" class="form-control" placeholder="Email" v-model="user.email">
        <div v-if="errors">
          <form-error v-if="errors.email">{{ errors.email[0] }}</form-error>
        </div>
      </div>

      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password*"
          v-model="user.password"
          pattern="(?=.*\d).{8,}"
        >
        <small>*Minimum 8 characters, must containt at least 1 number</small>
        <div v-if="errors">
          <form-error v-if="errors.password">{{ errors.password[0] }}</form-error>
        </div>
      </div>

      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Confirm Password"
          v-model="user.password_confirmation"
        >
        <div v-if="errors">
          <form-error v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</form-error>
        </div>
      </div>

      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" v-model="user.terms" id="terms">
        <label for="terms" class="form-check-label">I accept terms and conditions</label>
        <div v-if="errors">
          <form-error v-if="errors.terms">{{ errors.terms[0] }}</form-error>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
    </form>
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
    ...mapActions(["register"]),
    onSubmit() {
      this.register(this.user);
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

