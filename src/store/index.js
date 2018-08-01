import Vue from 'vue';
import vuex from 'vuex';
import courseStore from './modules/course';
import telephoneStore from './modules/telephone';

Vue.use(vuex);

export default new vuex.Store({
  state: {
    studentId: ''
  },
  modules: {
    courseStore, telephoneStore
  }
});
