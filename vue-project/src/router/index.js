import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewHome from './../views/view_home';
import ViewProducts from './../views/view_products';
import ViewShows from './../views/view_shows';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: ViewHome,
  },
  {
    path: '/products',
    name: 'products',
    component: ViewProducts,
  },
  {
    path: '/shows',
    name: 'shows',
    component: ViewShows,
  },
  {
    path: '*',
    redirect: '/',
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router;