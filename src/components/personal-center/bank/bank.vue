<template>
  <div>
    <div class="container">
      <div class="top">
        <div style="height: 10rem !important;overflow: hidden;position: relative;">
          <ve-gauge
                    :data="chartData"
                    background-color="gray"
                    :settings="chartSettings">
            <span style="position: absolute;left: 40%;top:50%">击败的人数</span>
          </ve-gauge>
        </div>
      </div>
      <div class="IntelligentPractice">
        <div class="beat">
          <p class="wenzi">连续练习0天</p>
          <p class="wenzi">打败10%的用户</p>
          <p class="level">继续坚持5天晋升为小学生</p>
          <span class="btn">开启练习</span>
        </div>
        <div class="practise">
          <span class="date">2015.05.18</span>
        </div>
      </div>
      <div class="last">
        <span class="txt">上次答题</span>
        <span class="courseName" :title="last">{{last.slice(0,10)+'...'}}</span>
        <a href=""><span class="continue">继续上次练习></span></a>
      </div>
      <div class="examination">
        <div class="record">
          <span class="wrapper" style="overflow:hidden; vertical-align: center">
            <i class="imgIcon"></i>
            <span class="title">错题及收藏</span><br><span class="num">共{{ mistakesAndCollection }}题</span>
          </span>
        </div>
        <div class="record">
          <div class="wrapper">
            <i class="imgIcon2"></i>
            <span class="title">做题记录</span><br><span class="num">共{{ historyNun}}条记录</span>
          </div>
        </div>
        <p class="subject"><span class="now">科目</span><span class="total">全部科目 ></span></p>
        <ul>
          <li class="courses">{{course}}</li>
        </ul>
      </div>
      <div class="detail">
        <ul :style="{width: ulength}">
          <li class="content" v-for="(item,index) in list" :key="index">
            <div class="contentBody">
              <p class="course" :title="item.KechengName">{{item.KechengName.length>8?item.KechengName.slice(0,8)+'...':item.KechengName}}</p>
              <span class="knowledge"><span class="number">0</span><br><span class="text"> 知识点</span></span>
              <span class="progress"><span class="number">160</span><span class="numberS">/944</span><span class="text">做题进度</span></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less" >

  .container {
    margin: 0 0.9375rem;
  }

  .top {
    width: 100%;
    height: 13.90625rem;
    border: 1px solid red;
  }
  .IntelligentPractice{
    width: 100%;
    height: 7.8125rem;
    margin-bottom: 0.625rem;
    border-radius: 1.25rem;
    padding: 0.9375rem;
    position: relative;
    box-sizing: border-box;
    background: #f9f9f9;
    .beat{
      display: inline-block;
      width: 9.375rem;
      .wenzi{
        font-size: 1rem;
        margin-bottom:  0.625rem;
      }
      .level{
        font-size: 0.75rem;
        color: #666;
        margin-bottom:  0.625rem;
      }
      .btn{
        text-align: center;
        display: inline-block;
        width: 4.0625rem;
        line-height: 1.40625rem;
        font-size: 0.75rem;
        font-weight: bolder;
        color: #fff;
        background: #ff849f;
        border-radius: 0.3125rem;

      }
    }
    .practise{
      width: 4.53125rem;
      height: 6.875rem;
      display: inline-block;
      position: absolute;
      right: 0;
      top:-0.3125rem;
      background-image: url("../../../../static/mob-img/question_01.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      border-radius: 0.3125rem;
      /*text-align: center;*/
      .date{
        font-size: 0.75rem;
        color: #fff;
        position: absolute;
        bottom: 0.625rem;
        left: 0.3125rem;
      }
    }
  }

  .last {
    width: 100%;
    height: 3.0625rem;
    background: #f6f7fb;
    margin-top: 0.625rem;
    margin-bottom: 0.9375rem;
    /*vertical-align: middle;*/
  }

  .last .txt {
    display: inline-block;
    width: 2.4375rem;
    margin: 0.625rem;
    color: #939498;
    font-size: 0.875rem;
    border-right: 1px solid #939498;
    vertical-align: middle;
  }

  .last .courseName {
    color: #939498;
    font-size: 0.75rem;
    vertical-align: middle
  }

  .last .continue {
    font-size: 0.75rem;
    vertical-align: middle;
    margin-left: 2.8125rem;
    color: #303133;
  }

  .record {
    width: 10.3125rem;
    height: 3.90625rem;
    background: #f9f9f9;
    position: relative;
    display: inline-block;
    margin-bottom: 0.625rem;
  }

  .wrapper {
    width: 90%;
    position: absolute;
    top: 0.9375rem;
    left: 0.625rem;
  }

  .record .title {
    font-size: 0.9375rem;
    float: left;
    margin-left: 0.625rem;

  }

  .record .num {
    font-size: 0.75rem;
    float: left;
    margin-left: 0.625rem;
    color: #919399;
    line-height: 0.9375rem;

  }

  .imgIcon {
    width: 2.3125rem;
    height: 2.3125rem;
    background-image: url('/static/mob-img/bank_03.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    position: relative;
    float: left;
    /*top:0;*/
  }

  .imgIcon2 {
    width: 2.3125rem;
    height: 2.3125rem;
    background-image: url('/static/mob-img/bank_05.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    position: relative;
    float: left;
    /*top:0;*/
  }

  .subject {
    margin: 0.625rem 0;
  }

  .subject .now {
    font-size: 1.125rem;
    vertical-align: middle;

  }

  .subject .total {
    font-size: 0.75rem;
    vertical-align: middle;
    color: #919399;
    float: right;
  }

  .courses {
    text-indent: 0.3125rem;
    font-size: 0.875rem;
  }

  .detail {
   padding: 1.25rem 0;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    height: 7.5rem;

  }
.detail ul{
  list-style: none;
  width: 1500px;
}
  .content {
    width: 9.375rem;
    height: 7.5rem;
    background: #e4f0fe;
    padding: 0.34375rem;
    display: inline-block;
    margin-right: 0.78125rem;
  }

  .contentBody {
    width: 100%;
    height: 100%;
    border: 1px solid #dde3ef;;
  }

  .content .contentBody .course {
    font-size: 0.875rem;
    margin: 1.34375rem 0 1.5625rem 0.9375rem;
  }

  .content .contentBody .knowledge {
    display: inline-block;
    width: 2.65625rem;
    height: 2.375rem;
    margin-left: 1.09375rem;
  }
  .content .contentBody .knowledge .number{
    font-size: 1.125rem;
    color: #5ea5f3;
  }
  .content .contentBody .knowledge .text{
    font-size: 0.75rem;
    color: #97c7ef;
  }
  .content .contentBody .progress {
    display: inline-block;
    width: 3.75rem;
    height: 2.375rem;
    margin-left: 0.9375rem;
  }
  .content .contentBody .progress .number{
    font-size: 1.125rem;
    color: #5ea5f3;
  }
  .content .contentBody .progress .numberS{
    color: #999999;
    font-size: 0.875rem;
  }
  .content .contentBody .progress .text{
    font-size: 0.75rem;
    color: #97c7ef;
  }
</style>
<script>
  import { getBrushingCount, getLastQuestion, getHistoryCount, getQuestionCount, getOrderForm, getMistakes } from '@/API';
  export default {

    name: 'bank',
    data() {
      this.chartSettings = {
        dataType: {
          '打败的人数': 'percent'
        },
        seriesMap: {
          '打败的人数': {
            center: ['50%', '50%'],
            min: 0,
            max: 1,
            endAngle: 45,
            splitNumber: 10,
            radius: '50%',
            axisLine: {
              lineStyle: {
                color: [[1, '#f2c4ce']],
                width: 5
              }
            },
            axisLabel: {
              textStyle: {
                fontWeight: 'bolder',
                color: 'transparent'

              }
            },
            axisTick: {
              length: 0,
              lineStyle: {
                color: 'auto'

              }
            },
            splitLine: {
              length: 5,
              lineStyle: {
                width: 5,
                color: '#e995a6',
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
            pointer: {
              // 指针的颜色与最外层环的颜色相同 单独设置颜色不会生效
              // color:'red',
              // length:0,//无法让指针消失
              // 让指针不显示 设置width:0
              width: 0,
              shadowColor: '#fff',
              shadowBlur: 5
            },
            detail: {
              offsetCenter: [0, '-20'],
              textStyle: {
                fontWeight: 'bolder',
                color: '#fff'
                // fontSize:'40'
              }
            }
          }

        }
      };
      return {
        chartData: {
          columns: ['type', 'value'],
          rows: [
            {type: '打败的人数', value: 0.6}
          ]
        },
        mistakesAndCollection: 0,
        historyNun: 0,
        last: '这一原则属于工作分析原则中的( )',
        course: '【江苏工商本科】 不过退费班',
        list: []
      };
    },
    created() {
      getQuestionCount().then(data => {
        // console.log(data.data);
        this.mistakesAndCollection = data.data[0].count;
      });
      getHistoryCount().then(data => {
        // console.log(data.data);
        this.historyNun = data.data[0].count;
      });
      getLastQuestion().then(data => {
        // console.log(data.data);
        this.last = data.data[0].Title;
      });
      getBrushingCount().then(data => {
         // console.log(data.data);
      });
      getOrderForm().then(data => {
        console.log(data.data[0]);
        this.course = data.data[0].MajorName;
         getMistakes(data.data[0].OrderNo).then(data => {
           console.log(data.data);
          this.list = data.data;
        });
      });
    },
    mounted() {

    },
    computed: {
      ulength: function () {
        return this.list.length * 11 + 'rem';
      }
    },
    methods: {}
  };
</script>
<style>
</style>
