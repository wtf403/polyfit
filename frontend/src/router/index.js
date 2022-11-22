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
    path: '/profile',
    component: ProfilePage,
  },
];


const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});



export default router;
