<template>
  <form id="registerForm" @submit="userRegister">
    <label for="user">Username (required)</label>
    <input
      id="user"
      v-model="user"
      name="user"
      type="text"
      maxLength="{20}"
      required
    />
    <label for="currency">Currency (required)</label>
    <input
      id="currency"
      v-model="currency"
      name="currency"
      type="text"
      maxLength="{5}"
      required
    />
    <label for="description">Description</label>
    <input
      id="description"
      v-model="description"
      name="description"
      type="text"
      maxLength="{100}"
      required
    />
    <label for="balance">Current balance</label>
    <input id="balance" v-model="balance" name="balance" type="number" />
    <div id="registerError" class="error" role="alert">{{ registerError }}</div>
    <input type="submit" value="Register" />
  </form>
</template>

<script lang="ts">
import { createAccount } from '@/lib/accountUtils';

export default {
  data() {
    return {
      registerError: '',
      user: '',
      currency: '$',
      description: '',
      balance: 0,
    };
  },
  methods: {
    userRegister(e: Event) {
      e.preventDefault();
      createAccount({
        user: this.user,
        currency: this.currency,
        description: this.description,
        balance: this.balance,
      })
        .then((account) => {
          this.$store.commit('setAccount', account);

          this.$router.push('/dashboard');
        })
        .catch((err) => {
          this.registerError = err.message;
        });
    },
  },
};
</script>
