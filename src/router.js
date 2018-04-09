import Vue from 'vue'
import VueRouter from 'vue-router'
import DnaDashboard from './components/DnaDashboard';

Vue.use(VueRouter);


const routes = [
    { path: '/', component: DnaDashboard }
]

const router = new VueRouter({
    routes // short for `routes: routes`
});

export default router;