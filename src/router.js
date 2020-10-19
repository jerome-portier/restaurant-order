import Vue from "vue";
import Router from "vue-router";
import Restaurant from './Restaurant2';

Vue.use(Router);

const router = new Router({
    routes: [
      { path: '/restaurant', component: Restaurant }
    ]
  });

export default router;