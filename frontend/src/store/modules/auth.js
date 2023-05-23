import axios from 'axios';

export default {
  actions: {
    async regFetch({ commit }, obj) {
      try {
        await axios.post('https://polyfit.live/api/auth/register/', obj);
        commit('newUser', obj);
        // obj = {email: obj.email, password: obj.password};
        // console.log(0, obj);
        // dispatch('loginFetch', obj);
      } catch (error) {
        console.log(error);
      }
    },
    async loginFetch({ dispatch, commit }, obj) {
      try {
        const response = await axios.post('https://polyfit.live/api/auth/login/', obj);
        let accessToken = response.data.access;
        localStorage.token = accessToken;
        dispatch('meFetch', accessToken);
        commit('setAuthError', null);
      } catch (error) {
        commit('setAuthError', error.response.data.error);
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
  },
  mutations: {
    updateUser: (state, userData) => state.user = userData,
    newUser: (state, user) => state.user = user,
    setAuthError: (state, error) => state.authError = error,
  },
  state: {
    user: null,
    authError: null,
  },
  getters: {
    myUser(state) {
      return state.user;
    },
  },
};
