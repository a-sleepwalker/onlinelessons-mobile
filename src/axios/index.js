import {MessageBox} from 'mint-ui';
import axios from 'axios';

// axios.defaults.timeout = 3000;
if (process.env.NODE_ENV === 'production') {
  // axios.defaults.baseURL = '/';
}
axios.interceptors.request.use(config => {
  const method = config.method;
  switch (method) {
    case 'get':
      config.headers['Content-Type'] = 'application/json;charset=utf-8';
      break;
    case 'post':
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      break;
  }
  return config;
}, error => {
  MessageBox('系统提示', '连接超时');
  return Promise.reject(error);
});

axios.interceptors.response.use(res => {
  return res.data;
}, error => {
  if (error.response.status >= 400) {
    MessageBox('系统提示', '访问异常');
  }
});

export default axios;
