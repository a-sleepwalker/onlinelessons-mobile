<template>
  <div>
    <M-Header pageTitle="成绩单"
              :styleObj="{background:'url(/static/mob-img/header4.png) no-repeat','background-size':'100% 100%'}">
      <mt-button>
        <img src="/static/mob-img/share.png" height="20" width="20" slot="icon">
      </mt-button>
    </M-Header>
    <!--上部准考证信息-->
    <div class="tips">
      <div class="wrapper">
        <img src="/static/mob-img/avator.png"/>
        <div class="p_tanscript">
          <p class="person">
            <span>高盛</span>的准考证
          </p>
          <span class="text">添加准考证</span>
        </div>
      </div>
    </div>
    <!--显示当前准考证 -->
    <div v-if="dropdown" @click="sheetVisible2 = true">
      <mt-cell class="ticket-number" style=";" :title="'准考证号: '+ticketNumber" is-link></mt-cell>
    </div>
    <!--成绩展示-->
    <ul class="content" v-for="(score,index) in scores" :key="index">
      <li>
        <mt-cell :title="score.State">
          <img slot="icon" src="/static/mob-img/cell-icon.png" width="8" height="32">
        </mt-cell>
        <div class="course">
          <mt-cell v-for="(course,index) in score.Course" :key="index" :title="course.Coursename.slice(0,20)+'...'">
            <span style="color:#ff675d;">{{course.Score}}</span>
          </mt-cell>
        </div>
      </li>
    </ul>
    <M-BreadCrumb></M-BreadCrumb>
    <M-Footer></M-Footer>
    <!--点击准考证下拉框-->
    <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>
  </div>

</template>

<script>
  import {MessageBox} from 'mint-ui';
  import {getAdmissionTicket, getScoreList} from '@/API';
  // import {getScoreList} from '@/API';

  export default {
    name: 'M_tanscript',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve),
      'M-Footer': resolve => require(['@/components/common/Footer'], resolve),
      'M-BreadCrumb': resolve => require(['@/components/common/BreadCrumb'], resolve)
    },
    data() {
      return {
        // action-sheet想数据
        sheetVisible: false,
        sheetVisible2: false,
        // 控制acition-sheet中的展示内容和触发的事件
        actions2: [],
        // 当前准考证号
        ticketNumber: '',
        dropdown: true,
        // 所有的成绩
        scores: []
      };
    },
    methods: {
      toggle: function () {
        this.dropdown = !this.dropdown;
      }
    },
    created() {
      getAdmissionTicket().then(data => {
        console.log(data);
        if (data[0].result === 'success') {
          console.log(7);
          if (data[0].msg) {
            console.log(9);
            // 显示第一条 作为选择的准考证
            this.ticketNumber = JSON.parse(data[0].msg)[0].ExamNo;
            getScoreList(this.ticketNumber).then(data => {
              this.scores = JSON.parse(data[0].msg);
            });
            // 获取到数据
            let examNums = JSON.parse(data[0].msg);
            // 给action-sheet添加数据与方法
            this.actions2 = examNums.map(item => {
              return {
                name: '准考证号：' + item.ExamNo,
                method: () => {
                  this.ticketNumber = item.ExamNo;
                  console.log(item.ExamNo);
                  getScoreList(this.ticketNumber).then(data => {
                    this.scores = JSON.parse(data[0].msg);
                  });
                }
              };
            });
          } else {
            MessageBox('暂无成绩');
          }
        } else {
          console.log(8);
          MessageBox(data[0].msg);
        }
      });
    },
    mounted() {
      // 挂载完成获取到 当前用户 准考证号

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
    border-bottom: 1px solid #ededed;
    text-indent: 0.9375rem;
  }

</style>
<style scoped>
  .tips {
    height: 6.125rem;
    background-image: url("/static/mob-img/ticketbg.png");
    background-size: cover;
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
    width: 2.625rem;
    height: 2.625rem;
    border-radius: 1.3125rem;

  }

  .wrapper .p_tanscript {
    float: left;
    margin-left: 0.625rem;
    /*width: 7.1875rem;*/
    /*height:2.65625rem;*/
    color: #fff;
  }

  .person {
    font-size: 1.0625rem;
    margin-bottom: 0.3125rem;
    letter-spacing: 1px;
  }

  .text {
    font-size: 0.6875rem;
    border: 1px solid #fff;
    border-radius: 0.15625rem;
    padding: 0.15625rem 0.3125rem;
  }

  .content {
    margin: 0 0.9375rem;
    border-bottom: 1px solid #ededed;
  }

  .ticket-number {
    border-bottom: 1px solid  #ededed;
    text-indent: 0.9375rem;
    margin-bottom: 1.375rem;
  }

  .change-number p {
    color: #2387ff;
  }
</style>
