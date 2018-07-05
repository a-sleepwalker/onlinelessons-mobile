const base = '/bank';
let route = [
  {
    path: `${base}`,
    name: 'MistakeAndCollection',
    component: resolve => require([`@/components/personal-center${base}/MistakeAndCollection`], resolve)
  }
];
export default route;
