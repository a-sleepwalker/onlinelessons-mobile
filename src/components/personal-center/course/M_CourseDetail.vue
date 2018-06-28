<template>
  <div>
    <M-Header
      :styleObj="{background:'url(/static/mob-img/course-detail-head1.png) no-repeat','background-size':'100% 100%'}">
    </M-Header>
    <div class="main-container">
      <div class="content-header">
        <h1 class="content-title">{{title}}</h1>
        <h3 class="semester-text in-bl" @click="changeSemester">{{curSemester}}
          <i class="dropdown-icon in-bl mintui mintui-back"></i>
        </h3>
      </div>
      <mt-tab-container class="content" v-model="active">
        <mt-tab-container-item id="mk">
          <ul class="course-list">
            <li class="course-item" v-for="item in courseList" :key="item.id">
              <h2 class="course-title">{{item.title}}</h2>
              <p class="course-time">上课时间：{{item.st}}~{{item.et}}</p>
              <div class="course-statistics">
                <div class="course-process">
                  <p>
                    <i class="course-icon in-bl"></i>
                    <span class="statistics-title">课程进度</span>
                  </p>
                  <p class="statistics-text">{{item.courseDone}}/{{item.courseAll}}</p>
                </div>
                <div class="homework-process">
                  <p>
                    <i class="homework-icon in-bl"></i>
                    <span class="statistics-title">作业进度</span>
                  </p>
                  <p class="statistics-text">{{item.homeworkDone}}/{{item.homeworkAll}}</p>
                </div>
                <div class="exam-process">
                  <p>
                    <i class="exam-icon in-bl"></i>
                    <span class="statistics-title">模考进度</span>
                  </p>
                  <p class="statistics-text">{{item.examDone}}/{{item.examAll}}</p>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="zl">
        </mt-tab-container-item>
        <mt-tab-container-item id="tk">
        </mt-tab-container-item>
        <mt-tab-container-item id="jh">
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="breadcrumbs-container">
      <M-BreadCrumb></M-BreadCrumb>
    </div>
    <footer class="page-footer">
      <mt-tabbar v-model="active">
        <mt-tab-item id="mk">
          <i slot="icon" class="in-bl mk-icon"></i>
          模考
        </mt-tab-item>
        <mt-tab-item id="zl">
          <i slot="icon" class="in-bl zl-icon"></i>
          资料
        </mt-tab-item>
        <mt-tab-item id="tk">
          <i slot="icon" class="in-bl tk-icon"></i>
          题库
        </mt-tab-item>
        <mt-tab-item id="jh">
          <i slot="icon" class="in-bl jh-icon"></i>
          考试计划变更
        </mt-tab-item>
      </mt-tabbar>
    </footer>
    <mt-actionsheet
      :actions="semester"
      v-model="sheetVisible">
    </mt-actionsheet>
    <!--<M-Footer></M-Footer>-->
  </div>
</template>

<script>
  export default {
    name: 'M_CourseDetail',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve),
      'M-Footer': resolve => require(['@/components/common/Footer'], resolve),
      'M-CourseList': resolve => require(['@/components/personal-center/course/unit/CourseList'], resolve),
      'M-BreadCrumb': resolve => require(['@/components/common/BreadCrumb'], resolve)
    },
    data() {
      return {
        active: 'mk',
        title: '【江苏工商本科】不过退费班',
        curSemester: '',
        sheetVisible: false,
        semester: [
          {name: '第四学期', method: this.semesterHandler}
        ],
        courseList: [
          {
            id: '1',
            title: '公司理财',
            st: '2018.05.14',
            et: '2018.06.19',
            courseDone: 0,
            courseAll: 11,
            homeworkDone: 0,
            homeworkAll: 3,
            examDone: 0,
            examAll: 2
          }, {
            id: '2',
            title: '公司理财',
            st: '2018.05.14',
            et: '2018.06.19',
            courseDone: 0,
            courseAll: 11,
            homeworkDone: 0,
            homeworkAll: 3,
            examDone: 0,
            examAll: 2
          }, {
            id: '3',
            title: '公司理财',
            st: '2018.05.14',
            et: '2018.06.19',
            courseDone: 0,
            courseAll: 11,
            homeworkDone: 0,
            homeworkAll: 3,
            examDone: 0,
            examAll: 2
          }, {
            id: '4',
            title: '公司理财',
            st: '2018.05.14',
            et: '2018.06.19',
            courseDone: 0,
            courseAll: 11,
            homeworkDone: 0,
            homeworkAll: 3,
            examDone: 0,
            examAll: 2
          }
        ]
      };
    },
    created() {
      this.curSemester = this.semester[0].name;
    },
    mounted() {

    },
    methods: {
      changeSemester() {
        this.sheetVisible = !this.sheetVisible;
      },
      semesterHandler(data) {
        console.log(data);
        this.curSemester = data.name;
      }
    }
  };
</script>

<style scoped lang="stylus" type="text/stylus">
  .main-container
    min-height: 30rem
    .content-header
      padding: 0 .75rem
      height: 7.1875rem
      color: #ffffff
      background: url("/static/mob-img/course-detail-head2.png") no-repeat
      background-size: 100% 100%
      .content-title
        line-height: 3rem
        font-size: 1.125rem
      .semester-text
        line-height: 1.5rem
        font-size: 1rem
      .dropdown-icon
        margin-left: .2rem
        transform: rotateZ(-90deg)
    .content
      margin-top: -3rem
    .course-list
      .course-item
        margin: .75rem 1rem
        padding: 0 1rem
        height: 9rem
        background: #ffff
        border-radius: 15px
        box-shadow: 2px 2px 10px 2px #eee
      .course-title
        line-height: 3rem
        font-size: 1rem
        color: #333333
      .course-time
        font-size: .75rem
        color: #666666
      .course-statistics
        margin-top: .75rem
        display: flex
        justify-content space-around
      .statistics-title
        font-size: .75rem
        color: #666666
      .statistics-text
        line-height: 2rem
        font-size: .875rem
        text-align: center
        color: #666666
      .course-icon
      .homework-icon
      .exam-icon
        width: .75rem
        height: .75rem
        vertical-align: middle
      .course-icon
        background: url("/static/mob-img/kcjd.png") no-repeat
        background-size: 100% 100%
      .homework-icon
        background: url("/static/mob-img/zyjd.png") no-repeat
        background-size: 100% 100%
      .exam-icon
        background: url("/static/mob-img/mkjd.png") no-repeat
        background-size: 100% 100%

  .breadcrumbs-container
    padding-bottom: 55px

  .page-footer
    width: 100%
    position: fixed
    bottom: 0
    .mint-tabbar
      position: relative
    .mk-icon
      background: url("/static/mob-img/mk.png") no-repeat
      background-size: 100% 100%
    .zl-icon
      background: url("/static/mob-img/zl.png") no-repeat
      background-size: 100% 100%
    .tk-icon
      background: url("/static/mob-img/tk.png") no-repeat
      background-size: 100% 100%
    .jh-icon
      background: url("/static/mob-img/jh.png") no-repeat
      background-size: 100% 100%
</style>
