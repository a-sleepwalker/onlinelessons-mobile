const base = '/personalInfor';
let route = [
  {
    path: `${base}`,
    name: 'M-userData',
    component: resolve => require([`@/components/personal-center${base}/M_userData`], resolve)
  },
  {
    path: `${base}/changePsd`,
    name: 'cahngePsd',
    component: resolve => require([`@/components/personal-center${base}/changePsd`], resolve)
  }
];
export default route;
