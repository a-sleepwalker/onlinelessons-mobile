<template>
  <div>
    <M-Header pageTitle="课程班" :styleObj="{background:'url(/static/mob-img/header2.png) no-repeat','background-size':'100% 100%'}">
      <mt-button size="small" @click="toMyCourse">我的课程</mt-button>
    </M-Header>
    <div class="main-container">
      <M-Calendar></M-Calendar>
      <ul class="class-list">
        <li class="class-item" v-for="(item,idx) in classList" :key="idx" @click="watchVideo(item.Id)">
          <p class="class-time-container clearfix">
            <span class="class-time">{{item.StartDate|formatDate('.')}} {{item.StartDate|formatTime()}}~{{item.EndDate|formatTime}}</span>
            <span class="attend flr">{{item.Attendance|parseAttendance}}</span>
          </p>
          <div class="class-content">
            <p class="class-title">{{item.VideoName}}</p>
            <p class="class-sub-title">{{item.subTitle}}</p>
            <p class="img-icon-container">
              <img :src="item.src" alt="">
              <span>{{item.name}}</span>
            </p>
            <div class="btn-container">
              <a href="javascript:" class="file-btn in-bl" @click.stop><i class="file-icon in-bl"></i>资料</a>
              <a href="javascript:" class="homework-btn in-bl" @click.stop><i class="homework-icon in-bl"></i>作业</a>
            </div>
          </div>
        </li>
      </ul>
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
      'M-Calendar': resolve => require(['@/components/personal-center/M_Calendar'], resolve),
      'M-BreadCrumb': resolve => require(['@/components/common/BreadCrumb'], resolve)
    },
    data() {
      return {
        classList: [
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
    computed: {},
    props: {},
    created() {
      this.getMyCourseList();
    },
    mounted() {

    },
    methods: {
      toMyCourse() {
      },
      getMyCourseList() {
        selectTimeVideo(new Date().toLocaleDateString()).then(data => {
          if (data.status === 'success') {
            this.classList = data.data;
          } else {
            this.$messagebox('系统提示', `获取数据失败，请联系管理员!<br/>错误信息：${data.message}`);
          }
        });
      },
      watchVideo(id) {
        this.$router.push('/video/' + id);
      }
    },
    filters: {
      formatDate(date, sep = '-') {
        return new Date(date).toLocaleDateString().replace(/\//g, sep);
      },
      parseAttendance(val) {
        return val === 0 ? '未签到' : '已签到';
      },
      formatTime(date) {
        let t = new Date(date).toLocaleTimeString();
        let rtn = '';
        switch (t.substr(0, 2)) {
          case '上午':
            rtn = t.slice(2, -3);
            break;
          case '下午':
            let hour = t.slice(2, -3).split(':')[0];
            let min = t.slice(2, -3).split(':')[1];
            if (+hour > 12) {
              rtn = +hour + 12 + ':' + min;
            } else {
              rtn = +hour + ':' + min;
            }
            break;
        }
        return rtn;
      }
    }
  };
</script>

<style scoped>
  .main-container {
    position: relative;
  }

  .class-list {
    background: #fefefe;
  }

  .class-item {
    margin: .75rem 1rem;
    padding: 0 1rem;
    height: 12rem;
    background: #ffff;
    border-radius: 15px;
    box-shadow: 2px 2px 10px 2px #eee;
  }

  .class-time-container {
    margin-top: .625rem;
    height: 2.625rem;
    line-height: 2.625rem;
    border-bottom: 1px dashed #cccccc;
  }

  .class-time {
    font-size: .9375rem;
    color: #333333;
  }

  .attend {
    color: #ee4b19;
    font-size: .75rem;
  }

  .class-title {
    margin-top: .625rem;
    font-size: .9375rem;
    color: #333333;
  }

  .class-sub-title {
    margin-top: .625rem;
    font-size: .75rem;
    color: #999999;
  }

  .img-icon-container {
    margin-top: .625rem;
    height: 1.5625rem;
    color: #999999;
    font-size: .875rem;
  }

  .img-icon-container img {
    width: 1.5625rem;
    height: 1.5625rem;
    border-radius: 2rem;
    vertical-align: middle;
  }

  .btn-container {
    margin-top: 1rem;
  }

  .file-btn {
    width: 4.5rem;
    height: 1.75rem;
    line-height: 1.75rem;
    color: #666666;
    font-size: .875rem;
    text-align: center;
    border: 2px solid #ddd;
    border-radius: 6px;
  }

  .file-icon {
    margin-right: .1rem;
    width: .75rem;
    height: .8125rem;
    background: url("/static/mob-img/file.png") no-repeat;
    background-size: 100% 100%;
  }

  .homework-btn {
    width: 4.5rem;
    height: 1.75rem;
    line-height: 1.75rem;
    color: #666666;
    font-size: .875rem;
    text-align: center;
    border: 2px solid #ddd;
    border-radius: 6px;
  }

  .homework-icon {
    margin-right: .1rem;
    width: .75rem;
    height: .8125rem;
    background: url("/static/mob-img/homework.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
