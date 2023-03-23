<template>
  <section class="login-page">
    <div class="login-container">
      <div class="login-title text-center">
        <span class="hide-xs">Squirrel</span>
        <img
          class="login-logo"
          src="~/assets/logo.svg"
          alt="Squirrel Banking Logo"
        />
        <span class="hide-xs">Banking</span>
      </div>
      <div class="login-content">
        <h2 class="text-center">Login</h2>
        <LoginForm />
        <p class="login-separator text-center">
          <span>OR</span>
        </p>
        <h2 class="text-center">Register</h2>
        <RegisterForm />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
});
</script>
