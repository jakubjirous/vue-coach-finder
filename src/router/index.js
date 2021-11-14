import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';
import { store } from '../store';

const UserAuth = defineAsyncComponent(() => import('../pages/auth/UserAuth'));
const CoachDetail = defineAsyncComponent(() => import('../pages/coaches/CoachDetail'));
const CoachesList = defineAsyncComponent(() => import('../pages/coaches/CoachesList'));
const CoachRegistration = defineAsyncComponent(() => import('../pages/coaches/CoachesList'));
const NotFound = defineAsyncComponent(() => import('../pages/NotFound'));
const ContactCoach = defineAsyncComponent(() => import('../pages/requests/ContactCoach'));
const RequestsReceive = defineAsyncComponent(() => import('../pages/requests/RequestsReceive'));

const routes = [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    name: 'CoachesList',
    component: CoachesList,
  },
  {
    path: '/coaches/:coachId',
    name: 'CoachDetail',
    props: true,
    component: CoachDetail,
    children: [
      {
        path: 'contact',
        name: 'CoachContact',
        component: ContactCoach,
      },
    ],
  },
  {
    path: '/register',
    name: 'CoachRegistration',
    component: CoachRegistration,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/requests',
    name: 'RequestsReceive',
    component: RequestsReceive,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/auth',
    name: 'UserAuth',
    component: UserAuth,
    meta: {
      requiresUnauth: true,
    },
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// global navigation guard
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({name: 'UserAuth'});
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next({name: 'CoachesList'});
  } else {
    next();
  }
});

export default router;
