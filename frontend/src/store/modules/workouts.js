import axios from 'axios';

export default {
  actions: {
    async fetchWorkouts({ commit }) {
      const res = await fetch('https://cors-anywhere.herokuapp.com/https://polyfit.live/api/workout');
      const workouts = await res.json();
      commit('updateWorkouts', workouts);
    },
    async addWorkouts({ commit }, workout) {
      try {
        const response = await axios.post('https://cors-anywhere.herokuapp.com/https://polyfit.live/api/workout', workout);
        commit('newWorkout', response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    updateWorkouts(state, workouts) {
      state.workouts = workouts;
    },
    newWorkout: (state, workout) => state.workouts.push(workout),
  },
  state: {
    workouts: [
    ],
  },
  getters: {
    allWorkouts(state) {
      return state.workouts;
    },
  },
};
