<template>
  <div class="page-container">
    <M-Header pageTitle="录播视频">
      <mt-button icon="more"></mt-button>
    </M-Header>
    <div class="main-container">
      <div class="video-container">
        <div class="prism-player" id="J_prismPlayer"></div>
      </div>
      <mt-navbar v-model="active">
        <mt-tab-item id="chat">公共聊天区</mt-tab-item>
        <mt-tab-item id="question">提问区</mt-tab-item>
        <mt-tab-item id="synopsis">课程大纲</mt-tab-item>
        <mt-tab-item id="test">随堂考</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="chat">
          <ul class="chat-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
              infinite-scroll-distance="10">
            <li class="chat-item" v-for="item in chatList" :key="item.id">
              <p class="chat-title">{{item.name}}-{{item.major}}:({{item.classNum}})</p>
              <p class="chat-text">{{item.text}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="question">
          <ul class="question-list">
            <li class="question-item" v-for="(item,index) in questionList" :key="item.id">
              <p class="question-title">{{index+1}}.{{item.title}}</p>
              <p class="question-content">{{item.content}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="synopsis">
          <ul class="synopsis-list">
            <li class="synopsis-item" :class="item.active?'synopsis-active':''"
                v-for="item in synopsisList" :key="item.id">
              <img class="synopsis-img in-bl" :src="item.src" :alt="item.text"/>
              <div class="synopsis-content in-bl">
                <p class="synopsis-title">{{item.title}}</p>
                <p class="synopsis-detail">{{item.detail}}</p>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="test">
          <div class="test-container">
            <div class="test-header clearfix">
              <div class="cur-and-total in-bl">
                <span class="cur">{{test.cur}}</span>/<span class="total">{{test.total}}</span>
              </div>
              <div class="type-and-score in-bl">
                <span class="type">{{test.type}}</span>
                <span class="score">({{test.score}}分)</span>
              </div>
              <div class="countdown in-bl flr">00:03</div>
            </div>
            <p class="test-title">{{test.title}}</p>
            <ul class="selection-list">
              <li class="selection-item" v-for="(option,index) in test.selections" :key="option.id">
                <span class="selection-idx in-bl">{{String.fromCharCode(65+index)}}</span>
                <span class="selection-text in-bl">{{option.text}}</span>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <footer></footer>
  </div>
</template>

<script>
  import {selectVideoModel} from '@/API';
  // import flv from 'flv.js';

  export default {
    name: 'M_Video',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve)
    },
    data() {
      return {
        active: 'chat',
        countdown: '',
        videoURL: '',
        pageTitle: '宏观经济分析',
        // loading: false,
        chatList: [
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'},
          {id: '1', name: '徐小宝', major: '人力资源本科', classNum: '36', text: '有苏州的同学吗？'}
        ],
        questionList: [
          {
            id: '1',
            title: '请问老师，如果怎样怎样怎样诸如此类的问题，在实践过程\n' +
            '中该如何有效的避免和解决呢？',
            content: '答：在实践过程中，我们应该怎样怎样怎样，在实践\n' +
            '过程中，我们应该怎样怎样怎样，在实践过程中，我\n' +
            '们应该怎样怎样怎样！'
          }, {
            id: '1',
            title: '请问老师，如果怎样怎样怎样诸如此类的问题，在实践过程\n' +
            '中该如何有效的避免和解决呢？',
            content: '答：在实践过程中，我们应该怎样怎样怎样，在实践\n' +
            '过程中，我们应该怎样怎样怎样，在实践过程中，我\n' +
            '们应该怎样怎样怎样！'
          }, {
            id: '1',
            title: '请问老师，如果怎样怎样怎样诸如此类的问题，在实践过程\n' +
            '中该如何有效的避免和解决呢？',
            content: '答：在实践过程中，我们应该怎样怎样怎样，在实践\n' +
            '过程中，我们应该怎样怎样怎样，在实践过程中，我\n' +
            '们应该怎样怎样怎样！'
          }, {
            id: '1',
            title: '请问老师，如果怎样怎样怎样诸如此类的问题，在实践过程\n' +
            '中该如何有效的避免和解决呢？',
            content: '答：在实践过程中，我们应该怎样怎样怎样，在实践\n' +
            '过程中，我们应该怎样怎样怎样，在实践过程中，我\n' +
            '们应该怎样怎样怎样！'
          }, {
            id: '1',
            title: '请问老师，如果怎样怎样怎样诸如此类的问题，在实践过程\n' +
            '中该如何有效的避免和解决呢？',
            content: '答：在实践过程中，我们应该怎样怎样怎样，在实践\n' +
            '过程中，我们应该怎样怎样怎样，在实践过程中，我\n' +
            '们应该怎样怎样怎样！'
          }, {
            id: '1',
            title: '请问老师，如果怎样怎样怎样诸如此类的问题，在实践过程\n' +
            '中该如何有效的避免和解决呢？',
            content: '答：在实践过程中，我们应该怎样怎样怎样，在实践\n' +
            '过程中，我们应该怎样怎样怎样，在实践过程中，我\n' +
            '们应该怎样怎样怎样！'
          }, {
            id: '1',
            title: '请问老师，如果怎样怎样怎样诸如此类的问题，在实践过程\n' +
            '中该如何有效的避免和解决呢？',
            content: '答：在实践过程中，我们应该怎样怎样怎样，在实践\n' +
            '过程中，我们应该怎样怎样怎样，在实践过程中，我\n' +
            '们应该怎样怎样怎样！'
          }, {
            id: '1',
            title: '请问老师，如果怎样怎样怎样诸如此类的问题，在实践过程\n' +
            '中该如何有效的避免和解决呢？',
            content: '答：在实践过程中，我们应该怎样怎样怎样，在实践\n' +
            '过程中，我们应该怎样怎样怎样，在实践过程中，我\n' +
            '们应该怎样怎样怎样！'
          }, {
            id: '1',
            title: '请问老师，如果怎样怎样怎样诸如此类的问题，在实践过程\n' +
            '中该如何有效的避免和解决呢？',
            content: '答：在实践过程中，我们应该怎样怎样怎样，在实践\n' +
            '过程中，我们应该怎样怎样怎样，在实践过程中，我\n' +
            '们应该怎样怎样怎样！'
          }, {
            id: '1',
            title: '请问老师，如果怎样怎样怎样诸如此类的问题，在实践过程\n' +
            '中该如何有效的避免和解决呢？',
            content: '答：在实践过程中，我们应该怎样怎样怎样，在实践\n' +
            '过程中，我们应该怎样怎样怎样，在实践过程中，我\n' +
            '们应该怎样怎样怎样！'
          }, {
            id: '1',
            title: '请问老师，如果怎样怎样怎样诸如此类的问题，在实践过程\n' +
            '中该如何有效的避免和解决呢？',
            content: '答：在实践过程中，我们应该怎样怎样怎样，在实践\n' +
            '过程中，我们应该怎样怎样怎样，在实践过程中，我\n' +
            '们应该怎样怎样怎样！'
          }

        ],
        synopsisList: [
          {id: '1', src: '/static/mob-img/img-src.png', text: '', title: '第二页·第2章', detail: '开学典礼人力资源管理0427'},
          {id: '1', src: '/static/mob-img/img-src.png', text: '', title: '第二页·第2章', detail: '开学典礼人力资源管理0427'},
          {id: '1', src: '/static/mob-img/img-src.png', text: '', title: '第二页·第2章', detail: '开学典礼人力资源管理0427'},
          {id: '1', src: '/static/mob-img/img-src.png', text: '', title: '第二页·第2章', detail: '开学典礼人力资源管理0427'},
          {id: '1', src: '/static/mob-img/img-src.png', text: '', title: '第二页·第2章', detail: '开学典礼人力资源管理0427'},
          {id: '1', src: '/static/mob-img/img-src.png', text: '', title: '第二页·第2章', detail: '开学典礼人力资源管理0427'},
          {id: '1', src: '/static/mob-img/img-src.png', text: '', title: '第二页·第2章', detail: '开学典礼人力资源管理0427'},
          {id: '1', src: '/static/mob-img/img-src.png', text: '', title: '第二页·第2章', detail: '开学典礼人力资源管理0427'},
          {id: '1', src: '/static/mob-img/img-src.png', text: '', title: '第二页·第2章', detail: '开学典礼人力资源管理0427'},
          {id: '1', src: '/static/mob-img/img-src.png', text: '', title: '第二页·第2章', detail: '开学典礼人力资源管理0427'},
          {id: '1', src: '/static/mob-img/img-src.png', text: '', title: '第二页·第2章', detail: '开学典礼人力资源管理0427'}
        ],
        test: {
          cur: 1,
          total: 39,
          type: '单选题',
          score: '1',
          title: '（）是人力资源管理的理论根源和哲学基础',
          selections: [
            {id: 'a', text: '舒尔兹的人力资本理论', correct: false},
            {id: 'b', text: '人性假设理论', correct: false},
            {id: 'c', text: '经济人假设', correct: false},
            {id: 'd', text: '社会人假设', correct: false}
          ]
        }
      };
    },
    computed: {
      videoId() {
        return this.$route.query.videoId;
      },
      courseType() {
        return this.$route.query.courseType;
      }
    },
    props: {},
    created() {
      this.initData();
    },
    mounted() {

    },
    methods: {
      loadMore: function () {
        this.loading = true;
        setTimeout(() => {
          let last = this.chatList[this.chatList.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.chatList.push(last);
          }
          this.loading = false;
        }, 2500);
      },
      initData() {
        const _this = this;
        selectVideoModel(_this.videoId, _this.courseType).then(res => {
          if (res[0].result === 'success') {
            if (res[0].msg) {
              let resData = JSON.parse(res[0].msg);
              let result = resData.DataList[0];
              // console.log(result);
              _this.videoURL = result.VideoSavePath;
              return Promise.resolve({url: this.videoURL});
            } else {
              _this.$toast('暂无视频');
            }
          } else {
            _this.$messagebox('系统提示', `获取数据失败，请联系管理员!`);
          }
        }).then(({url}) => {
          let player = new Aliplayer({
            id: 'J_prismPlayer',
            x5_fullscreen: true,
            x5_video_position: 'center',
            x5_orientation: 'landscape|portrait',
            x5_type: 'h5',
            autoplay: true,
            isLive: _this.courseType === '1',
            playsinline: true,
            width: '100%',
            controlBarVisibility: 'always',
            useH5Prism: true,
            useFlashPrism: false,
            rePlay: true,
            source: url,
            cover: ''
          }, function (player) {
            if (navigator.userAgent.indexOf('Mac OS') > -1) {
              document.querySelector('.page-container').style.setProperty('--playerHeight', player.el().style.height);
              player.el().classList.add('mac-os');
            }
          });
          let videoStyle = player.el().querySelector('video').style;
          window.onresize = function () {
            if (!~navigator.userAgent.indexOf('Mac') > -1) {
              videoStyle.height = window.innerHeight + 'px';
              videoStyle.width = window.innerWidth + 'px';
              videoStyle['object-fit'] = 'contain';
            }
          };
          player.on('x5cancelFullScreen', function () {
            videoStyle.height = '300px';
          });
          player.on('x5requestFullScreen', function () {
          });
        }).catch(e => {
          _this.$messagebox('系统提示', e.message);
        });
      }
    }
  };
</script>

<style scoped>
  .page-container {
    --playerHeight: 300px;
  }

  .mac-os {
    height: var(--playerHeight) !important;
    position: relative !important;
  }

  .chat-list, .question-list, .synopsis-list {
    margin-bottom: .5rem;
    padding: .75rem 1rem;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }

  /*聊天列表*/
  .chat-item {
    padding: .2rem 0;
  }

  .chat-title {
    font-size: .8125rem;
    color: #666;
    line-height: 1.5;
  }

  .chat-text {
    font-size: .75rem;
    color: #999;
    line-height: 2.5;
  }

  /*提问列表*/
  .question-item {
    padding: .5rem 0;
  }

  .question-title {
    font-size: .75rem;
    color: #999999;
    line-height: 1.67;
  }

  .question-content {
    margin-top: .2rem;
    font-size: .8125rem;
    color: #666666;
    line-height: 1.67;
  }

  /*大纲列表*/
  .synopsis-list {
    box-sizing: border-box;
    overflow: auto;
  }

  .synopsis-item {
    padding: .75rem 0;
    background: url("../../../static/mob-img/course-active.png") no-repeat right;
  }

  .synopsis-img {
    width: 82px;
    height: 62px;
    border-radius: 4px;
  }

  .synopsis-content {
    margin-left: 1.25rem;
    vertical-align: top;
  }

  .synopsis-title {
    height: 1.875rem;
    line-height: 1.56rem;
    font-size: .875rem;
    color: #333333;
  }

  .synopsis-detail {
    height: 1.56rem;
    line-height: 1.56rem;
    font-size: .75rem;
    color: #666666;
  }

  .synopsis-list .synopsis-active {

  }

  /*随堂考*/
  .test-container {
    margin-bottom: .5rem;
    padding: .75rem 1rem;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }

  .test-header {
    height: 2.5rem;
    line-height: 2.5;
    color: #666666;
  }

  .cur-and-total .cur {
    font-size: 1.125rem;
    color: #eb4c28;
  }

  .cur-and-total .total {
    font-size: .875rem;
  }

  .type-and-score {
    margin-left: 1rem;
  }

  .type-and-score .type {
    color: #333333;
  }

  .type-and-score .score {
  }

  .countdown {
    font-size: 1rem;
    color: #eb4c28;
  }

  .test-title {
    height: 3.125rem;
    line-height: 3.125;
    font-size: 1rem;
    color: #333333;
  }

  .selection-item {
    height: 3.125rem;
    line-height: 3.125;
    font-size: 1rem;
    color: #333333;
  }

  .selection-idx {
    width: 2rem;
    height: 2rem;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid #ccc;
    line-height: 2rem;
  }

  .selection-text {
    margin-left: .5rem;
  }
</style>
