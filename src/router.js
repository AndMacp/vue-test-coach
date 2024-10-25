import { createRouter, createWebHistory } from 'vue-router';
import AllCoaches from './pages/AllCoaches.vue';
import Requests from './pages/Requests.vue';
import RegisterAsCoach from './pages/RegisterAsCoach.vue';
import ContactCoach from './pages/ContactCoach.vue';
import LogInPage from './pages/LogInPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/allCoaches',
    },
    {
      path: '/authorize',
      component: LogInPage,
    },
    {
      path: '/allCoaches',
      component: AllCoaches,
    },
    {
      path: '/requests',
      component: Requests,
    },
    {
      path: '/register',
      component: RegisterAsCoach,
    },
    {
      path: '/contactCoach/:id',
      component: ContactCoach,
      props: true,
    },
  ],
});

export default router;
