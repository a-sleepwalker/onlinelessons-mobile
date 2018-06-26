<template>
  <div>
    <!--上部准考证信息-->
    <div class="tips">
      <div class="wrapper">
        <img src="/static/mob-img/avator.png" height="120" width="120"/>
        <div class="p_tanscript">
          <p class="person">
            <span>高盛</span>的准考证
          </p>
          <span class="text">添加准考证</span>
        </div>

      </div>
    </div>
    <!--显示当前准考证 -->
    <div v-if="dropdown" @click="toggle()">
      <mt-cell class="ticket-number" style=";" :title="'准考证号：'+ticketNumber" is-link>
        <span>切换准考证</span>
      </mt-cell>
    </div>
    <!--准考证选择框-->
    <div class='change-number' v-else="">
      <p>请选择准考证：</p>
      <ul>
        <li v-for="(num, index) in ticket" :key="index" @click="toggle(),changeNum()">
          <mt-cell :title="'准考证号：'+num" is-link></mt-cell>
        </li>
      </ul>
    </div>
    <!--成绩展示-->
    <ul class="content" v-for="(score,index) in scores" :key="index">
      <li>
        <mt-cell :title="score.state">
          <img slot="icon" src="/static/mob-img/cell-icon.png" width="8" height="32">
        </mt-cell>
        <div class="course">
          <mt-cell v-for="(course,index) in score.course" :key="index" :title="course.coursename">
            <span style="color:#ff675d;">{{course.score}}</span>
          </mt-cell>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getAdmissionTicket, getScoreList} from '@/API';
  // import {getScoreList} from '@/API';

  export default {
    name: 'M_tanscript',
    data() {
      return {
        // 当前准考证号
        ticketNumber: '464646',
        dropdown: true,
        // 所有的准考证号
        ticket: [
          111, 222, 333
        ],
        scores: [
          {
            state: '本学期成绩单',
            course: [{
              coursename: '人力资源管理（一）',
              score: '75.00'
            },
              {
                coursename: '金融理论与实务',
                score: '61.00'
              },
              {
                coursename: '宏观经济与分析\n',
                score: '81.00'
              }
            ]
          }
        ]
      };
    },
    methods: {
      toggle: function () {
        this.dropdown = !this.dropdown;
      },
      // 选择对于准考证 请求不同成绩单
      changeNum: function (event) {
        console.log(event);
        getScoreList('050115258975').then(data => {
          if (data.status === 'success') {
            // 打印获取到的数据
            console.log(data.data);
          } else {
            this.$messagebox('系统提示', `获取数据失败，请联系管理员!<br/>错误信息：${data.message}`);
          }
        });
      }
    },
  created() {

  },
  mounted() {
    // 挂载完成获取到 当前用户 准考证号
    getAdmissionTicket('').then(data => {
      if (data.status === 'success') {
        // 打印获取到的数据
        console.log(data.data);
      } else {
        this.$messagebox('系统提示', `获取数据失败，请联系管理员!<br/>错误信息：${data.message}`);
      }
    });
  }
  }
  ;
</script>

<style>
  .mint-cell-wrapper {
    font-size: 0.9375rem;
  }

  /*准考证号码的行高字体*/
  .mint-cell-text {
    font-size: 0.9375rem;
    line-height: 2.25rem;
  }

  /*准考证号码箭头大小*/
  .mint-cell-allow-right:after {
    width: 0.46875rem;
    height: 0.46875rem;
  }

  /*课程的字体与行高*/
  .course .mint-cell-text {
    font-size: 0.875rem;
    color: #666666;
    line-height: 2.5rem;
    margin-bottom: 1.375rem;
  }

  /*控制切换准考证窗口的样式*/
  .change-number .mint-cell-wrapper {
    border-bottom: 1px solid #999999;
    text-indent: 0.9375rem;
  }

</style>
<style scoped>
  .tips {
    height: 6.125rem;
    background: #ff675d;
    position: relative;
  }

  .wrapper {
    margin-left: 0.9375rem;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  .wrapper img {
    float: left;
    width: 2.59375rem;
    height: 2.59375rem;
    border-radius: 1.3125rem;

  }

  .wrapper .p_tanscript {
    float: left;
    margin-left: 0.325rem;
    width: 7.1875rem;
    height:2.65625rem;
    color: #fff;
  }

  .person {
    font-size: 1.0625rem;
    margin-bottom: 0.3125rem;
    letter-spacing: 1px;
  }

  .text {
    font-size: 1.0625rem;
    border: 1px solid #fff;
    border-radius: 0.15625rem;
    padding:  0.15625rem 0.3125rem;
  }

  .content {
    margin: 0 0.9375rem;
    border-bottom: 1px solid gray
  }

  .ticket-number {
    border-bottom: 1px solid #999999;
    text-indent: 0.9375rem;
    margin-bottom: 1.375rem;
  }

  .change-number p {
    color: #2387ff;
  }
</style>
