const base = '/bank';
let route = [
  {
    path: `${base}`,
    name: 'MistakeAndCollection',
    component: resolve => require([`@/components/personal-center${base}/MistakeAndCollection`], resolve)
  }, {
    path: `${base}/examination`,
    name: 'examination',
    component: resolve => require([`@/components/personal-center${base}/examination`], resolve)
  }, {
    path: `${base}/bank`,
    name: 'bank',
    component: resolve => require([`@/components/personal-center${base}/bank`], resolve)
  }
];
export default route;
