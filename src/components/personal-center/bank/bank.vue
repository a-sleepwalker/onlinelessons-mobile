<template>
  <div>
    <div class="container">
      <div class="top"></div>
      <div class="last">
        <span class="txt">上次答题</span>
        <span class="courseName">国家货币制度的历史演变</span>
        <a href=""><span class="continue">继续上次练习></span></a>
      </div>
      <div class="examination">
        <div class="record">
          <span class="wrapper" style="overflow:hidden; vertical-align: center">
            <i class="imgIcon"></i>
            <span class="title">错题及收藏</span><br><span class="num">共227题</span>
          </span>
        </div>
        <div class="record">
          <div class="wrapper">
            <i class="imgIcon2"></i>
            <span class="title">做题记录</span><br><span class="num">共31条记录</span>
          </div>
        </div>
        <p class="subject"><span class="now">本学期科目</span><span class="total">全部科目 ></span></p>
        <ul>
          <li class="courses">【江苏工商本科】 不过退费班</li>
        </ul>
      </div>
      <div class="detail">
        <ul>
          <li class="content">
            <div class="contentBody">
              <p class="course">数据模型与决策</p>
              <span class="knowledge"><span class="number">131</span><span class="text"> 知识点</span></span>
              <span class="progress"><span class="number">160</span><span class="numberS">/944</span><span class="text">做题进度</span></span>
            </div>
          </li>
          <li class="content">
            <div class="contentBody">
              <p class="course">数据模型与决策</p>
              <span class="knowledge"><span class="number">131</span><span class="text"> 知识点</span></span>
              <span class="progress"><span class="number">160</span><span class="numberS">/944</span><span class="text">做题进度</span></span>
            </div>
          </li>
          <li class="content">
            <div class="contentBody">
              <p class="course">数据模型与决策</p>
              <span class="knowledge"><span class="number">131</span><span class="text"> 知识点</span></span>
              <span class="progress"><span class="number">160</span><span class="numberS">/944</span><span class="text">做题进度</span></span>
            </div>
          </li>
          <li class="content">
            <div class="contentBody">
              <p class="course">数据模型与决策</p>
              <span class="knowledge"><span class="number">131</span><span class="text"> 知识点</span></span>
              <span class="progress"><span class="number">160</span><span class="numberS">/944</span><span class="text">做题进度</span></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<style scoped>

  .container {
    margin: 0 0.9375rem;
  }

  .top {
    width: 100%;
    height: 13.90625rem;
    border: 1px solid red;
  }

  .last {
    width: 100%;
    height: 3.0625rem;
    background: #f6f7fb;
    margin-top: 0.625rem;
    margin-bottom: 0.9375rem;
    /*vertical-align: middle;*/
  }

  .last .txt {
    display: inline-block;
    width: 2.4375rem;
    margin: 0.625rem;
    color: #939498;
    font-size: 0.875rem;
    border-right: 1px solid #939498;
    vertical-align: middle;
  }

  .last .courseName {
    color: #939498;
    font-size: 0.75rem;
    vertical-align: middle
  }

  .last .continue {
    font-size: 0.75rem;
    vertical-align: middle;
    margin-left: 2.8125rem;
    color: #303133;
  }

  .record {
    width: 10.3125rem;
    height: 3.90625rem;
    background: #f9f9f9;
    position: relative;
    display: inline-block;
    margin-bottom: 0.625rem;
  }

  .wrapper {
    width: 90%;
    position: absolute;
    top: 0.9375rem;
    left: 0.625rem;
  }

  .record .title {
    font-size: 0.9375rem;
    float: left;
    margin-left: 0.625rem;

  }

  .record .num {
    font-size: 0.75rem;
    float: left;
    margin-left: 0.625rem;
    color: #919399;
    line-height: 0.9375rem;

  }

  .imgIcon {
    width: 2.3125rem;
    height: 2.3125rem;
    background-image: url('/static/mob-img/bank_03.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    position: relative;
    float: left;
    /*top:0;*/
  }

  .imgIcon2 {
    width: 2.3125rem;
    height: 2.3125rem;
    background-image: url('/static/mob-img/bank_05.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    position: relative;
    float: left;
    /*top:0;*/
  }

  .subject {
    margin: 0.625rem 0;
  }

  .subject .now {
    font-size: 1.125rem;
    vertical-align: middle;

  }

  .subject .total {
    font-size: 0.75rem;
    vertical-align: middle;
    color: #919399;
    float: right;
  }

  .courses {
    text-indent: 0.3125rem;
    font-size: 0.875rem;
  }

  .detail {
   padding: 1.25rem 0;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    height: 7.5rem;

  }
.detail ul{
  list-style: none;
  width: 1500px;
}
  .content {
    width: 9.375rem;
    height: 7.5rem;
    background: #e4f0fe;
    padding: 0.34375rem;
    display: inline-block;
  }

  .contentBody {
    width: 100%;
    height: 100%;
    border: 1px solid #dde3ef;;
  }

  .content .contentBody .course {
    font-size: 0.875rem;
    margin: 1.34375rem 0 1.5625rem 0.9375rem;
  }

  .content .contentBody .knowledge {
    display: inline-block;
    width: 2.65625rem;
    height: 2.375rem;
    margin-left: 1.09375rem;
  }
  .content .contentBody .knowledge .number{
    font-size: 1.125rem;
    color: #5ea5f3;
  }
  .content .contentBody .knowledge .text{
    font-size: 0.75rem;
    color: #97c7ef;
  }
  .content .contentBody .progress {
    display: inline-block;
    width: 3.75rem;
    height: 2.375rem;
    margin-left: 0.9375rem;
  }
  .content .contentBody .progress .number{
    font-size: 1.125rem;
    color: #5ea5f3;
  }
  .content .contentBody .progress .numberS{
    color: #999999;
    font-size: 0.875rem;
  }
  .content .contentBody .progress .text{
    font-size: 0.75rem;
    color: #97c7ef;
  }
</style>
<script>
  export default {

    name: 'bank',
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
</style>
