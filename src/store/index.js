import Vue from 'vue';
import vuex from 'vuex';
import courseStore from './modules/course';

Vue.use(vuex);

export default new vuex.Store({
  state: {
    studentId: ''
  },
  modules: {
    courseStore
  }
});
