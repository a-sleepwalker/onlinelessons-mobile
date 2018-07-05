'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
const os = require('os');
const LOCAL_IP = (function () {
  let interFace = os.networkInterfaces();
  for (let dev in interFace) {
    if (interFace.hasOwnProperty(dev)) {
      if (interFace[dev][1].address.indexOf('192.168') > -1) {
        return interFace[dev][1].address;
      }
    }
  }
  return 'localhost';
})();

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  LOCAL_IP
});
