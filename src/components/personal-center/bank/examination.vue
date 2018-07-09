<template>
    <div>
      <M-Header pageTitle="">
        <img src="../../../../static/mob-img/exam02.png" height="32" width="31"/>
      </M-Header>
      <div class="container">
        <ul>
          <li class="question" v-for="(item, index) in questions " :key="index">
            <p class="questionType">{{item.LeiXing|showType}}</p>
            <p class="questionBody">{{item.Title}}</p>
            <div class="record"><span class="answerRecord">本题作答0次，做错{{item.WrongCount}}次</span><span class="result">错题</span></div>
            <i class="imgIcon"></i><span class="date">{{item.CreateDate|showDate}}</span>
            <div style="width: 100%; height: 3.75rem"></div>
          </li>
        </ul>
      </div>
      <M-BreadCrumb></M-BreadCrumb>
      <M-Footer></M-Footer>
    </div>
</template>

<script>
  import {getQuestion} from '@/API';
    export default {
        name: 'examination',
      components: {
        'M-Header': resolve => require(['@/components/common/Header'], resolve),
        'M-Footer': resolve => require(['@/components/common/Footer'], resolve),
        'M-BreadCrumb': resolve => require(['@/components/common/BreadCrumb'], resolve)
      },
        data() {
            return {
              questions: []
            };
        },
        created() {
          getQuestion().then(data => {
            console.log(data.data);
            this.questions = data.data;
          });
        },
        mounted() {

        },
        methods: {},
        filters: {
           showType(val) {
             if (val === 0) {
               return '单选题';
             } else if (val === 1) {
               return '多选题';
             } else if (val === 2) {
               return '判断题';
             } else if (val === 3) {
               return '填空题';
             } else {
               return '简答题';
             }
           },
          showDate(val) {
             return new Date(val).toLocaleDateString();
          }
        }
    };
</script>

<style scoped>
.container{
  margin:0 0.9375rem;
}
  .question{

  }
  .questionType{
    font-size: 0.875rem;
    line-height: 2.5rem;
    border-bottom: 1px solid #e6e6e6;
  }
  .questionBody{
    margin: 1.09375rem 0;
    font-size: 1rem;
  }
  .record{
    height: 1.875rem;
    margin-bottom: 0.75rem;
  }
  .answerRecord{
    font-size: 0.75rem;
    color:#ee4b19;
    /*line-height: 60px;*/
    border: 1px solid #ee4b19;
    padding: 0.625rem;
    border-radius: 1.25rem;
  }
  .result{
    font-size: 0.75rem;
    color:#999;
    /*line-height: 60px;*/
    padding:  0.625rem;
    border: 1px solid #e6e6e6;
    border-radius: 1.25rem;
    margin-left: 0.5625rem;
  }
.imgIcon{
  width:0.625rem;
  height: 0.625rem;
  background-image: url('/static/mob-img/exam01.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: inline-block;
}
  .date{
    color:#999;
    font-size: 0.75rem;
    margin-left: 0.46875rem;
  }
</style>
