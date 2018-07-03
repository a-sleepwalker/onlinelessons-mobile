import {MessageBox} from 'mint-ui';
import axios from 'axios';

// axios.defaults.timeout = 3000;
// axios.defaults.baseURL = '/';

axios.interceptors.request.use(config => {
  return config;
}, error => {
  MessageBox('系统提示', '连接超时');
  return Promise.reject(error);
});

axios.interceptors.response.use(res => {
  let resData = {};
  let serverResponse = res.data;
  let responseData = serverResponse[0];
  if (responseData.result === 'success') {
    resData.status = 'success';
    resData.data = responseData.msg;
    resData.message = '';
  } else {
    resData.status = 'failed';
    resData.message = responseData.msg;
  }
  return resData;
}, error => {
  if (error.response.status >= 400) {
    MessageBox('系统提示', '访问异常');
  }
});

export default axios;
