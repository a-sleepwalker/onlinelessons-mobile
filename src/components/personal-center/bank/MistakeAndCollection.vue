<template>
  <div>
    <M-Header pageTitle="错题及收藏">
    </M-Header>
    <div class="container">
      <div class="banner">
        <ul :style="{width: ulength}">
          <li v-for="(item,index) in questionBank" :key="index" @click="iconChange(index,item)"
              :class="index%2==0?'yellow':'blue'">
            <i :class="isshow==index?'icon':''"></i>
            <span class="txt">
              {{item.MajorName}}
            </span>
          </li>
        </ul>
      </div>
      <div class="subject" v-for="(item,index) in terms" :key="index">
        <!--<div class="title">{{item.term}}</div>-->
        <mt-cell :title="item.KechengName" is-link>
          <span class="num">{{item.Num}}</span>
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
  import {getOrderForm, getMistakes} from '@/API';

  export default {

    name: 'MistakeAndCollection',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve)
    },
    data() {
      return {
        token: ' ',
        isshow: 0,
        questionBank: [],
        terms: []
      };
    },
    created() {
      getOrderForm().then(data => {
        if (data.success === 'true') {
          console.log('成功的请求');
          if (data.data) {
            console.log('请求的数据不为空');
            console.log(data);
            this.questionBank = data.data;
            getMistakes(data.data[0].OrderNo).then(data => {
              this.terms = data.data;
            });
          } else {
            console.log('请求的数据不为空');
          }
        } else {
          console.log('失败的请求');
        }
      });
    },
    mounted() {

    },
    methods: {
      iconChange(index, item) {
        this.isshow = index;
        getMistakes(item.OrderNo).then(data => {
          this.terms = data.data;
        });
      }
    },
    computed: {
      ulength: function () {
        return this.questionBank.length * 180 + 'px';
      }
    }
  };
</script>

<style scoped>
  .container {
    margin: 0 0.9375rem;
  }

  .banner {
    width: 100%;
    height: 4.75rem;
    padding: 1.875rem 0 0.625rem 0;
    overflow: hidden;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .banner ul {
    list-style: none;
    width: 1000px;
    height: 4.375rem;
  }

  /*.banner ul li{*/
  /*width: 9.375rem;*/
  /*height: 4.375rem;*/
  /*background: -webkit-linear-gradient(left top, #fa7669 , #f8b78d); !* Safari 5.1 - 6.0 *!*/
  /*background: -o-linear-gradient(bottom right, #fa7669, #f8b78d); !* Opera 11.1 - 12.0 *!*/
  /*background: -moz-linear-gradient(bottom right,#fa7669, #f8b78d); !* Firefox 3.6 - 15 *!*/
  /*background: linear-gradient(to bottom right, #fa7669 , #f8b78d); !* 标准的语法（必须放在最后） *!*/
  /*border-radius: 0.3125rem;*/
  /*font-size:1rem;*/
  /*color: #fff;*/
  /*float:left;*/
  /*position: relative;*/
  /*margin-right: 0.625rem;*/
  /*}*/
  .yellow {
    width: 9.375rem;
    height: 4.375rem;
    background: -webkit-linear-gradient(left top, #fa7669, #f8b78d); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right, #fa7669, #f8b78d); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right, #fa7669, #f8b78d); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom right, #fa7669, #f8b78d); /* 标准的语法（必须放在最后） */
    border-radius: 0.3125rem;
    font-size: 1rem;
    color: #fff;
    float: left;
    margin-left: 0.625rem;
    position: relative;
  }

  .blue {
    width: 9.375rem;
    height: 4.375rem;
    background: -webkit-linear-gradient(left top, #6b84fb, #7ccdfa); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right, #6b84fb, #7ccdfa); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right, #6b84fb, #7ccdfa); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom right, #6b84fb, #7ccdfa); /* 标准的语法（必须放在最后） */
    border-radius: 0.3125rem;
    font-size: 1rem;
    color: #fff;
    float: left;
    margin-left: 0.625rem;
    position: relative;
  }

  .txt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8.125rem;
  }

  .icon {
    display: inline-block;
    width: 1rem;
    height: 0.875rem;
    border-top-left-radius: 0.4375rem;
    border-bottom-left-radius: 0.4375rem;
    background-image: url("/static/mob-img/mac_01.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /*border: 1px solid red;*/
    position: absolute;
    right: 0;
    top: 0.3125rem
  }

  .title {
    font-size: 1.0625rem;
    margin: 1.875rem 0 0.625rem 0;
  }

  .num {
    margin-right: 0.625rem;
  }
</style>
<style>
  .mint-cell-wrapper {
    font-size: 0.875rem;
    line-height: 2.8125rem;
    /*border:none;*/
    border-bottom: 1px solid #ededed;
  }

  .mint-cell-allow-right::after {
    width: 0.25rem;
    height: 0.25rem;;
  }

  .cell {

  }
</style>
