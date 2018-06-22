import {MessageBox} from 'mint-ui';
import axios from 'axios';

// axios.defaults.timeout = 1000;
// axios.defaults.baseURL = 'http://127.0.0.1:3000/';

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
