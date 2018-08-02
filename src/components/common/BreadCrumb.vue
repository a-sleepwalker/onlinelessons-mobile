<template>
  <div>
    <div class="breadcrumbs">
      <p class="breadcrumbs-content">当前位置：
        <a href="javascript:" class="breadcrumbs-item ">新科首页</a> >
        <a href="javascript:" class="breadcrumbs-item disabled">个人中心</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BreadCrumb',
    data() {
      return {};
    },
    props: {},
    created() {

    },
    mounted() {

    },
    methods: {}
  };
</script>

<style scoped lang="stylus" type="text/stylus">
  .breadcrumbs
    padding: 0 1rem
    height: 3rem
    line-height: 3rem
    font-size: .625rem
    color: #999

    .breadcrumbs-item
      color: #666

    .disabled
      color: #999
</style>
