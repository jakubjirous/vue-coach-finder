import { createRouter, createWebHistory } from 'vue-router';
import UserAuth from '../pages/auth/UserAuth';
import CoachesDetail from '../pages/coaches/CoachesDetail';
import CoachesList from '../pages/coaches/CoachesList';
import CoachesRegistration from '../pages/coaches/CoachesRegistration';
import NotFound from '../pages/NotFound';
import ContactCoach from '../pages/requests/ContactCoach';
import RequestsReceive from '../pages/requests/RequestsReceive';

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
  },
  {
    path: '/requests',
    name: 'RequestsReceive',
    component: RequestsReceive,
  },
  {
    path: '/auth',
    name: 'UserAuth',
    component: UserAuth,
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

export default router;
