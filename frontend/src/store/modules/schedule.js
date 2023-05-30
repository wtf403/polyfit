import axios from 'axios';

export default {
  actions: {
    async fetchSchedule({ commit }) {
      const res = await fetch('https://polyfit.live/api/schedule/');
      let schedule = await res.json();
      commit('updateSchedule', schedule);
    },
    async addNote({ commit }, workout) {
      try {
        console.log(workout);
        let response = await axios.post(`https://polyfit.live/api/workouts/`, workout);
        commit('newWorkout', response.data);
      } catch (error) {
        alert(error);
      }
    },
    async deleteWorkouts({ commit }, workoutID) {
      try {
        await axios.delete(`https://polyfit.live/api/workouts/${workoutID}`, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        });
        commit('dltWorkout', workoutID);
      } catch (error) {
        alert(error);
      }
    },
  },
  mutations: {
    updateSchedule(state, schedule) {
      state.schedule = schedule;
    },
    selectWorkout(state, workout) {
      state.selected_workout = workout;
    },
    newWorkout: (state, workout) => state.workouts.push(workout),
    dltWorkout: (state, workoutID) => state.workouts.filter(function(item) {
      return item.id !== workoutID;
    }),
    ptchWorkout(state, workout, workoutID) {
      state.workouts[state.workouts.findIndex((obj) => obj.id === workoutID)] = workout;
    },
  },
  state: {
    schedule: [],
  },
  getters: {
    allSchedule(state) {
      return state.schedule;
    },
  },
};
