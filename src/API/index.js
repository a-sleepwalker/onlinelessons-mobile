import axios from '../axios';
import qs from 'qs';
import {MessageBox} from 'mint-ui';

/**
 * @description 返回当月有课程的日期
 * @param time
 * @returns {Promise<AxiosResponse<any>>}
 */
export const selectTimeVideo = time => {
  let param = {};
  if (!time) {
    MessageBox('系统提示', '【time】参数不能为空');
  } else {
    param.time = time;
  }
  return axios.get('/Api/MobileGerenVideo.ashx?type=selectTimeVideoList&time=' + '2018/3/10').then(res => res);
};

/**
 * @description 根据课程ID取视频
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 * @constructor
 */
export const VideoLoad = id => {
  let param = {};
  if (!id) {
    MessageBox('系统提示', '【id】参数不能为空');
  } else {
    param.time = id;
  }
  return axios.get('/Api/MobileGerenVideo.ashx?type=selectVideoModel&id=' + id).then(res => res);
};
