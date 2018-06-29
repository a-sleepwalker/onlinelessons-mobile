const base = '/latest';
let route = [
  {
    path: `${base}`,
    name: 'M-recentWatch',
    component: resolve => require([`@/components/personal-center${base}/M_recentWatch`], resolve)
  }
];
export default route;
