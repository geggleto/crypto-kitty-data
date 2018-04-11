import Vue from 'vue'
import VueRouter from 'vue-router'
import DnaDashboard from './components/DnaDashboard';
import DnaSearch from './components/DnaSearch';
import KittyClockDashboard from './components/KittyClockDashboard';

Vue.use(VueRouter);


const routes = [
    { path: '/', component: DnaDashboard },
    { path: '/kitty-clock', component: KittyClockDashboard },
    { path: '/search', component: DnaSearch }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

export default router;