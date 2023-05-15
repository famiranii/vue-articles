import { createStore } from 'vuex';

export const store = createStore({
  state: {
    username: null,
  },
  actions: {
    updateUsername({ commit }, username) {
      localStorage.setItem('username',username)
      commit('SET_USERNAME', username);
    },
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username;
    },
  },
});
