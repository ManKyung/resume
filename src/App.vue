<template>
  <div id="app">
    <layout-component></layout-component>
    <left-component></left-component>
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from '@/components/views/Layout'
import Left from '@/components/views/Left'
export default {
  name: 'App',
  components: {
    'left-component' : Left,
    'layout-component' : Layout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
