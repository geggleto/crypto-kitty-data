import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
    id: 'UA-70877302-4',
    router
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
