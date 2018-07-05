<template>
  <div>
    <M-Header pageTitle="我的课程"></M-Header>
    <div class="main-container">
      <ul class="course-list">
        <li class="course-item" v-for="item in courseList" :key="item.id">
          <div class="course-card">
            <div class="card-bg"></div>
            <div class="card-content clearfix">
              <h1 class="course-title">{{item.courseTile}}</h1>
              <router-link :to="`/course/course-detail/${item.id}`" class="to-course-plan flr">
                查看课程安排
                <i class="showmore-icon in-bl mintui mintui-back"></i>
              </router-link>
            </div>
          </div>
          <div class="course-content">
            <h2 class="content-title">关于本课程</h2>
            <p class="content-text">{{item.contentText}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {selectMajor} from '@/API';

  export default {
    name: 'M_MyCourse',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve)
    },
    data() {
      return {
        courseList: [
          {
            id: 'c1',
            courseTile: '【江苏工商本科】不过退费班',
            contentText: '您需要4个学期来完成本班型的全部学习内容，并\n' +
            '在学期末参加相应科目的考试并通过后才能获得\n' +
            '学分。您当前所在学期为：第4学期。在本学期\n' +
            '中，您将学习4个科目，出勤37节课程，需参加3\n' +
            '个科目的考试。\n' +
            '\n' +
            '若您对课程任何疑问，请咨询班主任。'
          },
          {
            id: 'c2',
            courseTile: '【江苏工商本科】不过退费班',
            contentText: '您需要4个学期来完成本班型的全部学习内容，并\n' +
            '在学期末参加相应科目的考试并通过后才能获得\n' +
            '学分。您当前所在学期为：第4学期。在本学期\n' +
            '中，您将学习4个科目，出勤37节课程，需参加3\n' +
            '个科目的考试。\n' +
            '\n' +
            '若您对课程任何疑问，请咨询班主任。'
          }
        ]
      };
    },
    created() {
      const _this = this;
      selectMajor().then(data => {
        if (data[0].result === 'success') {
          if (data[0].msg && data[0].msg.length > 0) {
            let resList = JSON.parse(data[0].msg);
            // console.log(resList);
          }
        }
      });
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
    max-height: calc(100vh - 40px)
    overflow: hidden
    .course-list
      height: calc(100vh - 40px)
      display: -webkit-box
      overflow-x: auto
      .course-item
        margin-right: 2rem
        width: 19.375rem
        height: 100%
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
