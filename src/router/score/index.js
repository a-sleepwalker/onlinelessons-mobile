const base = '/score';
let route = [
  {
    path: `${base}`,
    name: 'M-tanscript',
    component: resolve => require([`@/components/personal-center${base}/M_tanscript`], resolve)
  }
];
export default route;
