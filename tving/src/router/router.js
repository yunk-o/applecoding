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
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/register/SignUp'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/register/PostDetail'),
  },
];


export const router = createRouter({
  history: createWebHistory(),
  routes,
});