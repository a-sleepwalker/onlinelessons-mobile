import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'M_Home',
      component: resolve => require(['@/components/personal-center/M_Home'], resolve)
    },
    {
      path: '/cal',
      name: 'Cal',
      component: resolve => require(['@/components/personal-center/M_Calendar'], resolve)
    },
    {
      path: '/course',
      name: 'M_CourseList',
      component: resolve => require(['@/components/personal-center/M_CourseList'], resolve)
    },
    {
      path: '/video/:videoId',
      name: 'M_Video',
      component: resolve => require(['@/components/mvideo/M_video'], resolve)
    },
    {
      path: '/M_CourseDetail',
      name: 'M_CourseDetail',
      component: resolve => require(['@/components/personal-center/M_CourseDetail'], resolve),
      children: [
        {
          path: 'mk',
          name: 'MK',
          component: resolve => require(['@/components/personal-center/MK'], resolve)
        }

      ]
    }
  ]
});
