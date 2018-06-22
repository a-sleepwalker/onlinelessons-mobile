/**
 * @description : 代理配置文件,官方配置地址：
 * https://github.com/chimurai/http-proxy-middleware#options
 * proxyPath为后端服务器地址
 * proxyTable的key为代理的路径
 * 其中值中的的
 *      {
 *       target:后端服务器地址
 *       changeOrigin:开启cross跨域访问
 *       pathRewrite：匹配地址
 *      }
 */
const proxyPath = 'http://localhost:49751/';
const proxyTable = {
  '/Api/**': {
    target: proxyPath,
    changeOrigin: true
  }
};

module.exports = proxyTable;
