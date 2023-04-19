import Vue from 'vue';
import Vuex from 'vuex';
import workouts from './modules/workouts';
import exercises from './modules/exercises';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {exercises, workouts},
});
