import Vue from 'vue';
import Vuex from 'vuex';
import workouts from './modules/workouts';
import exercises from './modules/exercises';
import auth from './modules/auth';
import schedule from './modules/schedule';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {auth, workouts, exercises, schedule},
});
