const base = '/teacher';
let route = [
  {
    path: `${base}`,
    name: 'M-teacher',
    component: resolve => require([`@/components/personal-center${base}/M_teacher`], resolve)
  }
];
export default route;
