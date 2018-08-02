
<template>
  <div>
    <M-Header pageTitle="个人信息"
              :styleObj="{background:'url(/static/mob-img/header7.jpg) no-repeat','background-size':'100% 100%'}"
    >
    </M-Header>
    <div class="page-field">
      <div class="tips">
        <p>
          亲爱的学员： 您可以再次修改个人信息，确认后我们将重新为你获取成绩单
        </p>
      </div>
      <div class="page-part">
        <img src="/static/mob-img/examsearchLogo.png"/>
        <mt-field label="报考地区" placeholder="请输入报考地区" type="text"></mt-field>
        <mt-field label="学员姓名" placeholder="请输入学员姓名" type="text"></mt-field>
        <mt-field label="准考证号" placeholder="请输入准考证号" type="text"></mt-field>
        <mt-field label="身份证号" placeholder="请输入身份证号" type="text"></mt-field>
        <mt-field label="查询密码" placeholder="请输入查询密码" type="password"></mt-field>

        <mt-button type="primary" size="large">提交</mt-button>
        <mt-button plain type="primary" size="large">删除此准考证</mt-button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {

    name: 'M-personalInfor',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve)
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
  .mint-cell-wrapper{
    margin-bottom:1.0625rem;
  }
  .mint-field .mint-cell-title{
    width:3.59375rem;
    margin-right: 0.78125rem
  }
  .mint-cell-text{
    font-size: 0.875rem;
    color: #999999;
    line-height: 2.03125rem;
  }
  .mint-field-core{
    line-height: 2.03125rem;
    border:1px solid #999;
    border-radius:0.3125rem;
    text-indent: 0.625rem;
    font-size: 0.875rem;
  }
  /*placeholder字体颜色*/
  ::-webkit-input-placeholder { /* WebKit browsers */
    color:#999;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:#999;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:#999;opacity:1;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color:#999 !important;
  }
  .mint-button--large{
    margin-bottom: 0.8125rem;
    height: 2.3125rem;
  }
  .mint-button-text{
    font-size: 1rem;
  }
</style>

<style scoped>
  .tips{
    height: 6.125rem;
    background-image: url("/static/mob-img/pesrsonmessage.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .tips p{
    position: absolute;
    margin-left: 0.9375rem;
    bottom: 0;
    color: #fff;
    font-size: 0.75rem;
    /*margin: 3.21875rem 0 0 0.9375rem;*/
    display: inline-block;
    width: 21.09375rem;
    letter-spacing: 0.03125rem;
    line-height: 1.09375rem;
  }
  .page-part{
    width: 17.4375rem;
    margin: 0 auto;
  }
  .page-part img{
    margin-top: 0.9375rem;
    margin-bottom: 1.0625rem;
    width:17.4375rem;
    height:3.96875rem;
  }

</style>
