import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/web-home.vue';
import web404 from '../views/web-404.vue';

const routes = [
  {
    name: "web-home",
    path: "/",
    component: Home
  },
  {
    name: "my-vm-standard",
    path: "/my-vm-standard",
    component: async function () {
      return await import('../views/my-vm-standard.vue');
    }
  }
  ,
  {
    name: "web-404",
    path: "/:pathMatch(.*)*",
    component: web404
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;