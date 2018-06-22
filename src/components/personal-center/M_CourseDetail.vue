<template>
  <div>
    <M-Header></M-Header>
    <div class="main-container">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="mk">
        </mt-tab-container-item>
        <mt-tab-container-item id="zl">
        </mt-tab-container-item>
        <mt-tab-container-item id="tk">
        </mt-tab-container-item>
        <mt-tab-container-item id="jh">
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <footer>
      <mt-tabbar v-model="active">
        <mt-tab-item id="mk">
          <img slot="icon" src="/static/img/mk.png">
          模考
        </mt-tab-item>
        <mt-tab-item id="zl">
          <img slot="icon" src="/static/img/zl.png">
          资料
        </mt-tab-item>
        <mt-tab-item id="tk">
          <img slot="icon" src="/static/img/tk.png">
          题库
        </mt-tab-item>
        <mt-tab-item id="jh">
          <img slot="icon" src="/static/img/jh.png">
          考试计划变更
        </mt-tab-item>
      </mt-tabbar>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'M_CourseDetail',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve)
    },
    data() {
      return {
        active: ''
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {}
  };
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
