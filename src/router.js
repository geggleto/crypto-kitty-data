import Vue from 'vue'
import VueRouter from 'vue-router'
import DnaDashboard from './components/DnaDashboard';
import DnaSearch from './components/DnaSearch';

Vue.use(VueRouter);


const routes = [
    { path: '/', component: DnaDashboard },
    { path: '/search', component: DnaSearch }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

export default router;