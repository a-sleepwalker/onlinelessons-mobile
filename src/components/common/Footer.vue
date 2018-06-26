<template>
  <div>
    <footer class="page-footer">
      <div class="copyright-container">
        <p class="view-selection">
          <a href="javascript:" class="view-type">网站地图</a><span> | </span>
          <a href="javascript:" class="view-type type-active">手机标准版</a><span> | </span>
          <a href="javascript:" class="view-type">电脑版</a>
        </p>
        <p class="copyright">
          Copyright @ 2005-2016 www.xkpx.com.All Right Reserved.
        </p>
      </div>
      <div class="bottom-btn-group">
        <a href="javascript:" class="phone-advisory advisory-btn in-bl">
          <i class="phone-icon in-bl"></i>
          电话咨询
        </a>
        <a href="javascript:" class="online-advisory advisory-btn in-bl">
          <i class="online-icon in-bl"></i>
          在线咨询
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {};
    },
    created() {

    },
    mounted() {

    },
    methods: {}
  };
</script>

<style scoped lang="stylus" type="text/stylus">
  .page-footer
    .copyright-container
      margin-bottom: 3rem
      height: 3rem
      text-align: center

      span, .view-type, .copyright
        color: #999
        font-size: .625rem

      .type-active
        color: #198eee;

    .copyright
      line-height: 1.3rem

    .bottom-btn-group
      width: 100%
      height: 3rem
      position: fixed
      bottom: 0

      .advisory-btn
        width: 11.5rem
        height: 3rem
        line-height: 3rem
        text-align: center
        color: #fff
        font-size: .875rem

      .phone-advisory
        background: #198eee

        .phone-icon
          margin-left: .5rem
          width: 1.5625rem
          height: 1.5625rem
          vertical-align: middle
          background: url("/static/mob-img/phone-icon.png") no-repeat
          background-size: 100% 100%

      .online-advisory
        background: #ee4b19

        .online-icon
          margin-left: .5rem
          width: 1.5625rem
          height: 1.5625rem
          vertical-align: middle
          background: url("/static/mob-img/online-icon.png") no-repeat
          background-size: 100% 100%
</style>
