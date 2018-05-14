import Vue from 'vue'
import VueRouter from 'vue-router'
import DnaDashboard from './components/DnaDashboard';
import DnaSearch from './components/DnaSearch';
import DnaSearchInfo from './components/DnaSearchInfo';
import Login from './components/LoginComponent';
import DnaDashboardInfo from './components/DnaDashboardInfo';
import CattributePrices from './components/CattributePrices';
import MewtationJewelSearch from './components/MewtationJewelSearch';
import KittyPrices from './components/KittyPrices';
import FancyPage from './components/FancyPage';
import DnaDashboardPro from './components/DnaDashboardPro';
import ThankYou from './components/ThankYou';

Vue.use(VueRouter);


const routes = [
    { path: '/dashboard', component: DnaDashboard },
    { path: '/search', component: DnaSearch },
    { path: '/search-info', component: DnaSearchInfo },
    { path: '/', component: Login },
    { path: '/dashboard-info', component: DnaDashboardInfo},
    { path: '/attributes', component: CattributePrices},
    { path: '/mewtation-search', component: MewtationJewelSearch},
    { path: '/eval', component: KittyPrices},
    { path: '/fancies', component: FancyPage},
    { path: '/dashboard-pro', component: DnaDashboardPro},
    { path: '/thank-you', component: ThankYou},
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

export default router;