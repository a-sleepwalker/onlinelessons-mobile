<template>
  <div>
    <M-Header pageTitle="我的老师">
    </M-Header>
    <div class="container">
      <mt-cell title="请选择咨询的科目"></mt-cell>
      <ul class="course">
        <li v-for="(course,index) in courses" :key="index">
          <mt-cell :title="course.courseName" is-link>
            <img slot="icon" src="/static/mob-img/myteacher01.png">
            <span v-show="course.num">
                <mt-badge type="error">{{course.num}}</mt-badge>
              </span>
          </mt-cell>
        </li>
        <li v-for="(course,index) in courses" :key="index">
          <mt-cell :title="course.courseName" is-link>
            <!--<img slot="icon" src="/static/mob-img/myteacher01.png" >-->
            <i slot="icon" class="cellSlot"
               style=" "></i>
          </mt-cell>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'myteacher',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve)
    },
    data: function () {
      return {
        courses: [
          {courseName: '工商企业管理本科', num: 0},
          {courseName: '无线课堂', num: 80},
          {courseName: '企业管理', num: 2}
        ]
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {}
  };
</script>
<style>
  .mint-cell-title {
    font-size: 0.8125rem;
    color: #9f9f9f;
  }

  .course .mint-cell-title {
    font-size: 1.0625rem;
    color: #333;
    line-height: 3.75rem;
  }

  .mint-cell-value.is-link {
    /*margin-right: 130px;*/
  }

  .mint-badge.is-size-normal {
    width: 1rem;
    border-radius: 1rem;
    padding: 3px;
    line-height: 1rem;
  }

  .mint-cell-wrapper {
    border-bottom: 1px solid #f2f2f2;
  }
</style>
<style scoped>
  .cellSlot {
    width: 0.8125rem;
    height: 1.0625rem;
    background: url('/static/mob-img/myteacher01.png') no-repeat;
    background-size: 100% 100%;
    display: inline-block;
  }
</style>
