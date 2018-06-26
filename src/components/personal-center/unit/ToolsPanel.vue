<template>
  <div class="panel-container">
    <div class="panel-title clearfix">
      <h3 class="title-text in-bl">{{panelTitle}}</h3>
      <slot></slot>
    </div>
    <div class="panel-content">
      <ul class="panel-tool-list">
        <li @click="jumpHandler(tool.className)" class="tool-item in-bl" v-for="tool in panelToolList" :key="tool.id">
          <div class="tool-icon" :class="tool.className"></div>
          <p class="tool-text">{{tool.text}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ToolsPanel',
    data() {
      return {};
    },
    props: {
      panelTitle: '',
      panelToolList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    created() {

    },
    mounted() {
    },
    methods: {
      jumpHandler(url) {
        this.$emit('jumpTo', url);
      }
    }
  };
</script>

<style scoped lang="stylus" type="text/stylus">
  .panel-container
    width: 100%
    background: #fff

    .panel-title
      padding: 0 1rem
      height: 2.34rem
      line-height: 2.34rem
      color: #333
      font-size: .875rem
      border-bottom: 1px solid #ccc

      .number
        color: #ee4b19

    .panel-content
      .tool-item
        margin: 0 1rem 1rem 1rem
        width: 5.625rem
        height: 5.625rem

        .tool-icon
          margin 1rem auto .5rem
          width: 2.5rem
          height: 2.5rem

        .teacher
          background: url("/static/mob-img/teacher.png") no-repeat
          background-size 100% 100%

        .course
          background: url("/static/mob-img/course.png") no-repeat
          background-size 100% 100%

        .bank
          background: url("/static/mob-img/bank.png") no-repeat
          background-size 100% 100%

        .score
          background: url("/static/mob-img/score.png") no-repeat
          background-size 100% 100%

        .latest
          background: url("/static/mob-img/latest.png") no-repeat
          background-size 100% 100%

        .download
          background: url("/static/mob-img/download.png") no-repeat
          background-size 100% 100%

        .curriculum
          background: url("/static/mob-img/curriculum.png") no-repeat
          background-size 100% 100%

        .newcourse
          background: url("/static/mob-img/newcourse.png") no-repeat
          background-size 100% 100%

        .tool-text
          text-align: center
          font-size: .75rem
          color: #666
          line-height: 1rem
</style>
