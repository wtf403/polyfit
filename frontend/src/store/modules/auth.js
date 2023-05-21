import axios from 'axios';

export default {
  actions: {
    async loginFetch({ dispatch }, obj) {
      try {
        const response = await axios.post('https://polyfit.live/api/auth/login/', obj);
        let accessToken = response.data.access;
        localStorage.token = accessToken;
        dispatch('meFetch', accessToken);
      } catch (error) {
        console.error(error);
      }
    },
    async meFetch({ commit }, token) {
      try {
        const api = 'https://polyfit.live/api/auth/me/';
        const response = await axios.get(api, {
          headers: { Authorization: `Bearer ${token}` },
        });
        commit('updateUser', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async registrarionUser({ commit }, obj) {
      try {
        const response = await axios.post('https://polyfit.live/api/auth/', obj);
        commit('newUser', response.data);
      } catch (error) {
        alert(error);
      }
    },
  },
  mutations: {
    updateUser(state, userData) {
      state.user = userData;
    },
    newUser: (state, user) => state.user = user,
  },
  state: {
    user: null,
  },
  getters: {
    myUser(state) {
      return state.user;
    },
  },
};
