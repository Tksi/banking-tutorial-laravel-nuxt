import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      account: {},
    },
    mutations: {
      setAccount(state, account) {
        state.account = account;
      },
    },
  });
};

export default createStore;
