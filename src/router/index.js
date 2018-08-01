import Vue from 'vue';
import Router from 'vue-router';
import bankRoutes from './bank';
import courseRoutes from './course';
import downloadRoutes from './download';
import latestRoutes from './latest';
import personalInforRoutes from './personalInfor';
import scoreRoutes from './score';
import teacherRoutes from './teacher';

let rootRoutes = [
  {
    path: '/',
    name: 'M_Home',
    component: resolve => require(['@/components/personal-center/M_Home'], resolve)
  },
  {
    path: '*', redirect: {name: 'M_Home'}

  }
];

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: '/geren',
  routes: [rootRoutes, bankRoutes, courseRoutes, downloadRoutes, latestRoutes, personalInforRoutes, scoreRoutes, teacherRoutes].reduce((prev, cur) => prev.concat(cur), [])
});
