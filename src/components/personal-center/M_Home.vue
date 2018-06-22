<template>
  <div>
    <M-Header pageTitle="个人中心">
      <mt-button icon="more"></mt-button>
    </M-Header>
    <div class="main-container">
      <div class="user-info-container">
        <div class="user-basic-info clearfix">
          <div class="user-img in-bl">
            <img :src="user.img" alt="">
            <i class="user-auth in-bl"></i>
          </div>
          <div class="user-info-text in-bl">
            <p class="username">
              {{user.name}}
              <i class="user-gender-icon in-bl" :class="user.gender"></i>
              <span class="user-level in-bl">Lv.{{user.level}}</span>
            </p>
            <p class="user-signature">{{user.signature}}</p>
          </div>
          <div class="user-attend in-bl flr">
            <mt-button type="default" size="small">已签到</mt-button>
          </div>
        </div>
        <div class="user-attach-info clearfix">
          <div class="user-keep fll">
            <p class="number">{{user.keep}}</p>
            <p class="text">收藏</p>
          </div>
          <div class="user-following fll">
            <p class="number">{{user.following}}</p>
            <p class="text">关注</p>
          </div>
          <div class="user-follower fll">
            <p class="number">{{user.follower}}</p>
            <p class="text">粉丝</p>
          </div>
        </div>
      </div>
      <M-ToolsPanel panelTitle="我的学习" :panelToolList="studyToolList" @jumpTo="routeHandler">
        <p class="in-bl flr">
          出勤：<span class="number">{{study.attend}}</span>
          节课 学习：<span class="number">{{study.hours}}</span>
          小时 <span class="number"> {{study.minutes}}</span>分
        </p>
      </M-ToolsPanel>
      <M-ToolsPanel panelTitle="课程安排" :panelToolList="courseToolList" @jumpTo="routeHandler"></M-ToolsPanel>
    </div>
    <M-BreadCrumb></M-BreadCrumb>
    <M-Footer></M-Footer>
  </div>
</template>

<script>
  export default {
    name: 'M_Home',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve),
      'M-Footer': resolve => require(['@/components/common/Footer'], resolve),
      'M-BreadCrumb': resolve => require(['@/components/common/BreadCrumb'], resolve),
      'M-ToolsPanel': resolve => require(['./unit/ToolsPanel'], resolve)
    },
    data() {
      return {
        user: {
          gender: 'male',
          level: '9',
          name: '丁祥中',
          signature: '没有梦想的咸鱼',
          img: '/static/img/电脑桌面2.jpg',
          keep: 0,
          following: 2,
          follower: 1
        },
        study: {
          attend: 82,
          hours: 213,
          minutes: 33
        },
        studyToolList: [
          {id: '1', text: '我的班主任', className: 'teacher'},
          {id: '2', text: '课程', className: 'course'},
          {id: '3', text: '题库', className: 'bank'},
          {id: '4', text: '成绩单', className: 'score'},
          {id: '5', text: '最近观看', className: 'latest'},
          {id: '6', text: '我的下载', className: 'download'}
        ],
        courseToolList: [
          {id: '1', text: '我的课程表', className: 'curriculum'},
          {id: '2', text: '新科元', className: 'newcourse'}
        ]
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      routeHandler(url) {
        this.$router.push('/' + url);
      }
    }
  }
  ;
</script>

<style scoped lang="stylus" type="text/stylus">
  .main-container
    background: #f7f7f7

  .user-info-container
    margin-bottom: .625rem
    background: #fff

  .user-basic-info
    padding: 1rem

  .user-img
    position: relative

    img
      width: 3.125rem
      height: 3.125rem
      border-radius: 3rem

    .user-auth
      width: .9375rem
      height: .9375rem
      position: absolute
      right: 0
      bottom: .25rem
      background: transparent url("/static/img/user-auth.png") no-repeat
      background-size: 100% 100%

  .user-info-text
    margin-left: .5rem
    height: 3.125rem
    vertical-align: top

    .username
      height: 2rem
      line-height: 2rem
      font-size: .9375rem
      color: #333

      .user-gender-icon
        margin-left: 1rem
        width: 1rem
        height: 1rem
        line-height: 1rem
        vertical-align: middle
        background: url("/static/img/gender.png") no-repeat
        background-size 100% 100%

      .user-level
        width: 2.0625rem
        height: 1rem
        line-height: 1rem
        font-size: 0.6875rem
        color: #fff
        background: #f90
        text-align: center
        vertical-align: middle

  .user-signature
    font-size: .75rem
    color: #999

  .user-attach-info
    .user-keep, .user-following, .user-follower
      width: 33.3%
      height 4.0625rem
      text-align: center
      border-top: 1px solid #ccc

      .number
        padding-top: 1rem
        font-size: 1.125rem
        color: #333

      .text
        padding-top: .5rem
        font-size: .875rem
        color: #666
</style>
