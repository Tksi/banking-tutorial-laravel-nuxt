<template>
  <section id="transactionDialog" class="dialog">
    <div class="dialog-content">
      <h2 class="text-center">Add transaction</h2>
      <form id="transactionForm" @submit="confirmTransaction">
        <label for="date">Date</label>
        <input id="date" v-model="date" name="date" type="date" required />
        <label for="object">Object</label>
        <input
          id="object"
          v-model="object"
          name="object"
          type="text"
          maxLength="{50}"
          required
        />
        <label for="amount"> Amount (use negative value for debit) </label>
        <input
          id="amount"
          v-model="amount"
          name="amount"
          type="number"
          step="any"
          required
        />
        <div id="transactionError" class="error" role="alert"></div>
        <div class="dialog-buttons">
          <button
            type="button"
            class="button-alt"
            formNoValidate
            @click="localShowSddTransaction = false"
          >
            Cancel
          </button>
          <input id="confirmTransaction" type="submit" value="OK" />
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { sendTransaction } from '@/lib/accountUtils';

export default {
  props: {
    showSddTransaction: Boolean,
  },
  data() {
    return {
      date: '',
      object: '',
      amount: 0,
    };
  },
  computed: {
    localShowSddTransaction: {
      get() {
        return this.showSddTransaction;
      },
      set(showSddTransaction: boolean) {
        this.$emit('input', showSddTransaction);
      },
    },
  },
  methods: {
    confirmTransaction(e: Event) {
      e.preventDefault();
      const transaction = {
        date: this.date,
        object: this.object,
        amount: this.amount,
      };

      sendTransaction({
        account: this.$store.state.account,
        transaction,
      }).then((account) => {
        this.$store.commit('setAccount', account);
        console.log(this.$store.state.account);
        this.localShowSddTransaction = false;
      });
    },
  },
};
</script>
