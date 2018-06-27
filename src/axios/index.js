/* eslint-disable camelcase */
// const xk_conf = require('./xk_conf');
// const zhiliao_conf = require('./zhiliao_conf');
//
// const release = 'xk';
// let axios;
// switch (release) {
//   case 'xk':
//     axios = xk_conf;
//     break;
//   case 'zhiliao':
//     axios = zhiliao_conf;
//     break;
// }
// export default axios;

// axios.defaults.timeout = 1000;
import {MessageBox} from 'mint-ui';
import axios from 'axios';

// axios.defaults.baseURL = '/l/';

axios.interceptors.request.use(config => {
  return config;
}, error => {
  MessageBox('系统提示', '连接超时');
  return Promise.reject(error);
});

axios.interceptors.response.use(res => {
  let resData = {};
  if (res.data && res.data[0].result) {
    if (res.data[0].result === 'success') {
      resData.data = JSON.parse(res.data[0].msg);
      resData.status = 'success';
    } else {
      resData.message = res.data[0].msg;
      resData.status = 'failed';
    }
  } else {
    resData.message = '访问异常';
    resData.status = 'failed';
  }
  return resData;
}, error => {
  if (error.response.status >= 400) {
    MessageBox('系统提示', '访问异常');
  }
});

export default axios;
