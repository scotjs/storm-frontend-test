import Vue from 'vue';
import VueRouter from 'vue-router'; 

import List from '../components/list';
import Create from '../components/create';
import Confirmation from '../components/confirmation';

Vue.use(VueRouter)
const routes = [
  { path: '/', component: List },
  { path: '/task/create', component: Create },
  { path: '/task/confirmation', component: Confirmation }
]

var router = new VueRouter({
  routes
})

export default router;