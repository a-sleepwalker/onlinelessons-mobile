import {SET_TELEPHONE_NUM} from '../mutation-types';
export default {
  state: {
    telephoneNum: ''
  },
  mutations: {
   [SET_TELEPHONE_NUM](state, param) {
     state.telephoneNum = param.telephoneNum;
   }
  }
};
