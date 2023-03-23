<template>
  <form id="loginForm" @submit="userLogin">
    <label htmlFor="username">Username</label>
    <input
      id="username"
      v-model="userName"
      name="user"
      type="text"
      maxLength="{20}"
      required
    />
    <div id="loginError" class="error" role="alert">{{ loginError }}</div>
    <input type="submit" value="Login" readOnly />
  </form>
</template>

<script lang="ts">
import { getAccount } from '@/lib/accountUtils';

export default {
  data() {
    return {
      userName: '',
      loginError: '',
    };
  },
  methods: {
    userLogin(e: Event) {
      e.preventDefault();
      getAccount({ userName: this.userName })
        .then((account) => {
          this.$store.commit('setAccount', account);
          this.$router.push('/dashboard');
        })
        .catch((err) => {
          this.loginError = err.message;
        });
    },
  },
};
</script>
