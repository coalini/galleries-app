<template>
  <form class="mt-5" @submit.prevent="register">
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        name="firstName"
        placeholder="Enter First Name"
        required
      >
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        name="lastName"
        placeholder="Enter Last Name"
        required
      >
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        name="email"
        placeholder="Enter email"
        required
      >
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        name="password"
        placeholder="Enter Password"
        required
      >
    </div>
    <div class="form-group">
      <label for="confirmPassword">Confirm Password</label>
      <input
        type="password"
        class="form-control"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm Password"
        required
      >
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="termsAndConditions">
      <label class="form-check-label" for="termsAndConditions">I accept terms and conditions</label>
    </div>
    <button type="submit" class="btn btn-primary mt-3">Register</button>
  </form>
</template>

<script>
export default {
  name: "AppRegister",
  methods: {
    register() {}
  }
};
</script>

