import Vue from 'vue';
import Router from 'vue-router';
import CampagneStart from './components/CampagneStart';
import vraag1 from './components/vraag1.vue';
import vraag2 from './components/vraag2.vue';
import vraag3 from './components/vraag3.vue';
import analyse from './components/analyse.vue';
import formulier from './components/formulier.vue';
import navbar from './components/navbar.vue';
import { campagneStartData } from './data';
import bedankt from './components/bedankt.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/airco/',
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
      path: '/vraag3',
      component: vraag3,
      props: {...campagneStartData},
    },
    {
      path: '/analyse',
      component: analyse,
      props: {...campagneStartData},
    },
    {
      path: '/formulier',
      component: formulier,
      props: {...campagneStartData},
    },
    {
      path: '/navbar',
      component: navbar,
      props: {...campagneStartData},
    },
    {
      path: '/bedankt',
      component: bedankt,
      props: {...campagneStartData},
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
});