import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/geren/',
  routes: [
    {
      path: '/',
      name: 'M_Home',
      component: resolve => require(['@/components/personal-center/M_Home'], resolve)
    }, {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/components/personal-center/unit/CourseList'], resolve)
    }, {
      path: '/course',
      name: 'M_CourseList',
      component: resolve => require(['@/components/personal-center/M_CourseList'], resolve)
    }, {
      path: '/video/:videoId',
      name: 'M_Video',
      component: resolve => require(['@/components/mvideo/M_video'], resolve)
    }, {
      path: '/course-detail',
      name: 'M_CourseDetail',
      component: resolve => require(['@/components/personal-center/M_CourseDetail'], resolve)
    }, {
      path: '/course-plan',
      name: 'M_CoursePlan',
      component: resolve => require(['@/components/personal-center/M_CoursePlan'], resolve)
    }, {
      path: '/tanscript',
      name: 'M-tanscript',
      component: resolve => require(['@/components/personal-center/M_tanscript'], resolve)
    }
  ]
});
