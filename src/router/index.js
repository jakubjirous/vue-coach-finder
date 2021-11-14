import { createRouter, createWebHistory } from 'vue-router';
import UserAuth from '../pages/auth/UserAuth';
import CoachesDetail from '../pages/coaches/CoachesDetail';
import CoachesList from '../pages/coaches/CoachesList';
import CoachesRegistration from '../pages/coaches/CoachesRegistration';
import NotFound from '../pages/NotFound';
import ContactCoach from '../pages/requests/ContactCoach';
import RequestsReceive from '../pages/requests/RequestsReceive';
import { store } from '../store';

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
    component: CoachesDetail,
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
    name: 'CoachesRegistration',
    component: CoachesRegistration,
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
