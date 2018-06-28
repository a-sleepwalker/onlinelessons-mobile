<template>
  <div>
    <M-Header pageTitle="修改密码">
      <mt-button>完成</mt-button>
    </M-Header>
    <div classs="container">
      <mt-field label="旧密码" placeholder="请输入旧密码" type="password" v-model="oldPassword">
        <img src="/static/mob-img/psd1.jpg" >
      </mt-field>
      <mt-field label="新密码" placeholder="请输入密码"  v-model="newPassword">
        <img src="/static/mob-img/psd2.jpg" >
      </mt-field>
      <mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="rePassword">
        <img src="/static/mob-img/psd1.jpg" >
      </mt-field>
    </div>
    <!--固定到底部-->
    <div class="bottom">
      <M-BreadCrumb></M-BreadCrumb>
      <M-Footer></M-Footer>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'changePsd',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve),
      'M-Footer': resolve => require(['@/components/common/Footer'], resolve),
      'M-BreadCrumb': resolve => require(['@/components/common/BreadCrumb'], resolve)
    },
    data() {
      return {};
    },
    created() {

    },
    mounted() {

    },
    methods: {}
  };
</script>
<style>
  /*.breadcrumbs{*/
    /*width: 100%;*/
    /*position: fixed;*/
    /*bottom:6rem;*/
  /*}*/
  /*.page-footer {*/
    /*width: 100%;*/
    /*position: fixed;*/
    /*bottom:0rem;*/
  /*}*/
  .bottom{
    position: absolute;
    bottom: 0;
  }
</style>

<style scoped>

</style>
