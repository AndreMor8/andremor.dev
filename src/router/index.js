import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import myStandard from '../views/my-vm-standard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
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