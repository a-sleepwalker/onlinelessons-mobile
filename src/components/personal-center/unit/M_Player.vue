<template>
  <div>
    <div class="prism-player" id="J_prismPlayer"></div>
  </div>
</template>

<script>
  export default {
    name: 'M_Player',
    data() {
      return {};
    },
    props: {
      url: {
        type: String,
        required: true
      },
      settings: {
        type: Object,
        required: true
      },
      callback: {
        type: Function,
        default() {
          return function (player) {
          };
        }
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      initPlayer() {
        let settings = {
          id: 'J_prismPlayer',
          x5_fullscreen: true,
          x5_type: 'h5',
          autoplay: true,
          isLive: false,
          playsinline: true,
          width: '100%',
          controlBarVisibility: 'always',
          useH5Prism: true,
          useFlashPrism: false,
          rePlay: true,
          source: '',
          cover: ''
        };
        let player = new Aliplayer(settings, this.callback);
        let video = document.querySelector('#J_prismPlayer video');
        window.onresize = function () {
          video.style.width = window.innerWidth + 'px';
          video.style.height = window.innerHeight + 'px';
          video.style['object-position'] = '0px 0px'; // 顶部
          let offsetY = video.clientHeight - (video.clientWidth * video.videoHeight / video.videoWidth);
          // video.style['object-position'] = '0px ' + offsetY + 'px'; // 底部
          video.style['object-fit'] = 'contain'; // 视屏铺满容器
        };
      }
    }
  };
</script>

<style scoped type="text/stylus" lang="stylus">

</style>
