import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store';
import VueRouter from 'vue-router';
import routes from './routers';

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition;
    } else {
        let position = {};
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0;
            position.y = 0;
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};

const router = new VueRouter({
    mode: 'history',
    'linkActiveClass': 'active',
    routes, // （缩写）相当于 routes: routes
    scrollBehavior
});

new Vue({
  el: '#app',
    router,
    store,
  render: h => h(App)
})
