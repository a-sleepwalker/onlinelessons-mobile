<template>
  <div id="app-container">
    <transition name="slide-fade" mode="out-in">
      <!--<keep-alive>-->
      <router-view :key="$route.name"/>
      <!--</keep-alive>-->
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
  /*  name=slade-fade */
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s ease-out;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  /*  name=fade */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .slide-enter-active {
    transition: all .3s ease;
  }

  .slide-leave-active {
    transition: all .3s ease-out;
  }

  .slide-enter, .slide-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
