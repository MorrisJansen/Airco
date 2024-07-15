import Vue from 'vue';
import Router from 'vue-router';
import CampagneStart from './components/CampagneStart';
import vraag1 from './components/vraag1.vue';
import vraag2 from './components/vraag2.vue';
import navbar from './components/navbar.vue';
import { campagneStartData } from './data';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/Airco/',
  routes: [
    {
      path: '/',
      component: CampagneStart,
      props: { ...campagneStartData },
    },
    {
      path: '/vraag1',
      component: vraag1,
      props: {...campagneStartData},
    },
    {
      path: '/vraag2',
      component: vraag2,
      props: {...campagneStartData},
    },
    {
      path: '/navbar',
      component: navbar,
      props: {...campagneStartData},
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
});