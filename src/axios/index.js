const release = 'xk';
let axios;
switch (release) {
  case 'xk':
    axios = require('./xk_conf');
    break;
  case 'zhiliao':
    axios = require('./zhiliao_conf');
    break;
}
export default axios;
