import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/web-home.vue';
import myStandard from '../views/my-vm-standard.vue';

const routes = [
  {
    path: '/',
    name: 'web-home',
    component: Home
  },
  {
    path: '/my-vm-standard',
    name: 'my-vm-standard',
    component: myStandard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;