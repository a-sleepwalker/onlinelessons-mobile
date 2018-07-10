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

// const xkPort = '49751';
const zhiliaoPort = '52443';
const proxyTable = {
  '/Api/**': {
    target: `http://localhost:${zhiliaoPort}`,
    changeOrigin: true
  },
  '/API/**': {
    target: `http://localhost:62295`,
    changeOrigin: true
  }
};

module.exports = proxyTable;
