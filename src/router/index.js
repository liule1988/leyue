import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

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

export default new Router({
  mode: 'history',
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/find',
      meta: { keepAlive: true }
    },
    {
      path: '/find',
      name: 'find',
      component (resolve) {
        require.ensure(['../views/find/Find.vue'], () => {
          resolve(require('../views/find/Find.vue'));
        });
      },
      meta: { keepAlive: true }
    },
    {
      path: '/myMusic',  //  我的音乐
      name: 'myMusic',
      component (resolve) {
        require.ensure(['../views/myMusic/myMusic.vue'], () => {
          resolve(require('../views/myMusic/myMusic.vue'));
        });
      },
      meta: {keepAlive: true}
    },
    {
      path: '/friends',  //  朋友
      name: 'friends',
      component (resolve) {
        require.ensure(['../views/friends/friends.vue'], () => {
          resolve(require('../views/friends/friends.vue'));
        });
      },
      meta: {keepAlive: true}
    },
    {
      path: '/me',  //  账号
      name: 'me',
      component (resolve) {
        require.ensure(['../views/me/me.vue'], () => {
          resolve(require('../views/me/me.vue'));
        });
      },
      meta: {keepAlive: true}
    },


  ],
  scrollBehavior,

})
