<template>
  <div id="app-container">
    <transition>
      <!--<keep-alive>-->
      <router-view/>
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

</style>
