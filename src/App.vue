<!--
 * @Author: jack
 * @Date: 2021-12-03 10:34:04
 * @LastEditors: g05047
 * @LastEditTime: 2021-12-03 16:19:23
 * @Description: create
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './common/font/font.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
