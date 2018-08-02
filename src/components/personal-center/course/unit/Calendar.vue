<template>
  <div>
    <div class="calendar-container">
      <div class="calendar-header clearfix">
        <div v-if="isClosed">
          <a href="javascript:" class="expands-calendar in-bl flr" @click="isClosed = !isClosed"></a>
          <div class="calendar-inline">
            <p class="calendar-inline-title">{{currentDate.getMonth()+1}}/{{currentDate.getFullYear()}}</p>
            <ul class="week-list">
              <li class="day in-bl" v-for="dateItem in weekList" :key="dateItem.dateStr"
                  @click="setCurrentDate(dateItem)">
                <div class="date-text" :class="[dateItem.className,{'active':dateItem.isActive}]"
                     :date-str="dateItem.dateStr">
                  {{dateItem.text}}
                  <i :class="dateItem.hasCourse?['has-course','in-bl']:''"></i>
                  <i :class="dateItem.hasExam?['has-exam','in-bl']:''"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <a href="javascript:" class="focus-today in-bl fll" @click="changeMonth(0)">今天</a>
          <a href="javascript:" class="close-calendar in-bl flr" @click="isClosed = !isClosed"></a>
          <div class="calendar-title">
            <a href="javascript:" class="prev-mon in-bl " @click="changeMonth(-1)"></a>
            <div class="calendar-title-text in-bl">
              {{currentDate.getFullYear()}}年{{currentDate.getMonth() + 1}}月
            </div>
            <a href="javascript:" class="next-mon in-bl " @click="changeMonth(1)"></a>
          </div>
        </div>
      </div>
      <div v-if="!isClosed" class="calendar-content">
        <table class="calendar-table">
          <thead>
          <tr>
            <th>
              <div class="week-text">日</div>
            </th>
            <th>
              <div class="week-text">一</div>
            </th>
            <th>
              <div class="week-text">二</div>
            </th>
            <th>
              <div class="week-text">三</div>
            </th>
            <th>
              <div class="week-text">四</div>
            </th>
            <th>
              <div class="week-text">五</div>
            </th>
            <th>
              <div class="week-text">六</div>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(week,index) in dateList" :key="index">
            <td v-for="dateItem in week" :key="dateItem.dateStr" @click="setCurrentDate(dateItem)">
              <div class="date-text" :class="[dateItem.className,{'active':dateItem.isActive}]"
                   :date-str="dateItem.dateStr">
                {{dateItem.text}}
                <i :class="dateItem.hasCourse?['has-course','in-bl']:''"></i>
                <i :class="dateItem.hasExam?['has-exam','in-bl']:''"></i>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="content-footer">
          <i class="intro-has-course in-bl"></i>上课日期
          <i class="intro-has-exam in-bl"></i>考试日期
        </div>
      </div>
      <!--<div class="calendar-shade"></div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'M_Calendar',
    data() {
      return {
        isClosed: true,
        currentDate: new Date(),
        dateList: []
      };
    },
    computed: {
      weekList() {
        let arr = this.dateList.reduce((prev, cur) => prev.concat(cur), []);
        let index = 3;
        arr.forEach((v, i) => {
          if (v.className === 'today') {
            index = i;
          }
        });
        return arr.slice(index - 3, index + 4);
      }
    },
    props: {
      animation: {
        type: Boolean,
        default: false
      },
      hasCourseDateList: {
        type: Array
      }
    },
    created() {
      this.initDateList();
    },
    mounted() {
    },
    methods: {
      initDateList() {
        const _this = this;
        const year = _this.currentDate.getFullYear();
        const month = _this.currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        _this.dateList = [];
        for (let i = 0; i < 6; i++) {
          let week = [];
          for (let j = 0; j < 7; j++) {
            let elDay = new Date(year, month, 7 * i + j - firstDay + 1);
            week.push(_this.setDateProp(elDay));
          }
          _this.dateList.push(week);
        }
      },
      setDateProp(date) {
        const _this = this;
        const month = _this.currentDate.getMonth();
        let prop = {};
        prop.isActive = false;
        prop.text = date.getDate();
        prop.dateStr = _this.dateFormatter(date);
        if (new Date().toLocaleDateString() === date.toLocaleDateString()) {
          prop.className = 'today';
        } else if (month === date.getMonth()) {
          prop.className = 'current-month';
        } else {
          prop.className = 'other-month';
        }
        if (_this.hasCourseDateList.length > 0) {
          prop.hasCourse = _this.hasCourseDateList.indexOf(date.toLocaleDateString()) > -1;
        }
        return prop;
      },
      changeMonth(dir) {
        const _this = this;
        const year = _this.currentDate.getFullYear();
        const month = _this.currentDate.getMonth();
        if (dir === 0) {
          _this.currentDate = new Date();
        } else {
          _this.currentDate = new Date(year, month + dir, 1);
        }
        _this.initDateList();
      },
      dateFormatter(date) {
        let dateArr = date.toLocaleDateString().split('/');
        let dateStr = dateArr[0];
        dateStr += dateArr[1].length === 1 ? '-0' + dateArr[1] : '-' + dateArr[1];
        dateStr += dateArr[2].length === 1 ? '-0' + dateArr[2] : '-' + dateArr[2];
        return dateStr;
      },
      setCurrentDate(date) {
        this.dateList.reduce((prev, cur) => prev.concat(...cur), []).forEach(v => (v.isActive = false));
        date.isActive = true;
        this.$emit('updateDate', date.dateStr);
      }
    },
    filters: {}
  };
</script>

<style scoped type="text/stylus" lang="stylus">
  .calendar-container
    width: 100%
    position: relative
    font-size: .9375rem
    font-family: '微软雅黑'
    .calendar-header
      height: 3.75rem
      overflow: hidden
      background: url("/static/mob-img/header3.png") no-repeat
      background-size 100% 100%
      .calendar-title
        margin: 0 auto
        width: 11.25rem
        height: 3.75rem
        line-height: 3.75rem
        text-align: center
      .focus-today
        margin: 1.2rem .75rem
        padding: 0.3rem 0.5rem
        height: .75rem
        font-size: .75rem
        color: #fff
        border: 1px solid #fff
        border-radius: .75rem
      .expands-calendar, .close-calendar
        margin: 1.25rem .75rem
        width: 1.25rem
        height: 1.25rem
      .expands-calendar
        background: url("/static/mob-img/expands-calendar.png") no-repeat
        background-size: 100% 100%
      .close-calendar
        border: 1px solid #ffffff
        border-radius: 1.25rem
        background: url("/static/mob-img/close-calendar.png") no-repeat
        background-size: 100% 100%
      .prev-mon
        width: .5rem
        height: .5rem
        background: url("/static/mob-img/calendar-prev.png") no-repeat
        background-size: 100% 100%
      .calendar-title-text
        width: 8rem
        text-align: center
        color: #ffffff
      .next-mon
        width: .5rem
        height: .5rem
        background: url("/static/mob-img/calendar-next.png") no-repeat
        background-size: 100% 100%
      .calendar-inline
        .active
          border: 1px solid #fff
          border-radius: 2rem
      .calendar-inline-title
        padding: 0 10px
        height: .75rem
        line-height: .75rem
        font-size: .75rem
        color: #ffffff
      .week-list
        padding-top: 0.2rem
        display: flex
        justify-content space-between
        .today
          background: #ffffff
          color: #ee4b19
          border-radius: 2rem
        .current-month
        .other-month
          color: #fff
    .calendar-content
      padding: 1rem 0.5rem 1rem 0
      width: 98%
      box-shadow: 0 2px 5px 0 #dedede
      position: absolute
      transition: .5s
      background: #ffffff
      z-index: 10
      .calendar-table
        width: 100%
        .week-text
          font-size: .9375rem
          font-weight: normal
          color: #666
        .active
          border: 1px solid #ee4b19
          border-radius: 2rem
    .date-text
      margin: auto
      width: 2rem
      height: 2rem
      line-height: 2rem
      text-align: center
      font-size: .875rem
      position: relative
      box-sizing: border-box
      .has-exam, .has-course
        width: .5rem
        height: .5rem
        border-radius: .5rem
        position: absolute
        top: .3rem
      .has-exam
        right: 0
        background: #198eee
      .has-course
        right: -.3rem
        background: #ffd44f
    .today
      background: #ee4b19
      color: #ffffff
      border-radius: 2rem
    .current-month
      color: #333
    .other-month
      color: #999
    .content-footer
      margin-top: .5rem
      font-size: .75rem
      text-align: center
      color: #333
      .intro-has-exam, .intro-has-course
        margin-right: .2rem
        width: .5rem
        height: .5rem
        border-radius: .5rem
      .intro-has-exam
        margin-left: 2rem
        background: #198eee
      .intro-has-course
        background: #ffd44f

  .calendar-shade
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    opacity: .7
</style>
