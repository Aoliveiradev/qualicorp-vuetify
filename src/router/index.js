// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/SignIn.vue'),
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
      },
      {
        path: 'timein',
        name: 'timein',
        component: () => import('@/views/TimeIn.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('userToken');
  if (to.name === 'timein' && !isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router
