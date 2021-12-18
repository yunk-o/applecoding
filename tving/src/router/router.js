import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main'), 
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/register/Login'),
  },
];


export const router = createRouter({
  history: createWebHistory(),
  routes,
});