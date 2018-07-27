<template>
  <div>
    <M-Header pageTitle="课程班"
              :styleObj="{background:'url(/static/mob-img/header2.png) no-repeat','background-size':'100% 100%'}">
      <mt-button size="small" @click="toMyCourse">我的课程</mt-button>
    </M-Header>
    <div class="main-container">
      <M-Calendar v-if="hasCourseDateList.length>0" @updateDate="getCurrentDate"
                  :hasCourseDateList="hasCourseDateList"></M-Calendar>
      <M-CourseList @loadMore="loadMore" :courseList="courseList" @item-click="clickHandler"></M-CourseList>
    </div>
  </div>
</template>

<script>
  import {selectTimeVideoList, selectTimeVideo} from '@/API';

  export default {
    name: 'M_CourseList',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve),
      'M-Calendar': resolve => require(['@/components/personal-center/course/unit/Calendar'], resolve),
      'M-CourseList': resolve => require(['@/components/personal-center/course/unit/CourseList'], resolve)
    },
    data() {
      return {
        currentDate: new Date().toLocaleDateString().replace(/\//g, '-'),
        courseList: [
          // {
          //   id: '1',
          //   st: '2018.05.02',
          //   et: '19:00~21:30',
          //   attend: '未出勤',
          //   title: '【公司理财】江苏工商本<精讲1>',
          //   subTitle: '【江苏工商本科】不过退费班',
          //   src: '/static/mob-img/书架.jpg',
          //   name: '任思远'
          // }
        ],
        hasCourseDateList: []
      };
    },
    computed: {
      currentMonth() {
        return this.currentDate.replace(/\d+$/, '01');
      }
    },
    props: {},
    created() {
      this.setCalendarProp(this.currentMonth);
      this.getCourseList(this.currentDate);
    },
    mounted() {

    },
    methods: {
      toMyCourse() {
        this.$router.push('/course/mycourse');
      },
      clickHandler(item) {
        this.$router.push({name: 'M_Video', query: {videoId: item.videoId, courseType: item.courseType}});
      },
      getCurrentDate(date) {
        this.currentDate = date.replace(/-/g, '/');
      },
      getCourseList(date) {
        const _this = this;
        selectTimeVideoList(date).then(res => {
          if (res[0].result === 'success') {
            if (res[0].msg) {
              let resList = JSON.parse(res[0].msg);
              if (resList.length > 0) {
                let tempList = [];
                resList.forEach(v => {
                  // console.log(v);
                  let obj = {};
                  obj.title = v.VideoName;
                  obj.subTitle = '';
                  obj.st = v.StartTime;
                  obj.et = v.EndTime;
                  obj.courseType = v.CourseType;
                  obj.name = v.TeacherName;
                  obj.slotField = v.VideoType;
                  obj.id = v.Id;
                  obj.videoId = v.VideoId;
                  obj.date = v.CourseDate;
                  obj.attend = v.IsChuQing;
                  obj.src = '/static/mob-img/avator.png';
                  tempList.push(obj);
                });
                _this.courseList = tempList;
              } else {
                this.$toast('暂无课程');
              }
            }
          }
        });
      },
      setCalendarProp(month) {
        const _this = this;
        selectTimeVideo(month).then(res => {
          if (res[0].result === 'success') {
            if (res[0].msg) {
              let resList = JSON.parse(res[0].msg);
              if (resList.length > 0) {
                _this.hasCourseDateList = resList.map(v => new Date(v.CourseDate).toLocaleDateString());
              }
            }
          }
        });
      },
      loadMore() {
      }
    },
    watch: {
      currentDate(newVal) {
        this.getCourseList(newVal);
      },
      currentMonth(newVal) {
        this.setCalendarProp(newVal);
      }
    }
  };
</script>

<style scoped lang="stylus" type="text/stylus">
  .main-container
    position: relative
</style>
