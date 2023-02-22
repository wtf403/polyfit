import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage';
import CalendarPage from '@/pages/CalendarPage';
import WorkoutsPage from '@/pages/WorkoutsPage';
import WorkoutsShowPage from '@/pages/WorkoutsShowPage';
import WorkoutPlayerPage from '@/pages/WorkoutPlayerPage';
import LoginPage from '@/pages/LoginPage';
import RegistrationPage from '@/pages/RegistrationPage';
import ProfilePage from '@/pages/ProfilePage';
import The404 from '@/pages/The404';
import AdminPage from '@/pages/AdminPage';
import VueScrollTo from 'vue-scrollto';


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
    path: '/workouts/:id',
    component: WorkoutsShowPage,
  },

  {
    path: '/player',
    component: WorkoutPlayerPage,
  },

  {
    path: '/log',
    component: LoginPage,
  },

  {
    path: '/reg',
    component: RegistrationPage,
  },

  {
    path: '/admin',
    component: AdminPage,
  },

  {
    path: '/profile',
    component: ProfilePage,
  },

  {
    path: '*',
    component: The404,
  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      VueScrollTo.scrollTo('#app', 500, { offset: savedPosition.y });
      return savedPosition;
    } else {
      VueScrollTo.scrollTo('#app');
    }
  },
  routes,
});


export default router;
