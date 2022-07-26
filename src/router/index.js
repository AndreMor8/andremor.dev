import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/web-home.vue';
import web404 from '../views/web-404.vue';

const routes = [
  {
    path: '/',
    name: 'web-home',
    component: Home
  },
  {
    path: '/my-vm-standard',
    name: 'my-vm-standard',
    component: async function () {
      return await import('../views/my-vm-standard.vue');
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: web404
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;