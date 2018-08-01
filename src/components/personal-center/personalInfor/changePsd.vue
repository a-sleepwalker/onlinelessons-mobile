<template>
  <div>
    <M-Header pageTitle="修改密码">
      <mt-button>完成</mt-button>
    </M-Header>
    <div classs="container">
      <!--<mt-field label="旧密码" placeholder="请输入旧密码" :type="isshowO?'password':'text'" v-model="oldPassword">-->
        <!--<i :class="isshowO?'iconH':'iconS'" @click="isshowO=!isshowO"></i>-->
      <!--</mt-field>-->
      <mt-field label="绑定的手机" :placeholder="telephoneNum" type="tel" ></mt-field>
      <mt-field  placeholder="请输入验证码" type="text" v-model="aaa">
        <mt-button type="primary" size="small">获取验证码</mt-button>
      </mt-field>
      <mt-field label="新密码" placeholder="请输入密码" :type="isshowN?'password':'text'" v-model="aaa">
        <!--<i :class="isshowN?'iconH':'iconS'" @click="isshowN=!isshowN"></i>-->
        <mt-button type="primary" size="small">确认修改</mt-button>
      </mt-field>
      <!--<mt-field label="确认密码" placeholder="请再次输入密码" :type="isshowR?'password':'text'" v-model="rePassword">-->
        <!--<i :class="isshowR?'iconH':'iconS'" @click="isshowR=!isshowR"></i>-->
      <!--</mt-field>-->
    </div>
    <!--固定到底部-->
    <div class="bottom">
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';
  export default {

    name: 'changePsd',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve)
    },
    data() {
      return {
        iconurl: '../../assets/psd2.jpg',
        isshowO: false,
        isshowN: false,
        isshowR: false
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      ...mapMutations(['SET_TELEPHONE_NUM'])
    },
    computed: {
      ...mapState({telephoneNum: state => state.telephoneStore.telephoneNum})
    }
  };
</script>

<style scoped>
  .bottom {
    position: absolute;
    bottom: 0;
  }

  .iconH {
    width: 1.0625rem;
    height: 0.6875rem;
    background-image: url('/static/mob-img/psd1.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
  }

  .iconS {
    width: 1.0625rem;
    height: 0.6875rem;
    background-image: url('/static/mob-img/psd2.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
  }
</style>
