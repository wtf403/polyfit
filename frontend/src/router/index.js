import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage';
import CalendarPage from '@/pages/CalendarPage';
import WorkoutsPage from '@/pages/WorkoutsPage';
import WorkoutsShowPage from '@/pages/WorkoutsShowPage';
import WorkoutPlayerPage from '@/pages/WorkoutPlayerPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },

  {
    path: '/calendar',
    component: CalendarPage,
  },

  {
    path: '/workouts',
    component: WorkoutsPage,
  },

  {
    path: '/workouts/info',
    component: WorkoutsShowPage,
  },

  {
    path: '/player',
    component: WorkoutPlayerPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
