const base = '/temp';
let route = [
  {
    path: `${base}`,
    name: 'personalMessage',
    component: resolve => require([`@/components/personal-center${base}/personalMessage`], resolve)
  }
];
export default route;
