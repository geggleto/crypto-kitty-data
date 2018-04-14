import Vue from 'vue'
import VueRouter from 'vue-router'
import DnaDashboard from './components/DnaDashboard';
import DnaSearch from './components/DnaSearch';
import DnaSearchInfo from './components/DnaSearchInfo';
import Login from './components/LoginComponent';
import DnaDashboardInfo from './components/DnaDashboardInfo';

Vue.use(VueRouter);


const routes = [
    { path: '/dashboard', component: DnaDashboard },
    { path: '/v9/search', component: DnaSearch },
    { path: '/search-info', component: DnaSearchInfo },
    { path: '/', component: Login },
    { path: '/dashboard-info', component: DnaDashboardInfo}
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

export default router;