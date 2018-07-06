const base = '/course';
let route = [
  {
    path: `${base}`,
    name: 'M_CourseList',
    component: resolve => require([`@/components/personal-center${base}/M_CourseList`], resolve)
  }, {
    path: `${base}/course-detail/:courseId`,
    name: 'M_CourseDetail',
    component: resolve => require([`@/components/personal-center${base}/M_CourseDetail`], resolve)
  }, {
    path: `${base}/course-plan/:courseId`,
    name: 'M_CoursePlan',
    component: resolve => require([`@/components/personal-center${base}/M_CoursePlan`], resolve)
  }, {
    path: `${base}/mycourse`,
    name: 'M_MyCourse',
    component: resolve => require([`@/components/personal-center${base}/M_MyCourse`], resolve)
  },
  {
    path: `${base}/video`,
    name: 'M_Video',
    component: resolve => require(['@/components/mvideo/M_video'], resolve)
  }
];
export default route;
