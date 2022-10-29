import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage';
import CalendarPage from '@/pages/CalendarPage';
import WorkoutsShowPage from '@/pages/WorkoutsShowPage';

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
    path: '/workout',
    component: WorkoutsShowPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
