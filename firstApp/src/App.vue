<template>
  <div id="app">
    <appHeader></appHeader>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="Delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="History"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="OrderingGuide"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import appHeader from './components/Header'

  export default {
    name: 'App',
    components: {
      appHeader
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
