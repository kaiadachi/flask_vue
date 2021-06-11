import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Howto from '@/views/Howto';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/howto',
            name: 'Howto',
            component: Howto
        }
    ]
});
