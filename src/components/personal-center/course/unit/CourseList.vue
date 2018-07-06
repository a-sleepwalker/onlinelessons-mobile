<template>
  <div>
    <ul class="course-list">
      <li class="course-item" v-for="item in courseList" :key="item.id" @click="itemClick(item)">
        <p class="course-time-container clearfix">
          <span class="course-time">{{item.date|formatDate}} {{item.st|formatTime}}~{{item.et|formatTime}}</span>
          <span class="attend flr">{{item.attend|parseAttendance}}</span>
        </p>
        <div class="course-content">
          <p class="course-title">{{item.title}}</p>
          <p class="course-sub-title">{{item.subTitle}}</p>
          <p class="course-sub-title">{{item.slotField}}</p>
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
</template>

<script>
  export default {
    name: 'CourseList',
    data() {
      return {};
    },
    props: {
      courseList: {
        type: Array,
        required: true
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      itemClick(item) {
        this.$emit('item-click', item);
      }
    },
    filters: {
      formatDate(date, sep = '-') {
        return new Date(date).toLocaleDateString().replace(/\//g, sep);
      },
      parseAttendance(val) {
        return val === 0 ? '未出勤' : '已出勤';
      },
      formatTime(date) {
        let t = new Date(date).toLocaleTimeString();
        let rtn = '';
        if (t === 'Invalid Date') {
          rtn = date;
        } else {
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
        }
        return rtn;
      }
    }
  };
</script>

<style scoped lang="stylus" type="text/stylus">
  .course-list
    background: #fefefe

    .course-item
      margin: .75rem 1rem
      padding: 0 1rem
      height: 12rem
      background: #ffff
      border-radius: 15px
      box-shadow: 2px 2px 10px 2px #eee

    .course-time-container
      margin-top: .625rem
      height: 2.625rem
      line-height: 2.625rem
      border-bottom: 1px dashed #cccccc

    .course-time
      font-size: .9375rem
      color: #333333

    .attend
      color: #ee4b19
      font-size: .75rem

    .course-title
      margin-top: .625rem
      font-size: .9375rem
      color: #333333

    .course-sub-title
      margin-top: .625rem
      font-size: .75rem
      color: #999999

    .img-icon-container
      margin-top: .625rem
      height: 1.5625rem
      color: #999999
      font-size: .875rem

    .img-icon-container img
      width: 1.5625rem
      height: 1.5625rem
      border-radius: 2rem
      vertical-align: middle

    .btn-container
      margin-top: 1rem

    .file-btn
      width: 4.5rem
      height: 1.75rem
      line-height: 1.75rem
      color: #666666
      font-size: .875rem
      text-align: center
      border: 2px solid #ddd
      border-radius: 6px

    .file-icon
      margin-right: .1rem
      width: .75rem
      height: .8125rem
      background: url("/static/mob-img/file.png") no-repeat
      background-size: 100% 100%

    .homework-btn
      width: 4.5rem
      height: 1.75rem
      line-height: 1.75rem
      color: #666666
      font-size: .875rem
      text-align: center
      border: 2px solid #ddd
      border-radius: 6px

    .homework-icon
      margin-right: .1rem
      width: .75rem
      height: .8125rem
      background: url("/static/mob-img/homework.png") no-repeat
      background-size: 100% 100%

</style>
