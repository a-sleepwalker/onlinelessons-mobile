<template>
  <div>
    <M-Header pageTitle="课程班"
              :styleObj="{background:'url(/static/mob-img/header2.png) no-repeat','background-size':'100% 100%'}">
      <mt-button size="small" @click="toMyCourse">我的课程</mt-button>
    </M-Header>
    <div class="main-container">
      <M-Calendar></M-Calendar>
      <M-CourseList :courseList="courseList" @item-click="clickHandler"></M-CourseList>
    </div>
    <M-BreadCrumb></M-BreadCrumb>
    <M-Footer></M-Footer>
  </div>
</template>

<script>
  import {selectTimeVideo} from '@/API';

  export default {
    name: 'M_CourseList',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve),
      'M-Footer': resolve => require(['@/components/common/Footer'], resolve),
      'M-Calendar': resolve => require(['@/components/personal-center/course/unit/Calendar'], resolve),
      'M-CourseList': resolve => require(['@/components/personal-center/course/unit/CourseList'], resolve),
      'M-BreadCrumb': resolve => require(['@/components/common/BreadCrumb'], resolve)
    },
    data() {
      return {
        courseList: [
          {
            id: '1',
            st: '2018.05.02',
            et: '19:00~21:30',
            attend: '未出勤',
            title: '【公司理财】江苏工商本<精讲1>',
            subTitle: '【江苏工商本科】不过退费班',
            src: '/static/mob-img/书架.jpg',
            name: '任思远'
          },
          {
            id: '2',
            st: '2018.05.02',
            et: '19:00~21:30',
            attend: '未出勤',
            title: '【公司理财】江苏工商本<精讲1>',
            subTitle: '【江苏工商本科】不过退费班',
            src: '/static/mob-img/书架.jpg',
            name: '任思远'
          }, {
            id: '3',
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
    computed: {},
    props: {},
    created() {
      this.getMyCourseList();
    },
    mounted() {

    },
    methods: {
      toMyCourse() {
        this.$router.push('/course/mycourse');
      },
      getMyCourseList() {
        selectTimeVideo(new Date().toLocaleDateString()).then(data => {
          if (data.status === 'success') {
            this.courseList = data.data;
          } else {
            this.$messagebox('系统提示', `获取数据失败，请联系管理员!`);
          }
        });
      },
      clickHandler(item) {
        this.$router.push('/video/' + item.id);
      }
    }
  };
</script>

<style scoped lang="stylus" type="text/stylus">
  .main-container
    position: relative
</style>
