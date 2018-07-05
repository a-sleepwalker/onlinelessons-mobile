const base = '/course';
let route = [
  {
    path: `${base}`,
    name: 'M_CourseList',
    component: resolve => require([`@/components/personal-center${base}/M_CourseList`], resolve)
  }, {
    path: `${base}/course-detail`,
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
  }, {
    path: `${base}/tandc`,
    name: 'M_TopicAndCollection',
    component: resolve => require([`@/components/personal-center${base}/M_TopicAndCollection`], resolve)
  }
];
export default route;
