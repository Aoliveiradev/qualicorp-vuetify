// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "home" */ '@/views/SignIn.vue'),
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue'),
      },
      {
        path: 'timein',
        name: 'TimeIn',
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
  const isAuthenticated = localStorage.getItem('qualicorpToken');
  if (to.name === 'TimeIn' && !isAuthenticated) {
    next({ name: 'SignIn' });
  } else {
    next();
  }
});


export default router
