import axios from 'axios';

export default {
  actions: {
    async fetchWorkouts({ commit }) {
      const res = await fetch('https://polyfit.live/api/workouts');
      let workouts = await res.json();
      // const res = await axios.get('https://polyfit.live/api/workouts', {mode: 'no-cors'});
      // let workouts = res.data;
      commit('updateWorkouts', workouts);
    },
    async getWorkoutsByID({ commit }, id) {
      const res = await fetch('https://polyfit.live/api/workouts/' + id);
      let workout = await res.json();
      commit('selectWorkout', workout);
    },
    async addWorkouts({ commit }, workout) {
      try {
        let response = await fetch('https://polyfit.live/api/workouts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(workout),
        });
        commit('newWorkout', response.data);
      } catch (error) {
        alert(error);
      }
    },
    async deleteWorkouts({ commit }, workoutID) {
      try {
        await axios.delete(`https://polyfit.live/api/workouts/${workoutID}`);
        commit('dltWorkout', workoutID);
      } catch (error) {
        alert(error);
      }
    },
    async patchWorkouts({ commit }, workout, workoutID) {
      try {
        await axios.patch(`https://polyfit.live/api/workouts/${workout.id}`);
        commit('ptchWorkout', workout, workoutID);
      } catch (error) {
        alert(error);
      }
    },
  },
  mutations: {
    updateWorkouts(state, workouts) {
      state.workouts = workouts;
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
    workouts: [],
    selected_workout: {},
  },
  getters: {
    allWorkouts(state) {
      return state.workouts;
    },
    selectWorkout(state) {
      return state.selected_workout;
    },
  },
};
