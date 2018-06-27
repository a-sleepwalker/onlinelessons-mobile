<template>
  <div>
    <M-Header pageTitle="我的课程"></M-Header>
    <div class="main-container">
      <div class="course-card">
        <div class="card-bg"></div>
        <div class="card-content clearfix">
          <h1 class="course-title">{{courseTile}}</h1>
          <router-link to="/course/course-plan" class="to-course-plan flr">
            查看课程安排
            <i class="showmore-icon in-bl mintui mintui-back"></i>
          </router-link>
        </div>
      </div>
      <div class="course-content">
        <h2 class="content-title">关于本课程</h2>
        <p class="content-text">{{contentText}}</p>
      </div>
    </div>
    <M-BreadCrumb></M-BreadCrumb>
  </div>
</template>

<script>
  export default {
    name: 'M_MyCourse',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve),
      'M-BreadCrumb': resolve => require(['@/components/common/BreadCrumb'], resolve)
    },
    data() {
      return {
        courseTile: '【江苏工商本科】不过退费班',
        contentText: '您需要4个学期来完成本班型的全部学习内容，并\n' +
        '在学期末参加相应科目的考试并通过后才能获得\n' +
        '学分。您当前所在学期为：第4学期。在本学期\n' +
        '中，您将学习4个科目，出勤37节课程，需参加3\n' +
        '个科目的考试。\n' +
        '\n' +
        '若您对课程任何疑问，请咨询班主任。'
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {}
  };
</script>

<style scoped lang="stylus" type="text/stylus">
  .main-container
    margin: 0 auto
    width: 19.375rem
    .course-card
      margin-top: 1rem
      width: 100%
      height: 10.47rem
      position: relative
      border-radius: .5rem
      background: linear-gradient(to bottom right, rgb(78, 218, 254), rgb(26, 144, 239))
      .card-bg
        width: 100%
        height: 100%
        position: absolute
        background: url("/static/mob-img/course-bg.png") no-repeat
        background-size: 100% 100%
        opacity: .3
      .card-content
        width: 100%
        height: 100%
      .course-title
        padding-left: 1.5rem
        line-height: 3.75rem
        font-size: 1.125rem
        color: #ffffff
      .to-course-plan
        margin: 4.5rem 1rem 0 0
        color: #ffffff
        font-size: .875rem
      .showmore-icon
        transform: rotateZ(180deg)
        background-size: 100% 100%
    .content-title
      margin-top: 1.5rem
      line-height: 3rem
      font-size: 1.0625rem
      color: #333
    .content-text
      line-height: 1.75rem
      font-size: .875rem
      color: #666
</style>
