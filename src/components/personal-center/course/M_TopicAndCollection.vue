<template>
  <div>
    <M-Header pageTitle="错题及收藏"></M-Header>
    <div class="main-container">
      <div class="content-header">
        <ul class="signed-up-list">
          <li class="signed-up-item"></li>
        </ul>
      </div>
      <div class="content">

      </div>
    </div>
    <M-BreadCrumb></M-BreadCrumb>
    <M-Footer></M-Footer>
  </div>
</template>

<script>
  export default {
    name: 'M_TopicAndCollection',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve),
      'M-Footer': resolve => require(['@/components/common/Footer'], resolve),
      'M-BreadCrumb': resolve => require(['@/components/common/BreadCrumb'], resolve)
    },
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
  .signed-up-item
    width: 9.375rem
    height: 4.375rem
    border-radius: .5rem
</style>
