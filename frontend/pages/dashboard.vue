<template>
  <section class="dashboard-page">
    <header class="dashboard-header">
      <img
        class="dashboard-logo"
        src="~/assets/logo.svg"
        alt="Squirrel Banking Logo"
      />
      <h1 class="dashboard-title hide-xs">Squirrel Banking</h1>
      <button id="logout" @click="logout">Logout</button>
    </header>
    <div class="balance">
      <span id="balance"> {{ $store.state.account.balance }}</span>
      <span id="currency">{{ $store.state.account.currency }}</span>
    </div>
    <div class="dashboard-content">
      <div class="transactions-title">
        <h2 id="description">{{ $store.state.account.description }}</h2>
        <br />
        <button id="addTransaction" @click="showAddTransaction = true">
          Add transaction
        </button>
      </div>
      <table class="transactions-table" aria-label="Transactions">
        <thead>
          <tr>
            <th>date</th>
            <th>object</th>
            <th>amount</th>
          </tr>
          <tr
            v-for="transaction in $store.state.account.transactions"
            :key="transaction.id"
          >
            <th>{{ transaction.date }}</th>
            <th>{{ transaction.object }}</th>
            <th>{{ transaction.amount }}</th>
          </tr>
        </thead>
        <tbody id="transactions"></tbody>
      </table>
    </div>
    <AddTransaction v-if="showAddTransaction" v-model="showAddTransaction" />
  </section>
</template>

<script lang="ts">
export default {
  components: {
    AddTransaction: () => import('~/components/AddTransaction.vue'),
  },
  data() {
    return {
      showAddTransaction: false,
    };
  },
  mounted() {
    if (!this.$store.state.account.user) {
      this.$router.push('/');
    }
  },
  methods: {
    logout() {
      this.$store.commit('setAccount', {});
      this.$router.push('/');
    },
  },
};
</script>
