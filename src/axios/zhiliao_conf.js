// axios.defaults.timeout = 1000;
import {MessageBox} from 'mint-ui';
import axios from 'axios';

axios.defaults.baseURL = '/l/';

axios.interceptors.request.use(config => {
  return config;
}, error => {
  MessageBox('系统提示', '连接超时');
  return Promise.reject(error);
});

axios.interceptors.response.use(res => {
  let resData = {};

  return resData;
}, error => {
  if (error.response.status >= 400) {
    MessageBox('系统提示', '访问异常');
  }
});

export default axios;
