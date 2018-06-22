<template>
  <div>
    <mt-header :title="pageTitle" :style="styleObj">
      <a @click="goBack" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
      <!--<mt-button icon="more" slot="right"></mt-button>-->
      <slot slot="right"></slot>
    </mt-header>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {};
    },
    props: {
      pageTitle: '',
      styleObj: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    created() {

    },
    mounted() {
    },
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/');
      }
    }
  };
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
