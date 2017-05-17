import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

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
      children: [

        {
          path: '/',  //  发现
          redirect: '/find/recommend'
        },
        {
        path: 'recommend',  //  发现
        name: 'recommend',
        component (resolve) {
          require.ensure(['../views/find/recommend.vue'], () => {
            resolve(require('../views/find/recommend.vue'));
          });
        },
        meta: { keepAlive: true }
      },
        {
          path: 'musicList',  //  发现
          name: 'musicList',
          component (resolve) {
            require.ensure(['../views/find/musicList.vue'], () => {
              resolve(require('../views/find/musicList.vue'));
            });
          },
        },{
          path: 'ranks',  //  发现
          name: 'ranks',
          component (resolve) {
            require.ensure(['../views/find/ranks.vue'], () => {
              resolve(require('../views/find/ranks.vue'));
            });
          },
        }
      ],
      meta: { keepAlive: true }
    },
    {
      path: '/myMusic',  //  搜索页
      name: 'myMusic',
      component (resolve) {
        require.ensure(['../views/myMusic/myMusic.vue'], () => {
          resolve(require('../views/myMusic/myMusic.vue'));
        });
      },
      meta: {keepAlive: true}
    },
    {
      path: '/friends',  //  搜索页
      name: 'friends',
      component (resolve) {
        require.ensure(['../views/friends/friends.vue'], () => {
          resolve(require('../views/friends/friends.vue'));
        });
      },
      meta: {keepAlive: true}
    },
    {
      path: '/me',  //  搜索页
      name: 'me',
      component (resolve) {
        require.ensure(['../views/me/me.vue'], () => {
          resolve(require('../views/me/me.vue'));
        });
      },
      meta: {keepAlive: true}
    },


  ], // （缩写）相当于 routes: routes
  scrollBehavior,

})
