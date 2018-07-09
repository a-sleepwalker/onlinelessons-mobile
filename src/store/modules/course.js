import {SET_COURSE_PROCESS} from '../mutation-types';

export default {
  state: {
    courseDone: '',
    courseAll: '',
    homeworkDone: '',
    homeworkAll: '',
    examDone: '',
    examAll: ''
  },
  getters: {
    coursePct: state => state.courseDone ? Math.round(state.courseDone * 100 / state.courseAll) : 0,
    homeworkPct: state => state.homeworkDone ? Math.round(state.homeworkDone * 100 / state.homeworkAll) : 0,
    examPct: state => state.examDone ? Math.round(state.examDone * 100 / state.examAll) : 0
  },
  mutations: {
    [SET_COURSE_PROCESS](state, param) {
      state.courseDone = param.courseDone;
      state.courseAll = param.courseAll;
      state.homeworkDone = param.homeworkDone;
      state.homeworkAll = param.homeworkAll;
      state.examDone = param.examDone;
      state.examAll = param.examAll;
    }
  }
}
;
