<template>
  <div>
    <M-Header :pageTitle="title">
      <mt-button size="small">
        <img src="/static/mob-img/download-icon.png" width="20" height="20" alt="下载" slot="icon">
      </mt-button>
    </M-Header>
    <div class="main-container">
      <div class="statistics-container">
        <div class="attend">
          <div class="attend-content">
            <i class="attend-icon in-bl"></i>
            <div class="attend-text-panel in-bl">
              <p class="attend-pct">123%</p>
              <p class="attend-text">123</p>
            </div>
          </div>
        </div>
        <div class="homework">
          <div class="homework-content">
            <i class="homework-icon in-bl"></i>
            <div class="homework-text-panel in-bl">
              <p class="homework-pct">123%</p>
              <p class="homework-text">123</p>
            </div>
          </div>
        </div>
        <div class="exam">
          <div class="exam-content">
            <i class="exam-icon in-bl"></i>
            <div class="exam-text-panel in-bl">
              <p class="exam-pct">123%</p>
              <p class="exam-text">123</p>
            </div>
          </div>
        </div>
      </div>
      <M-CourseList :courseList="courseList" @item-click="clickHandler"></M-CourseList>
    </div>
    <M-BreadCrumb></M-BreadCrumb>
    <M-Footer></M-Footer>
  </div>
</template>

<script>
  export default {
    name: 'M_CoursePlan',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve),
      'M-Footer': resolve => require(['@/components/common/Footer'], resolve),
      'M-CourseList': resolve => require(['@/components/personal-center/course/unit/CourseList'], resolve),
      'M-BreadCrumb': resolve => require(['@/components/common/BreadCrumb'], resolve)
    },
    data() {
      return {
        title: '宏观经济分析',
        courseList: [
          {
            st: '2018.05.02',
            et: '19:00~21:30',
            attend: '未出勤',
            title: '【公司理财】江苏工商本<精讲1>',
            subTitle: '【江苏工商本科】不过退费班',
            src: '/static/mob-img/书架.jpg',
            name: '任思远'
          },
          {
            st: '2018.05.02',
            et: '19:00~21:30',
            attend: '未出勤',
            title: '【公司理财】江苏工商本<精讲1>',
            subTitle: '【江苏工商本科】不过退费班',
            src: '/static/mob-img/书架.jpg',
            name: '任思远'
          }, {
            st: '2018.05.02',
            et: '19:00~21:30',
            attend: '未出勤',
            title: '【公司理财】江苏工商本<精讲1>',
            subTitle: '【江苏工商本科】不过退费班',
            src: '/static/mob-img/书架.jpg',
            name: '任思远'
          }
        ]
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      clickHandler(item) {

      }
    }
  };
</script>

<style scoped lang="stylus" type="text/stylus">
  .main-container
    .statistics-container
      margin: .75rem 1rem
      display: flex
      justify-content: space-between
      .attend
      .homework
      .exam
        width: 6.5rem
        height: 4.375rem
        color: #ffffff
        display: flex
        justify-content: center
        align-items: center
        border-radius: .5rem
      .attend
        background: linear-gradient(to bottom right, rgb(124, 205, 250), rgb(107, 132, 251))
      .homework
        background: linear-gradient(to bottom right, rgb(120, 224, 255), rgb(34, 160, 245))
      .exam
        background: linear-gradient(to bottom right, rgb(248, 183, 141), rgb(250, 118, 105))
      .attend-content
      .homework-content
      .exam-content
        width: 5.16rem
        height: 1.875rem
      .attend-icon
      .homework-icon
      .exam-icon
        margin: auto
        width: 1.71rem
        height: 1.71rem
      .attend-icon
        background: url("/static/mob-img/attend-icon.png") no-repeat
        background-size: 100% 100%
      .homework-icon
        background: url("/static/mob-img/homework-icon.png") no-repeat
        background-size: 100% 100%
      .exam-icon
        background: url("/static/mob-img/exam-icon.png") no-repeat
        background-size: 100% 100%
      .attend-pct
      .homework-pct
      .exam-pct
        font-size: 1.0625rem
      .attend-text
      .homework-text
      .exam-text
        font-size: .625rem
</style>
