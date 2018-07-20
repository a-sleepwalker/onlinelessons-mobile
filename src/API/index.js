import axios from '../axios';
import qs from 'qs';
import {MessageBox} from 'mint-ui';

/**
 * @description 返回当月有课程的日期
 * @param time
 * @returns {Promise<AxiosResponse<any>>}
 * @author taowt
 */
export const selectTimeVideo = time => {
  let param = {};
  if (!time) {
    MessageBox('系统提示', '【time】参数不能为空');
  } else {
    param.time = time;
  }
  return axios.post('/Api/MobileGerenVideo.ashx?type=selectTimeVideo', qs.stringify(param)).then(res => res);
};

/**
 * @description 根据课程ID取视频
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 * @author taowt
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
/**
 * @description 页面载入完成获取准考证号
 * @param none
 * @returns {Promise<AxiosResponse<any>>}
 *  @author yuanzx<2018-7-5>
 */
export const getAdmissionTicket = () => axios.get('/Api/MobilePersonalCenter.ashx?type=selectAdmissionTicket').then(res => res);
/**
 * @description 根据准考证号获取对应成绩单
 * @param tanscript
 * @returns {Promise<AxiosResponse<any>>}
 *  @author yuanzx <2018-7-5>
 */
export const getScoreList = tanscript => {
  let param = {};
  if (!tanscript) {
    MessageBox('系统提示', '【tanscript】参数不能为空');
  } else {
    param.tanscript = tanscript;
  }
  return axios.get('/Api/MobilePersonalCenter.ashx?type=selectScore&ExamNo=' + tanscript).then(res => res);
};
/**
 * @description 页面载入完成获取订单名称
 * @param none
 * @returns {Promise<AxiosResponse<any>>}
 *  @author yuanzx <2018-7-6>
 */
export const getOrderForm = () => axios.get('/API/WrongQuestionHandler.ashx?type=getMajorbyStudent').then(res => res);
/**
 * @description 根据订单获取对应的课程及错题
 * @param none
 * @returns {Promise<AxiosResponse<any>>}
 *  @author yuanzx <2018-7-6>
 */
export const getMistakes = ordernum => {
  let param = {};
  if (!ordernum) {
    MessageBox('系统提示', '【ordernum】参数不能为空');
  } else {
    param.ordernum = ordernum;
  }
  return axios.get('/API/WrongQuestionHandler.ashx?type=getWrongQuestion&ordernum=' + ordernum).then(res => res);
};
// export const getMistakes = () => axios.get('/API/WrongQuestionHandler.ashx?type=getWrongQuestion' + orderList).then(res => res);
/**
 * @description 根据当前日期获取课程表
 * @author taowt <2018-7-5>
 * @param date
 * @returns {Promise<AxiosResponse<any>>}
 */
export const selectTimeVideoList = date => {
  let param = {};
  if (!date) {
    MessageBox('系统提示', `【date】参数不能为空`);
  } else {
    param.time = date;
  }
  return axios.post('/Api/MobileGerenVideo.ashx?type=selectTimeVideoList', qs.stringify(param)).then(res => res);
};
/**
 * @description 获取我的课程
 * @author taowt <2018-7-6>
 * @returns {Promise<AxiosResponse<any>>}
 */

export const selectMajor = () => {
  return axios.get('/Api/MobileGerenVideo.ashx?type=selectMajor').then(res => res);
};
/**
 * @description 获取订单下的课程班
 * @author taowt <2018-7-6>
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
export const selectKeChengList = id => {
  let param = {};
  if (!id) {
    MessageBox('系统提示', `【id】参数不能为空`);
  } else {
    param.id = id;
  }
  return axios.post('/Api/MobileGerenVideo.ashx?type=selectKeChengList', qs.stringify(param)).then(res => res);
};
/**
 * @description 根据课程班id获取下面的视频列表
 * @author taowt <2018-7-6>
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
export const selectVideoList = id => {
  let param = {};
  if (!id) {
    MessageBox('系统提示', `【id】参数不能为空`);
    // return Promise.reject(new Error('【id】参数不能为空'));
  } else {
    param.id = id;
  }
  return axios.post('/Api/MobileGerenVideo.ashx?type=selectVideoList', qs.stringify(param)).then(res => res);
};
/**
 * @description 获取视频实体
 * @author taowt <2018-7-6>
 * @param id
 * @param courseType
 * @returns {Promise<AxiosResponse<any>>}
 */
export const selectVideoModel = (id, courseType) => {
  let param = {};
  if (!id || !courseType) {
    MessageBox('系统提示', `【id】参数不能为空`);
    // return Promise.reject(new Error('【id】参数不能为空'));
  } else {
    param.id = id;
    param.CourseType = courseType;
  }
  return axios.post('/Api/MobileGerenVideo.ashx?type=selectVideoModel', qs.stringify(param)).then(res => res);
};
/**
 * @description 页面载入完成获取题库中的题目
 * @param none
 * @returns {Promise<AxiosResponse<any>>}
 *  @author yuanzx <2018-7-9>
 */
export const getQuestion = () => axios.get('/API/WrongQuestionHandler.ashx?type=wrongQuestionDetail').then(res => res);
/**
 * @description 页面载入完成获取错题及收藏数量
 * @param none
 * @returns {Promise<AxiosResponse<any>>}
 *  @author yuanzx <2018-7-9>
 */
export const getQuestionCount = () => axios.get('/API/WrongQuestionHandler.ashx?type=getwrongQuestionCount').then(res => res);
/**
 * @description 页面载入完成获取历史练习记录数量
 * @param none
 * @returns {Promise<AxiosResponse<any>>}
 *  @author yuanzx <2018-7-9>
 */
export const getHistoryCount = () => axios.get('/API/WrongQuestionHandler.ashx?type=getwrongQuestionHistoryCount').then(res => res);
/**
 * @description 页面载入完成获取练习最后一题
 * @param none
 * @returns {Promise<AxiosResponse<any>>}
 *  @author yuanzx <2018-7-9>
 */
export const getLastQuestion = () => axios.get('/API/WrongQuestionHandler.ashx?type=getLastQuestion').then(res => res);
/**
 * @description 页面载入完成获取刷题时间
 * @param none
 * @returns {Promise<AxiosResponse<any>>}
 *  @author yuanzx <2018-7-9>
 */
export const getBrushingCount = () => axios.get('/API/WrongQuestionHandler.ashx?type=getBrushingCount').then(res => res);
/**
 * @description 页面载入完成获取最近观看的记录
 * @param none
 * @returns {Promise<AxiosResponse<any>>}
 * @author yuanzx <2018-7-9>
 */
export const getRecentWatch = () => axios.get('/Api/MobileGerenVideo.ashx?type=selectLatelyVideoList').then(res => res);
/**
 * @description 下载课件列表
 * @param id 课程id
 * @param CourseType 0:录播，1:直播
 * @returns {Promise<AxiosResponse<any>>}
 * @author taowt <2018-7-20>
 */
export const selectFileList = (id, CourseType) => {
  let param = {};
  if (!id || !CourseType) {
    MessageBox('系统提示', `【id】参数不能为空,【CourseType】参数不能为空`);
  } else {
    param.id = id;
    param.CourseType = CourseType;
  }
  return axios.post('/Api/MobileGerenVideo.ashx?type=selectFileList', qs.stringify(param)).then(res => res);
};
/**
 * @description 下载文件
 * @param id 文件id
 * @returns {Promise<AxiosResponse<any>>}
 * @author taowt <2018-7-20>
 */
export const downloadFile = id => {
  let param = {};
  if (!id) {
    MessageBox('系统提示', `【id】参数不能为空`);
  } else {
    param.id = id;
  }
  return axios.post('/Api/MobileGerenVideo.ashx?type=downloadFile', qs.stringify(param)).then(res => res);
};
